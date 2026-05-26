import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const API = 'http://localhost:8080/api'

const statusBadge = (status) => {
  const map = {
    Pending: 'admin-badge-yellow',
    Processing: 'admin-badge-blue',
    Shipped: 'admin-badge-blue',
    Delivered: 'admin-badge-green',
    Cancelled: 'admin-badge-red',
  }
  return map[status] || 'admin-badge-gray'
}

const StatCard = ({ icon, label, value, color }) => (
  <div className="admin-card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <div style={{
      width: 48, height: 48, borderRadius: 10,
      background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
    }}>
      <i className={`fa-solid ${icon}`} style={{ color: 'white', fontSize: 20 }}></i>
    </div>
    <div>
      <p style={{ margin: 0, fontSize: 13, color: '#71717a' }}>{label}</p>
      <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#18181b' }}>{value}</p>
    </div>
  </div>
)

const Dashboard = () => {
  const { token } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API}/admin/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => { setError('Không thể tải dữ liệu.'); setLoading(false) })
  }, [token])

  if (loading) return <div style={{ padding: 40, textAlign: 'center', color: '#71717a' }}>Đang tải...</div>
  if (error) return <div style={{ padding: 40, textAlign: 'center', color: '#dc2626' }}>{error}</div>

  const fmt = (n) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-sub">Tổng quan hoạt động cửa hàng</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        <StatCard icon="fa-sack-dollar" label="Tổng doanh thu" value={fmt(data.totalRevenue)} color="#16a34a" />
        <StatCard icon="fa-receipt" label="Tổng đơn hàng" value={data.totalOrders} color="#2563eb" />
        <StatCard icon="fa-box" label="Sản phẩm" value={data.totalProducts} color="#9333ea" />
        <StatCard icon="fa-users" label="Người dùng" value={data.totalUsers} color="#ea580c" />
      </div>

      <div className="admin-card">
        <h2 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 600, color: '#18181b' }}>
          Đơn hàng gần nhất
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Email</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {data.recentOrders.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', color: '#71717a' }}>Chưa có đơn hàng</td></tr>
              ) : data.recentOrders.map(o => (
                <tr key={o.id}>
                  <td>#{o.id}</td>
                  <td>{o.customerName}</td>
                  <td>{o.email}</td>
                  <td>{fmt(o.total)}</td>
                  <td><span className={`admin-badge ${statusBadge(o.status)}`}>{o.status}</span></td>
                  <td>{new Date(o.createdAt).toLocaleDateString('vi-VN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
