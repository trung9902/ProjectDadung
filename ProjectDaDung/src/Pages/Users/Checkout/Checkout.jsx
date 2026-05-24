import React, { useEffect, useMemo, useState } from 'react'
import './Checkout.css'

const API_URL = 'http://localhost:8080/api'

const initialFormData = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  apartment: '',
  city: '',
  state: '',
  zip: '',
}

const formatCurrency = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

const Checkout = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [step, setStep] = useState(1)
  const [draft, setDraft] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch {
      return []
    }
  })

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  )

  const payload = useMemo(() => ({
    ...formData,
    items: cart.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    })),
  }), [formData, cart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const updateFormData = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleInformation = async () => {
    if (cart.length === 0) {
      setMessage('Giỏ hàng đang trống.')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch(`${API_URL}/checkout-drafts${draft ? `/${draft.id}` : ''}`, {
        method: draft ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Không thể lưu thông tin giao hàng.')
      }

      setDraft(data)
      setStep(2)
      setMessage('Thông tin đã được lưu tạm. Vui lòng chọn phương thức thanh toán.')
    } catch (error) {
      setMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="checkout-page-bg">
      <header className="checkout-header">
        <div className="checkout-header-inner">
          <span className="checkout-logo">MODERN_RETAIL</span>
        </div>
      </header>

      <main className="checkout-main">
        <div className="checkout-grid">
          <div className="checkout-steps-col">
            <nav aria-label="Progress" className="checkout-progress">
              <div className={`checkout-step ${step === 1 ? 'active' : ''}`}>
                <div className="checkout-step-num">1</div>
                <span className="checkout-step-label">Địa chỉ giao hàng</span>
              </div>
              <div className="checkout-step-divider"></div>
              <div className={`checkout-step ${step === 2 ? 'active' : 'inactive'}`}>
                <div className="checkout-step-num">2</div>
                <span className="checkout-step-label">Phương thức thanh toán</span>
              </div>
            </nav>

            {message && <div className="checkout-message">{message}</div>}

            <section className={`checkout-section ${step === 1 ? 'active' : ''}`}>
              <h2 className="checkout-section-title">Thông tin liên hệ</h2>
              <div className="checkout-form-group mb-lg">
                <label htmlFor="email" className="checkout-label">Địa chỉ Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" className="checkout-input" value={formData.email} onChange={updateFormData} />
              </div>

              <h2 className="checkout-section-title">Địa chỉ giao hàng</h2>
              <div className="checkout-form-row">
                <div className="checkout-form-group">
                  <label htmlFor="firstName" className="checkout-label">Tên</label>
                  <input id="firstName" name="firstName" type="text" className="checkout-input" value={formData.firstName} onChange={updateFormData} />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="lastName" className="checkout-label">Họ</label>
                  <input id="lastName" name="lastName" type="text" className="checkout-input" value={formData.lastName} onChange={updateFormData} />
                </div>
                <div className="checkout-form-group full-width">
                  <label htmlFor="address" className="checkout-label">Địa chỉ đường</label>
                  <input id="address" name="address" type="text" className="checkout-input" value={formData.address} onChange={updateFormData} />
                </div>
                <div className="checkout-form-group full-width">
                  <label htmlFor="apartment" className="checkout-label">Căn hộ, dãy phòng, v.v. (không bắt buộc)</label>
                  <input id="apartment" name="apartment" type="text" className="checkout-input" value={formData.apartment} onChange={updateFormData} />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="city" className="checkout-label">Thành phố</label>
                  <input id="city" name="city" type="text" className="checkout-input" value={formData.city} onChange={updateFormData} />
                </div>
                <div className="checkout-form-group row">
                  <div className="checkout-sub-group">
                    <label htmlFor="state" className="checkout-label">Tỉnh/Thành</label>
                    <input id="state" name="state" type="text" className="checkout-input" value={formData.state} onChange={updateFormData} />
                  </div>
                  <div className="checkout-sub-group">
                    <label htmlFor="zip" className="checkout-label">Mã bưu chính</label>
                    <input id="zip" name="zip" type="text" className="checkout-input" value={formData.zip} onChange={updateFormData} />
                  </div>
                </div>
              </div>

              <div className="checkout-step-footer">
                <button type="button" className="checkout-next-btn" onClick={handleInformation} disabled={isSubmitting}>
                  {isSubmitting ? 'Đang lưu...' : 'Tiếp tục thanh toán'}
                </button>
              </div>
            </section>

            <section className={`checkout-section ${step === 2 ? 'active' : 'inactive'}`}>
              <div className="checkout-section-header">
                <h2 className="checkout-section-title mb-0">Phương thức thanh toán</h2>
                <span className="material-symbols-outlined text-muted">{step !== 2 ? 'lock' : ''}</span>
              </div>
              <div className="checkout-payment-box">
                {step !== 2 ? (
                  <p className="checkout-payment-lock-text">Vui lòng hoàn thành bước thông tin giao hàng trước khi chọn phương thức thanh toán.</p>
                ) : (
                  <div className="checkout-payment-methods" role="radiogroup" aria-label="Phương thức thanh toán">
                    <button
                      type="button"
                      className={`checkout-payment-method ${paymentMethod === 'cod' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('cod')}
                      role="radio"
                      aria-checked={paymentMethod === 'cod'}
                    >
                      <span className="checkout-payment-logo cod-logo">COD</span>
                      <span className="checkout-payment-copy">
                        <strong>Thanh toán khi nhận hàng</strong>
                        <small>Thanh toán bằng tiền mặt khi đơn hàng được giao.</small>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`checkout-payment-method ${paymentMethod === 'vnpay' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('vnpay')}
                      role="radio"
                      aria-checked={paymentMethod === 'vnpay'}
                    >
                      <span className="checkout-payment-logo vnpay-logo">VNPAY</span>
                      <span className="checkout-payment-copy">
                        <strong>Thanh toán VNPAY</strong>
                        <small>Thanh toán qua mã QR, thẻ ATM hoặc ngân hàng nội địa.</small>
                      </span>
                    </button>

                    <button
                      type="button"
                      className={`checkout-payment-method ${paymentMethod === 'shopeepay' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('shopeepay')}
                      role="radio"
                      aria-checked={paymentMethod === 'shopeepay'}
                    >
                      <span className="checkout-payment-logo shopeepay-logo">ShopeePay</span>
                      <span className="checkout-payment-copy">
                        <strong>Thanh toán ShopeePay</strong>
                        <small>Thanh toán nhanh bằng ví điện tử ShopeePay.</small>
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="checkout-summary-col">
            <div className="checkout-summary-card">
              <h2 className="checkout-section-title">Tóm tắt đơn hàng</h2>

              <div className="checkout-summary-items">
                {cart.map((item) => (
                  <div className="checkout-summary-item" key={item.id}>
                    <div className="checkout-item-img-wrapper">
                      <img alt={item.name} className="checkout-item-img" src={item.image} />
                    </div>
                    <div className="checkout-item-info">
                      <h3 className="checkout-item-title">{item.name}</h3>
                      <div className="checkout-item-price-row">
                        <span className="checkout-item-qty">SL: {item.quantity}</span>
                        <span className="checkout-item-price">{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="checkout-promo">
                <input type="text" placeholder="Thẻ quà tặng hoặc mã giảm giá" className="checkout-inputGift flex-1" />
                <button type="button" className="checkout-promo-btn">Áp dụng</button>
              </div>

              <div className="checkout-totals">
                <div className="checkout-total-row">
                  <span>Tổng phụ</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="checkout-total-row">
                  <span>Giao hàng</span>
                  <span className="font-medium">Miễn phí</span>
                </div>
              </div>

              <div className="checkout-final-total">
                <span className="checkout-final-label">Tổng cộng</span>
                <div className="checkout-final-value-group">
                  <span className="checkout-final-value">{formatCurrency(subtotal)}</span>
                </div>
              </div>

              <div className="checkout-trust">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Thanh toán mã hóa bảo mật</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="checkout-footer">
        <p>© 2024 MODERN_RETAIL. Thanh toán bảo mật.</p>
      </footer>
    </div>
  )
}

export default Checkout
