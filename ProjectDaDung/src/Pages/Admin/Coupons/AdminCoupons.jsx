import React from 'react'
import '../StaticAdminPages.css'
import './AdminCoupons.css'

const coupons = [
  ['WELCOME20', '20%', 'Don tu 500.000 VND', 'Dang hoat dong', 'green'],
  ['FREESHIP', '35.000 VND', 'Moi don hang', 'Dang hoat dong', 'green'],
  ['SUMMER10', '10%', 'Don tu 1.000.000 VND', 'Tam dung', 'yellow'],
]

const AdminCoupons = () => {
  return (
    <div className="admin-static-page admin-coupons-page">
      <header className="admin-static-header">
        <div>
          <h1 className="admin-static-title">Quan ly ma giam gia</h1>
          <p className="admin-static-subtitle">Giao dien tinh cho danh sach va form tao coupon.</p>
        </div>
        <button type="button" className="admin-static-btn">
          <span className="material-symbols-outlined">add</span>
          Tao ma moi
        </button>
      </header>

      <section className="admin-static-two-col">
        <article className="admin-static-card">
          <h2>Danh sach ma</h2>
          <div className="admin-static-table-wrap">
            <table className="admin-static-table">
              <thead>
                <tr>
                  <th>Ma</th>
                  <th>Giam gia</th>
                  <th>Dieu kien</th>
                  <th>Trang thai</th>
                  <th>Thao tac</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map(([code, discount, condition, status, color]) => (
                  <tr key={code}>
                    <td><strong>{code}</strong></td>
                    <td>{discount}</td>
                    <td>{condition}</td>
                    <td><span className={`admin-badge-static ${color}`}>{status}</span></td>
                    <td>
                      <button type="button" className="admin-static-btn-outline">Sua</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="admin-static-card">
          <h2>Thong tin ma giam gia</h2>
          <form className="admin-form-grid">
            <div className="admin-form-group full">
              <label htmlFor="couponCode">Ma coupon</label>
              <input id="couponCode" className="admin-static-input" defaultValue="WELCOME20" />
            </div>
            <div className="admin-form-group">
              <label htmlFor="couponType">Loai</label>
              <select id="couponType" className="admin-static-select" defaultValue="percent">
                <option value="percent">Phan tram</option>
                <option value="fixed">So tien co dinh</option>
              </select>
            </div>
            <div className="admin-form-group">
              <label htmlFor="couponValue">Gia tri</label>
              <input id="couponValue" className="admin-static-input" defaultValue="20" />
            </div>
            <div className="admin-form-group full">
              <label htmlFor="couponNote">Mo ta</label>
              <textarea id="couponNote" className="admin-static-textarea" defaultValue="Giam gia cho khach hang moi." />
            </div>
            <button type="button" className="admin-static-btn">Luu ma giam gia</button>
          </form>
        </aside>
      </section>
    </div>
  )
}

export default AdminCoupons
