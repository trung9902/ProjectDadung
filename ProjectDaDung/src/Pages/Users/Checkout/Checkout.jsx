import React from 'react'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className="checkout-page-bg">
      {/* Minimal Transactional Header */}
      <header className="checkout-header">
        <div className="checkout-header-inner">
          <span className="checkout-logo">MODERN_RETAIL</span>
        </div>
      </header>

      {/* Main Checkout Container */}
      <main className="checkout-main">
        <div className="checkout-grid">
          {/* Left Column: Checkout Steps */}
          <div className="checkout-steps-col">
            {/* Progress Indicator */}
            <nav aria-label="Progress" className="checkout-progress">
              <div className="checkout-step active">
                <div className="checkout-step-num">1</div>
                <span className="checkout-step-label">Địa chỉ giao hàng</span>
              </div>
              <div className="checkout-step-divider"></div>
              <div className="checkout-step inactive">
                <div className="checkout-step-num">2</div>
                <span className="checkout-step-label">Phương thức thanh toán</span>
              </div>
            </nav>

            {/* Step 1: Shipping Address Form */}
            <section className="checkout-section active">
              <h2 className="checkout-section-title">Thông tin liên hệ</h2>
              <div className="checkout-form-group mb-lg">
                <label htmlFor="email" className="checkout-label">Địa chỉ Email</label>
                <input id="email" type="email" placeholder="you@example.com" className="checkout-input" />
              </div>

              <h2 className="checkout-section-title">Địa chỉ giao hàng</h2>
              <form className="checkout-form">
                <div className="checkout-form-group">
                  <label htmlFor="firstName" className="checkout-label">Tên</label>
                  <input id="firstName" type="text" className="checkout-input" />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="lastName" className="checkout-label">Họ</label>
                  <input id="lastName" type="text" className="checkout-input" />
                </div>
                <div className="checkout-form-group full-width">
                  <label htmlFor="address" className="checkout-label">Địa chỉ đường</label>
                  <input id="address" type="text" className="checkout-input" />
                </div>
                <div className="checkout-form-group full-width">
                  <label htmlFor="apartment" className="checkout-label">Căn hộ, dãy phòng, v.v. (không bắt buộc)</label>
                  <input id="apartment" type="text" className="checkout-input" />
                </div>
                <div className="checkout-form-group">
                  <label htmlFor="city" className="checkout-label">Thành phố</label>
                  <input id="city" type="text" className="checkout-input" />
                </div>
                <div className="checkout-form-group row">
                  <div className="checkout-sub-group">
                    <label htmlFor="state" className="checkout-label">Tiểu bang</label>
                    <select id="state" className="checkout-select">
                      <option>Chọn</option>
                      <option>CA</option>
                      <option>NY</option>
                      <option>TX</option>
                    </select>
                  </div>
                  <div className="checkout-sub-group">
                    <label htmlFor="zip" className="checkout-label">Mã bưu chính</label>
                    <input id="zip" type="text" className="checkout-input" />
                  </div>
                </div>
              </form>

              <div className="checkout-step-footer">
                <button type="button" className="checkout-next-btn">
                  Tiếp tục thanh toán
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </section>

            {/* Step 2: Payment Method */}
            <section className="checkout-section inactive">
              <div className="checkout-section-header">
                <h2 className="checkout-section-title mb-0">Phương thức thanh toán</h2>
                <span className="material-symbols-outlined text-muted">lock</span>
              </div>
              <div className="checkout-locked-message">
                Hoàn thành bước giao hàng để mở khóa các tùy chọn thanh toán
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="checkout-summary-col">
            <div className="checkout-summary-card">
              <h2 className="checkout-section-title">Tóm tắt đơn hàng</h2>
              
              {/* Items List */}
              <div className="checkout-summary-items">
                {/* Item 1 */}
                <div className="checkout-summary-item">
                  <div className="checkout-item-img-wrapper">
                    <img alt="Item" className="checkout-item-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRIy7VWiIJUpyU9yai9-_kjx3pmCgPp5s16PJmeZ7IkzYKR-Ju37_0a7dTz59qlqM1VvCtruj5TmIkRy5QNJwsxEEqB3JGMBDtJIVBg_ltyUCb6TJMqukMMX2OqQleK0tO1kRXd9n8LrvwhfoTpJdywQsuMPg3Xh8C7WNaoTEbAsnY6Hxr3v4hZ3OIqE60x1TgCgx8eZ6NaeVEw-1kiZY09oWvEgWQhX_oEoCXtwi5B6CY5WpHsblFJMalJtMpltmIhfyVpAawSKIM" />
                  </div>
                  <div className="checkout-item-info">
                    <h3 className="checkout-item-title">Essential Cotton Tee</h3>
                    <p className="checkout-item-variant">Màu sắc: Onyx Black | Kích thước: M</p>
                    <div className="checkout-item-price-row">
                      <span className="checkout-item-qty">SL: 2</span>
                      <span className="checkout-item-price">$76.00</span>
                    </div>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="checkout-summary-item">
                  <div className="checkout-item-img-wrapper">
                    <img alt="Item" className="checkout-item-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EsNk2voYalIxlOtYfeyyfchp0TF3XFL9DQZN3mEM4YBPeFZlc0oJ9YpduL34fVNWDC-kxS0F8OjvjW4vNp07pfPz-_d21d6kZMg1O6_pS0UlC-Dyfo4YyCOmpaB2UcUKkVj0TZLYA1toY3fFcnLD8vuBs3w4nvc1UOCnXShQHQyknS-_lmtRFsXepEsK4TqCLRZsNgOy8U3m4cxJHj3KlVvPHw_wmUZRavgkZUss1o9xwEIvyWXQrzaJ-KrmPXaEYF0XtkAi1bcM" />
                  </div>
                  <div className="checkout-item-info">
                    <h3 className="checkout-item-title">Artisan Mug</h3>
                    <p className="checkout-item-variant">Màu sắc: Sand</p>
                    <div className="checkout-item-price-row">
                      <span className="checkout-item-qty">SL: 1</span>
                      <span className="checkout-item-price">$24.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="checkout-promo">
                <input type="text" placeholder="Thẻ quà tặng hoặc mã giảm giá" className="checkout-input flex-1" />
                <button type="button" className="checkout-promo-btn">Áp dụng</button>
              </div>

              {/* Totals */}
              <div className="checkout-totals">
                <div className="checkout-total-row">
                  <span>Tổng phụ</span>
                  <span className="font-medium">$100.00</span>
                </div>
                <div className="checkout-total-row">
                  <span>Giao hàng</span>
                  <span className="font-medium">Được tính ở bước tiếp theo</span>
                </div>
                <div className="checkout-total-row">
                  <span>Thuế ước tính</span>
                  <span className="font-medium">$8.50</span>
                </div>
              </div>

              <div className="checkout-final-total">
                <span className="checkout-final-label">Tổng cộng</span>
                <div className="checkout-final-value-group">
                  <span className="checkout-currency">USD</span>
                  <span className="checkout-final-value">$108.50</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="checkout-trust">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span>Thanh toán mã hóa bảo mật</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="checkout-footer">
        <p>© 2024 MODERN_RETAIL. Thanh toán bảo mật.</p>
      </footer>
    </div>
  )
}

export default Checkout
