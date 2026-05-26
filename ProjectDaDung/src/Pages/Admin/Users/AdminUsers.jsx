import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const API = 'http://localhost:8080/api'

const AdminUsers = () => {
  const { token } = useAuth()
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(`${API}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(r => r.json())
      .then(d => { setUsers(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [token])

  const filtered = users.filter(u =>
    u.fullName.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Quản lý Người dùng</h1>
        <p className="admin-page-sub">{users.length} tài khoản đã đăng ký</p>
      </div>

      <div style={{ marginBottom: 16 }}>
        <input
          className="admin-input"
          placeholder="Tìm kiếm người dùng..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 320 }}
        />
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#71717a' }}>Đang tải...</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Vai trò</th>
                  <th>Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={5} style={{ textAlign: 'center', color: '#71717a', padding: 32 }}>Không tìm thấy người dùng</td></tr>
                ) : filtered.map(u => (
                  <tr key={u.id}>
                    <td style={{ color: '#71717a', fontSize: 13 }}>#{u.id}</td>
                    <td style={{ fontWeight: 500 }}>{u.fullName}</td>
                    <td style={{ color: '#52525b' }}>{u.email}</td>
                    <td>
                      <span className={`admin-badge ${u.role === 'Admin' ? 'admin-badge-red' : 'admin-badge-blue'}`}>
                        {u.role}
                      </span>
                    </td>
                    <td style={{ fontSize: 13, color: '#71717a' }}>
                      {new Date(u.createdAt).toLocaleDateString('vi-VN')}
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

export default AdminUsers
