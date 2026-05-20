import React, { useState } from 'react'
import './Cart.css'
import { clearStoredCart, getCart, saveCart } from '../../../utils/cart'

const Cart = () => {
  const [cart, setCart] = useState(() => getCart())
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage

  const currentProducts = cart.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  const totalPages = Math.ceil(cart.length / productsPerPage)
  let moveOn = (id) => {
    let cartItem = cart.find((item) => item.id === id)
    if (cartItem.quantity >= cartItem.stock) {
      alert('Số lượng sản phẩm đã đạt tối đa trong kho!')
      return
    }
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedCart)
    saveCart(updatedCart)
  }
  let backDown = (id) => {
    let cartItem = cart.find((item) => item.id === id)
    if (cartItem.quantity <= 1) {
      alert('Số lượng sản phẩm không thể nhỏ hơn 1!')
      return
    }
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    setCart(updatedCart)
    saveCart(updatedCart)
  }
  let DeleteCartItem = (id) => {
    let updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    saveCart(updatedCart)
  }
  let clearCart = () => {
    setCart([])
    clearStoredCart()
  }
  return (
    <main className="cart-container">
      <div className="cart-header">
        <h1 className="cart-title">Giỏ hàng của bạn</h1>
        <p className="cart-subtitle">Kiểm tra các mặt hàng trước khi tiến hành thanh toán.</p>
        <button className="cart-clear-btn" onClick={clearCart}>
          Xóa toàn bộ
        </button>
      </div>

      <div className="cart-grid">
        {currentProducts.length > 0 ? (
          <div className="cart-items-column-box">
            {/* Cart Items Section */}
            <div className="cart-items-section">
              {currentProducts.map((item) => (
                <div className="cart-item">
                  <div className="cart-item-img-wrapper">
                    <img
                      alt={item.name}
                      className="cart-item-img"
                      src={item.image}
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <div>
                        <h3 className="cart-item-title">{item.name}</h3>
                        <p className="cart-item-variant">{item.variant}</p>
                      </div>
                      <span className="cart-item-price">{item.price.toLocaleString()} ₫</span>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-qty-selector">
                        <button className="cart-qty-btn" onClick={() => backDown(item.id)}>
                          <span className="material-symbols-outlined">-</span>
                        </button>
                        <input className="cart-qty-input" min="1" type="number" value={item.quantity} readOnly />
                        <button className="cart-qty-btn" onClick={() => moveOn(item.id)}>
                          <span className="material-symbols-outlined">+</span>
                        </button>
                      </div>
                      <button className="cart-remove-btn" onClick={() => DeleteCartItem(item.id)}>
                        <span className="cart-remove-text">Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Trước
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Sau
              </button>
            </div>

          </div>
        ) : (
          <p className="cart-empty-text">Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm để bắt đầu mua sắm!</p>
        )}

        {/* Order Summary Sidebar */}
        <div className="cart-summary-section">
          <div className="cart-summary-card sticky">
            <h2 className="cart-summary-title">Tóm tắt đơn hàng</h2>
            <div className="cart-summary-rows">
              <div className="cart-summary-row">
                <span className="cart-summary-label">Tạm tính ({cart.length} sản phẩm)</span>
                <span className="cart-summary-value font-medium">
                  {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()} ₫
                </span>
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
                <span className="cart-summary-total-value">
                  {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()} ₫
                </span>
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
