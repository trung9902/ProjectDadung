import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './AdminLayout.css'

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: 'fa-gauge', end: true },
  { to: '/admin/products', label: 'Sản phẩm', icon: 'fa-box' },
  { to: '/admin/orders', label: 'Đơn hàng', icon: 'fa-receipt' },
  { to: '/admin/users', label: 'Người dùng', icon: 'fa-users' },
]

const AdminLayout = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <span className="admin-brand">MODERN_RETAIL</span>
          <span className="admin-brand-sub">Quản trị</span>
        </div>

        <nav className="admin-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <NavLink to="/" className="admin-nav-item">
            <i className="fa-solid fa-store"></i>
            <span>Về trang chủ</span>
          </NavLink>
          <button className="admin-nav-item admin-logout" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="admin-main">
        <header className="admin-topbar">
          <button className="admin-menu-btn" onClick={() => setSidebarOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="admin-topbar-right">
            <span className="admin-topbar-user">
              <i className="fa-solid fa-user-tie"></i> {user?.fullName}
            </span>
          </div>
        </header>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
