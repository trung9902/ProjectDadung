import React from 'react'
import '../StaticAdminPages.css'
import './AdminReports.css'

const stats = [
  ['payments', 'Tong doanh thu', '1.248.500.000 VND', '+12.5%'],
  ['shopping_bag', 'So don hang', '3.421', '+8.2%'],
  ['group', 'Khach hang moi', '856', '-2.4%'],
  ['conversion_path', 'Ty le chuyen doi', '3.45%', '+0.8%'],
]

const recentOrders = [
  ['#ORD-2849', 'Tran Van Hung', '2.540.000 VND', 'Da giao hang', 'green'],
  ['#ORD-2848', 'Le Thi Mai', '1.120.000 VND', 'Cho xu ly', 'yellow'],
  ['#ORD-2847', 'Anh Duc', '4.850.000 VND', 'Dang dong goi', 'blue'],
]

const AdminReports = () => {
  return (
    <div className="admin-static-page admin-reports-page">
      <header className="admin-static-header">
        <div>
          <h1 className="admin-static-title">Bao cao doanh thu</h1>
          <p className="admin-static-subtitle">Phan tich chi tiet hieu suat kinh doanh cua cua hang.</p>
        </div>
        <div className="admin-static-actions">
          <button type="button" className="admin-static-btn-outline">
            <span className="material-symbols-outlined">calendar_today</span>
            30 ngay qua
          </button>
          <button type="button" className="admin-static-btn">
            <span className="material-symbols-outlined">file_download</span>
            Xuat bao cao
          </button>
        </div>
      </header>

      <section className="admin-static-grid">
        {stats.map(([icon, label, value, trend]) => (
          <article className="admin-static-card admin-stat" key={label}>
            <div>
              <p className="admin-stat-label">{label}</p>
              <p className="admin-stat-value">{value}</p>
              <span className={trend.startsWith('+') ? 'admin-trend-up' : 'admin-trend-down'}>{trend}</span>
            </div>
            <span className="admin-stat-icon material-symbols-outlined">{icon}</span>
          </article>
        ))}
      </section>

      <section className="admin-static-two-col admin-report-main">
        <article className="admin-static-card">
          <h2>Bieu do doanh thu</h2>
          <div className="admin-chart">
            {[60, 45, 80, 70, 95, 30, 25].map((height, index) => (
              <div className="admin-chart-col" key={index}>
                <div className={`admin-chart-bar ${index === 4 ? 'active' : ''}`} style={{ height: `${height}%` }} />
                <span>{['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'][index]}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="admin-static-card">
          <h2>Ban chay nhat</h2>
          {['Giay chay bo Nike Air Max', 'Dong ho thong minh Series 8', 'Tai nghe khong day Pro'].map((name, index) => (
            <div className="admin-best-seller" key={name}>
              <span>{index + 1}</span>
              <div>
                <strong>{name}</strong>
                <p>{156 - index * 28} da ban</p>
              </div>
            </div>
          ))}
        </article>
      </section>

      <section className="admin-static-card">
        <h2>Don hang gan day</h2>
        <div className="admin-static-table-wrap">
          <table className="admin-static-table">
            <thead>
              <tr>
                <th>Ma don</th>
                <th>Khach hang</th>
                <th>So tien</th>
                <th>Trang thai</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(([id, customer, amount, status, color]) => (
                <tr key={id}>
                  <td><strong>{id}</strong></td>
                  <td>{customer}</td>
                  <td>{amount}</td>
                  <td><span className={`admin-badge-static ${color}`}>{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default AdminReports
