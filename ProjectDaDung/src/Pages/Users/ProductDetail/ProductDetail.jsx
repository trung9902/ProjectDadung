import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { products } from '../../../data/products'
import { getCart, saveCart } from '../../../utils/cart'

const formatCurrency = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

const ProductDetail = () => {
  const { id } = useParams()
  const product = useMemo(
    () => products.find((item) => item.id === Number(id)) || products[0],
    [id],
  )
  const [activeImage, setActiveImage] = useState(product.gallery[0])
  const [quantity, setQuantity] = useState(1)
  const currentImage = product.gallery.includes(activeImage) ? activeImage : product.gallery[0]

  const addCart = () => {
    const cart = getCart()
    const existingItem = cart.find((item) => item.id === product.id)
    const currentQuantity = existingItem?.quantity || 0

    if (currentQuantity + quantity > product.stock) {
      alert('Số lượng sản phẩm đã đạt tối đa trong kho!')
      return
    }

    const updatedCart = existingItem
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cart, { ...product, quantity }]

    saveCart(updatedCart)
  }

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <main className="pd-container">
      <nav className="pd-breadcrumbs" aria-label="Đường dẫn">
        <Link to="/" className="pd-breadcrumb-link">Trang chủ</Link>
        <i className="fa-solid fa-chevron-right pd-breadcrumb-icon" aria-hidden="true"></i>
        <Link to="/products" className="pd-breadcrumb-link">Sản phẩm</Link>
        <i className="fa-solid fa-chevron-right pd-breadcrumb-icon" aria-hidden="true"></i>
        <span className="pd-breadcrumb-current">{product.name}</span>
      </nav>

      <section className="pd-hero-grid">
        <div className="pd-gallery">
          <div className="pd-main-img-wrapper">
            {discountPercent > 0 && <span className="pd-badge">Giảm {discountPercent}%</span>}
            <img src={currentImage} alt={product.name} className="pd-main-img" />
          </div>

          <div className="pd-thumbnails" aria-label="Ảnh sản phẩm">
            {product.gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`pd-thumb-btn ${currentImage === image ? 'active' : ''}`}
                onClick={() => setActiveImage(image)}
                aria-label={`Xem ảnh ${index + 1}`}
              >
                <img src={image} alt={`${product.name} ${index + 1}`} className="pd-thumb-img" />
              </button>
            ))}
          </div>
        </div>

        <div className="pd-info">
          <p className="pd-category">{product.category}</p>
          <h1 className="pd-title">{product.name}</h1>

          <div className="pd-rating-row">
            <span className="pd-stars">★★★★★</span>
            <span>{product.rating} / 5</span>
            <span>Đã bán {product.sold}</span>
          </div>

          <div className="pd-pricing">
            <span className="pd-price-current">{formatCurrency(product.price)}</span>
            {product.oldPrice && (
              <span className="pd-price-old">{formatCurrency(product.oldPrice)}</span>
            )}
          </div>

          <p className="pd-desc">{product.description}</p>

          <div className="pd-features">
            <div className="pd-feature-item">
              <i className="fa-solid fa-circle-check pd-feature-icon success" aria-hidden="true"></i>
              Còn {product.stock} sản phẩm, sẵn sàng giao
            </div>
            <div className="pd-feature-item">
              <i className="fa-solid fa-truck-fast pd-feature-icon" aria-hidden="true"></i>
              Miễn phí giao hàng cho đơn từ 1.000.000 ₫
            </div>
            <div className="pd-feature-item">
              <i className="fa-solid fa-rotate-left pd-feature-icon" aria-hidden="true"></i>
              Đổi trả trong 7 ngày nếu sản phẩm lỗi
            </div>
          </div>

          <div className="pd-actions">
            <div className="pd-quantity">
              <button type="button" className="pd-qty-btn" aria-label="Giảm số lượng" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                <i className="fa-solid fa-minus" aria-hidden="true"></i>
              </button>
              <input type="number" min="1" max={product.stock} value={quantity} className="pd-qty-input" aria-label="Số lượng" onChange={(event) => setQuantity(Math.min(product.stock, Math.max(1, Number(event.target.value) || 1)))} />
              <button type="button" className="pd-qty-btn" aria-label="Tăng số lượng" onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))}>
                <i className="fa-solid fa-plus" aria-hidden="true"></i>
              </button>
            </div>

            <button type="button" className="pd-add-btn" onClick={addCart}>
              <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
              Thêm vào giỏ hàng
            </button>
          </div>

          <div className="pd-secondary-actions">
            <button type="button" className="pd-sec-btn">
              <i className="fa-regular fa-heart" aria-hidden="true"></i>
              Yêu thích
            </button>
            <button type="button" className="pd-sec-btn">
              <i className="fa-solid fa-share-nodes" aria-hidden="true"></i>
              Chia sẻ
            </button>
          </div>
        </div>
      </section>

      <section className="pd-details-section">
        <div className="pd-specs">
          <p className="pd-eyebrow">Thông tin sản phẩm</p>
          <h2 className="pd-section-title">Thông số kỹ thuật</h2>
          <div className="pd-spec-list">
            {product.specs.map(([label, value]) => (
              <div key={label} className="pd-spec-item">
                <span className="pd-spec-label">{label}</span>
                <span className="pd-spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pd-reviews">
          <div className="pd-reviews-header">
            <div>
              <p className="pd-eyebrow">Khách hàng nói gì</p>
              <h2 className="pd-section-title">Đánh giá nổi bật</h2>
            </div>
            <div className="pd-rating-summary">
              <strong>{product.rating}</strong>
              <span>trên 5 sao</span>
            </div>
          </div>

          <div className="pd-reviews-grid">
            <article className="pd-review-card">
              <div className="pd-review-stars">★★★★★</div>
              <h3>Đóng gói chắc chắn</h3>
              <p>Sản phẩm đúng mô tả, giao nhanh và nhìn ngoài thực tế đẹp hơn ảnh.</p>
              <span>Minh Anh</span>
            </article>
            <article className="pd-review-card">
              <div className="pd-review-stars">★★★★★</div>
              <h3>Rất đáng tiền</h3>
              <p>Chất lượng hoàn thiện tốt, dùng ổn định và phù hợp với không gian gia đình.</p>
              <span>Hoàng Nam</span>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
