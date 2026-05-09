import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <main className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Giỏ hàng của bạn</h1>
        <p className="cart-subtitle">Kiểm tra các mặt hàng trước khi tiến hành thanh toán.</p>
      </div>

      <div className="cart-grid">
        {/* Cart Items Section */}
        <div className="cart-items-section">
          {/* Cart Item 1 */}
          <div className="cart-item">
            <div className="cart-item-img-wrapper">
              <img
                alt="Đồng hồ thông minh tối giản trên nền sáng"
                className="cart-item-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGRrLJbwPam58TgMzrIcADJgHxNPVf0qtTcKVPxbG8VdEivtAgDbXlydaAX2iW2_Z4GAXSZRCeKsPdVcKPC8jW4QxSMAqCBgMq9dNrI-4OB7ndoqZSBC-WLVXdtLfePrjJsPaefLRJt6R9ekNM96QJE-nzxHQ1sDmWwRdYeD_Djm1IoLy3H_bq98DBpwZioZ-kn9u95UaS3LPx6zv68xT01kuzC13uk0_DMctl-ccnwRwya-EpgABxF54sy9rynVz1GY2Ircmq_jyz"
              />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-header">
                <div>
                  <h3 className="cart-item-title">Đồng hồ Chronos Tối giản</h3>
                  <p className="cart-item-variant">Trắng Mờ / 42mm</p>
                </div>
                <span className="cart-item-price">5.800.000 ₫</span>
              </div>
              <div className="cart-item-actions">
                <div className="cart-qty-selector">
                  <button className="cart-qty-btn">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <input className="cart-qty-input" min="1" type="number" defaultValue="1" />
                  <button className="cart-qty-btn">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button className="cart-remove-btn">
                  <span className="material-symbols-outlined text-sm">delete</span>
                  <span className="cart-remove-text">Xóa</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="cart-item">
            <div className="cart-item-img-wrapper">
              <img
                alt="Tai nghe không dây cao cấp trên nền tối"
                className="cart-item-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9UvHreuJPGqZ3f39bRE6Z4tTevLxeiUVpiQAK50TgoCzo5AlA-dxl-9y_hNXLCqz3cE5HGOiF_dX_e1-ESbGtKvsq-dEMy5dH47cnfVZJ0K5z2fPqJcbjkMmVkYH0dUOyWhorFHoXYHQ3VRr-PEtB0MENyVj0aLQGs1bvX0vVMe7q7ZhV0QpyLzvV5jHj15TbZYDYO3FW3ZlCpz3hd1TJBFbJPJdRQAg9uRcdzi6xpbyU4XyU4OtRMp_FlG8DZBIchjm_BlDwkH2w"
              />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-header">
                <div>
                  <h3 className="cart-item-title">Tai nghe chống ồn Aura</h3>
                  <p className="cart-item-variant">Đen Tuyền</p>
                </div>
                <span className="cart-item-price">7.500.000 ₫</span>
              </div>
              <div className="cart-item-actions">
                <div className="cart-qty-selector">
                  <button className="cart-qty-btn">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <input className="cart-qty-input" min="1" type="number" defaultValue="2" />
                  <button className="cart-qty-btn">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button className="cart-remove-btn">
                  <span className="material-symbols-outlined text-sm">delete</span>
                  <span className="cart-remove-text">Xóa</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="cart-summary-section">
          <div className="cart-summary-card sticky">
            <h2 className="cart-summary-title">Tóm tắt đơn hàng</h2>
            <div className="cart-summary-rows">
              <div className="cart-summary-row">
                <span className="cart-summary-label">Tạm tính (3 sản phẩm)</span>
                <span className="cart-summary-value font-medium">20.800.000 ₫</span>
              </div>
              <div className="cart-summary-row">
                <span className="cart-summary-label">Phí vận chuyển</span>
                <span className="cart-summary-value font-medium">Tính khi thanh toán</span>
              </div>
              <div className="cart-summary-row">
                <span className="cart-summary-label">Thuế ước tính</span>
                <span className="cart-summary-value font-medium">0 ₫</span>
              </div>
              <div className="cart-summary-total">
                <span className="cart-summary-total-label">Tổng cộng</span>
                <span className="cart-summary-total-value">20.800.000 ₫</span>
              </div>
            </div>
            
            <button className="cart-checkout-btn">
              Tiến hành Thanh toán
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            
            <div className="cart-secure-text">
              <span className="material-symbols-outlined text-sm">lock</span>
              Thanh toán SSL An toàn
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart
