import React from 'react'
import '../StaticAdminPages.css'
import './AdminOrderDetail.css'

const items = [
  ['Dong ho thong minh Modern S1', 'Trang Tuyet / 44mm', '1', '2.490.000 VND', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2LPWEv8slULW5IDX0BJbyyjh_Hkeb25HinKxIgMXf1PcxxMrYq815B7pTgzvzKheWbluUGghBc31QNX5DfP5A6WWUrWzzX62l07HSJWq5n_uSZQU1ryiInPq857AVi3Fo4cNHF6NRBFPSIMRbvU8oCfzhLpBVjnh_rHQ7VLhD7pLtFnj5xvilltPuc0iF44hrHF0oAsOVVKGAMjyz8bKf7pRaU6sG0hyc9vLIKrT0uRXAvNzNtV4bPKGTK0RcpqabERdZqqjL8LHH'],
  ['Tai nghe chong on Pro Max', 'Den Than', '2', '2.500.000 VND', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdN3R4d5FoixzmZ9szyANKsjxbUuOhaFj3KwfPpR2kPnqWBi9eQlUbpMJEd1YS1OMzZAd-e7fQ2i8U6ZtCcOC2cF_HhqyyMTtaxvXL_6GSiNAvS1L0ik9X1ERQK6RurmiOhS2Pu0BD4OdP03QCq6LYvBk7vQJ224AaMmUSH66NgarzXfXIfC-_9US01JoUmaiAQnALIegshDGuCXbqwbC3wsgW2bm0S5oRs-RdV0UbdqC2y-8wrazCHkmhw1QDyS9KNHmA0nKeGVMW'],
]

const AdminOrderDetail = () => {
  return (
    <div className="admin-static-page admin-order-detail-page">
      <header className="admin-static-header">
        <div>
          <h1 className="admin-static-title">Chi tiet don hang #ORD-88291</h1>
          <p className="admin-static-subtitle">Ngay dat: 24/10/2024 - 14:30</p>
          <span className="admin-badge-static blue">Dang xu ly</span>
        </div>
        <div className="admin-static-actions">
          <button type="button" className="admin-static-btn-outline">
            <span className="material-symbols-outlined">print</span>
            In hoa don
          </button>
          <button type="button" className="admin-static-btn">
            <span className="material-symbols-outlined">edit</span>
            Cap nhat trang thai
          </button>
        </div>
      </header>

      <section className="admin-static-two-col">
        <div className="admin-order-main-col">
          <article className="admin-static-card">
            <h2>San pham trong don</h2>
            <div className="admin-static-table-wrap">
              <table className="admin-static-table">
                <thead>
                  <tr>
                    <th>San pham</th>
                    <th>So luong</th>
                    <th>Tong</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(([name, variant, quantity, total, image]) => (
                    <tr key={name}>
                      <td>
                        <div className="admin-product-cell">
                          <img src={image} alt={name} />
                          <div>
                            <strong>{name}</strong>
                            <p>{variant}</p>
                          </div>
                        </div>
                      </td>
                      <td>{quantity}</td>
                      <td><strong>{total}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="admin-order-total">
              <span>Tong cong</span>
              <strong>4.925.000 VND</strong>
            </div>
          </article>

          <article className="admin-static-card">
            <h2>Lich su don hang</h2>
            <div className="admin-order-timeline">
              <p><strong>Don hang dang duoc xu ly</strong><span>25/10/2024 - 09:15</span></p>
              <p><strong>Don hang da duoc tao</strong><span>24/10/2024 - 14:30</span></p>
            </div>
          </article>
        </div>

        <aside className="admin-order-side-col">
          <article className="admin-static-card">
            <h2>Khach hang</h2>
            <p><strong>Tran Minh Duc</strong></p>
            <p>duc.tran@email.com</p>
            <p>090 123 4567</p>
          </article>
          <article className="admin-static-card">
            <h2>Giao hang & thanh toan</h2>
            <p>123 Le Loi, Quan 1, TP. Ho Chi Minh</p>
            <p>Chuyen khoan ngan hang</p>
            <span className="admin-badge-static green">Da thanh toan</span>
          </article>
          <article className="admin-static-card">
            <h2>Ghi chu noi bo</h2>
            <textarea className="admin-static-textarea" defaultValue="Da kiem tra kho va xac nhan du so luong." />
            <button type="button" className="admin-static-btn">Luu ghi chu</button>
          </article>
        </aside>
      </section>
    </div>
  )
}

export default AdminOrderDetail
