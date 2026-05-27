import React from 'react'
import './AccountOrders.css'

const orders = [
  ['#ORD-882910', '24/10/2023', '13.375.000 VND', 'Dang giao hang', 'blue'],
  ['#ORD-882642', '18/10/2023', '4.925.000 VND', 'Da giao hang', 'green'],
  ['#ORD-881903', '09/10/2023', '1.550.000 VND', 'Cho xu ly', 'orange'],
  ['#ORD-880711', '28/09/2023', '2.100.000 VND', 'Da huy', 'red'],
]

const AccountOrders = () => {
  return (
    <main className="static-page account-orders-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Tai khoan / Don hang</p>
          <h1 className="static-heading">Lich su don hang</h1>
          <p className="static-subtitle">Theo doi cac don hang gan day va trang thai giao hang.</p>
        </div>
      </section>

      <section className="static-card account-orders-card">
        <div className="account-orders-toolbar">
          <input className="static-input" placeholder="Tim theo ma don hang" />
          <select className="static-select" defaultValue="all">
            <option value="all">Tat ca trang thai</option>
            <option value="shipping">Dang giao hang</option>
            <option value="done">Da giao hang</option>
          </select>
        </div>
        <div className="static-table-wrap">
          <table className="static-table">
            <thead>
              <tr>
                <th>Ma don</th>
                <th>Ngay dat</th>
                <th>Tong tien</th>
                <th>Trang thai</th>
                <th>Thao tac</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(([id, date, total, status, color]) => (
                <tr key={id}>
                  <td><strong>{id}</strong></td>
                  <td>{date}</td>
                  <td>{total}</td>
                  <td><span className={`status-pill ${color}`}>{status}</span></td>
                  <td><a className="account-orders-link" href="/account/orders/1">Xem chi tiet</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default AccountOrders
