import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './AccountOrderDetail.css'
import { useGetOrdersById } from '../../../../servers/order'

const orderItems = [
  ['Air Zoom Pegasus 38 Premium', 'Nike Performance', '3.450.000 VND', 'x1', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgA2ibG5LxLZhsBhAaaFfPVVvZ0xWdPotgocZTrZWkoOxaQQELOpevEa56TfWjw0wJr-hKfHz-gxcJPyEqYU22mngC120lmbObMFIiZMMEr4_0Ipotd3Woa_kJ40hyw1sJCE98KkiWLgLPvbPSwC9yPsCcTl_8qOmdiAC0aEcRp-CDgjKp3NB8NLumKquE4oYxq2uz1pOAuAWDdnVeCUPMifLV-wBRKjCJl75Mo-L_ZnrSiSICfwz1PUWPOYaAg6WenBXvitqu0Fdq'],
  ['Smart Watch Series 7 Minimalist', 'ModernWear', '5.890.000 VND', 'x1', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwOVPnXl39ZV8rrD2Gpi-Y9xrxr_bhYW3G5ScB-CIDZusjsZOAqd1ThYkXihpqt99HdGHbd5PhCAbVWf_YgRBsIwrW2ctutrkTh-deSSv_KKenqQA1mwefzAJVpap7Zvhg8Ztc8hkFHii2c3QN75fsRvk8q6ZtEZ5H_XwgeCIPfxdLSKcziexMo0UBY4atnPsPSe0FBFWqjycRctJkBADEX5ZHBfn5-zq_dZ3Cm_Pn7Ktb87ttgHPr7Gnd_RtceLCnZXcVDEaGMMAg'],
  ['Headphones Noise Cancelling V2', 'AudioPro', '4.200.000 VND', 'x1', 'https://lh3.googleusercontent.com/aida-public/AB6AXuANMVeq41pPwCBMgJzMm8xwunb6MegYzfu-SJFyqho9dH-F4hGLzBVZCd79fcpZ0sVo-Esc5DslpTOkotjvSrquNrRdkk_lAnhwijsU7KNenyClKzcBfx1_v62Ao4PnpLw36jom7MwIuRBNwVdfeXB3pWu11Zl3SrWk4fyY_40TSZEtpdVR6kJZXMb8Wn5Fh9r7mYbe8QWvqIGKVb9dw-pIr5hbTxb18BXXL2J-gsGUrSw-WIANiipZ3KolkdYjqVQrMRJyrUMwZF6U'],
]

const AccountOrderDetail = () => {
  const { getOrdersById } = useGetOrdersById()
  const [loading, setLoading] = useState(false)
  const [ordersById, setOrdersById] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrdersById(id)
      setOrdersById(Array.isArray(data) ? data : [data])
    }

    fetchOrder()
  }, [id])

  return (
    <main className="static-page account-order-detail-page">
      {loading ?
        (<p>Loading...</p>) :
        (

          ordersById.map((order) => {
            return (
              <div key={order.id}>
                <section className="static-header">
                  <div>
                    <p className="static-eyebrow">Tai khoan / Don hang / #ORD-882910</p>
                    <h1 className="static-heading">Chi tiet don hang #ORD-882910</h1>
                    <p className="static-subtitle">Ngay dat: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'} - {order.createdAt ? new Date(order.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    }) : 'N/A'}</p>
                  </div>
                  <span className="status-pill blue">{(order.status === 'pending' ? 'Dang cho xac nhan' : order.status === 'confirmed' ? 'Da xac nhan' : 'Dang giao hang')}</span>
                </section>

                <section className="account-order-info-grid">
                  <article className="static-card static-card-pad">
                    <h2>Thong tin van chuyen</h2>
                    <p><strong>Nguyen Van A</strong></p>
                    <p className="static-muted">090 123 4567</p>
                    <p className="static-muted">123 Le Loi, Phuong Ben Thanh, Quan 1, TP. Ho Chi Minh</p>
                  </article>
                  <article className="static-card static-card-pad">
                    <h2>Phuong thuc thanh toan</h2>
                    <p><strong>The tin dung Visa</strong></p>
                    <p className="static-muted">**** **** **** 4582</p>
                    <span className="status-pill green">Da thanh toan</span>
                  </article>
                  <article className="static-card static-card-pad">
                    <h2>Lich su don hang</h2>
                    <div className="timeline">
                      <div className="timeline-item"><span className="timeline-dot">✓</span><strong>Dat hang thanh cong</strong><p>24/10/2023 14:35</p></div>
                      <div className="timeline-item"><span className="timeline-dot">✓</span><strong>Da xac nhan</strong><p>24/10/2023 15:10</p></div>
                      <div className="timeline-item"><span className="timeline-dot">✓</span><strong>Dang giao hang</strong><p>25/10/2023 09:30</p></div>
                    </div>
                  </article>
                </section>
              </div>
            )
          })

        )}

      <section className="account-order-layout static-section">
        <div>
          <h2>San pham da dat (3)</h2>
          <div className="account-order-items">
            {orderItems.map(([name, brand, price, qty, image]) => (
              <article className="static-card account-order-item" key={name}>
                <img src={image} alt={name} />
                <div>
                  <p className="static-brand">{brand}</p>
                  <h3>{name}</h3>
                  <p className="static-muted">Mau sac: Tieu chuan</p>
                </div>
                <div className="account-order-price">
                  <strong>{price}</strong>
                  <span>{qty}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="static-card static-card-pad account-order-summary">
          <h2>Tom tat thanh toan</h2>
          <p><span>Tam tinh</span><strong>13.540.000 VND</strong></p>
          <p><span>Phi van chuyen</span><strong>35.000 VND</strong></p>
          <p><span>Giam gia</span><strong>-200.000 VND</strong></p>
          <div className="account-order-total">
            <span>Tong cong</span>
            <strong>13.375.000 VND</strong>
          </div>
          <button type="button" className="static-btn">Theo doi don hang</button>
        </aside>
      </section>
    </main>
  )
}

export default AccountOrderDetail
