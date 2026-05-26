import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const API = 'http://localhost:8080/api'

const ORDER_STATUSES = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']

const statusClass = (s) => ({
  Pending: 'admin-badge-yellow',
  Processing: 'admin-badge-blue',
  Shipped: 'admin-badge-blue',
  Delivered: 'admin-badge-green',
  Cancelled: 'admin-badge-red',
}[s] || 'admin-badge-gray')

const AdminOrders = () => {
  const { token } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState('all')
  const [updatingId, setUpdatingId] = useState(null)

  const load = () => {
    setLoading(true)
    fetch(`${API}/orders`)
      .then(r => r.json())
      .then(d => { setOrders(d); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(load, [])

  const updateStatus = async (id, status) => {
    setUpdatingId(id)
    await fetch(`${API}/orders/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status })
    })
    setUpdatingId(null)
    load()
  }

  const filtered = filterStatus === 'all'
    ? orders
    : orders.filter(o => o.status === filterStatus)

  const fmt = (n) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Quản lý Đơn hàng</h1>
        <p className="admin-page-sub">{orders.length} đơn hàng tổng cộng</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {['all', ...ORDER_STATUSES].map(s => (
          <button
            key={s}
            className={`admin-btn ${filterStatus === s ? 'admin-btn-primary' : 'admin-btn-outline'}`}
            onClick={() => setFilterStatus(s)}
          >
            {s === 'all' ? 'Tất cả' : s}
          </button>
        ))}
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#71717a' }}>Đang tải...</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Mã đơn</th>
                  <th>Khách hàng</th>
                  <th>Email</th>
                  <th>Tổng tiền</th>
                  <th>Thanh toán</th>
                  <th>Trạng thái</th>
                  <th>Ngày tạo</th>
                  <th>Cập nhật</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} style={{ textAlign: 'center', color: '#71717a', padding: 32 }}>Không có đơn hàng</td></tr>
                ) : filtered.map(o => (
                  <tr key={o.id}>
                    <td style={{ fontWeight: 600 }}>#{o.id}</td>
                    <td>{o.customerName}</td>
                    <td style={{ color: '#52525b', fontSize: 13 }}>{o.email}</td>
                    <td style={{ fontWeight: 500 }}>{fmt(o.total)}</td>
                    <td>
                      <span className={`admin-badge ${o.paymentStatus === 'Paid' ? 'admin-badge-green' : 'admin-badge-yellow'}`}>
                        {o.paymentStatus}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-badge ${statusClass(o.status)}`}>{o.status}</span>
                    </td>
                    <td style={{ fontSize: 13, color: '#52525b' }}>
                      {new Date(o.createdAt).toLocaleDateString('vi-VN')}
                    </td>
                    <td>
                      <select
                        className="admin-input"
                        value={o.status}
                        disabled={updatingId === o.id}
                        onChange={e => updateStatus(o.id, e.target.value)}
                        style={{ fontSize: 13, padding: '6px 10px' }}
                      >
                        {ORDER_STATUSES.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminOrders
