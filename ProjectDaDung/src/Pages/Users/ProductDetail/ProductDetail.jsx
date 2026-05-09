import React from 'react'
import './ProductDetail.css'

const ProductDetail = () => {
  return (
    <main className="pd-container">
      {/* Breadcrumbs */}
      <nav className="pd-breadcrumbs">
        <a href="/" className="pd-breadcrumb-link">Trang chủ</a>
        <span className="material-symbols-outlined pd-breadcrumb-icon">chevron_right</span>
        <a href="/category" className="pd-breadcrumb-link">Đồ gia dụng</a>
        <span className="material-symbols-outlined pd-breadcrumb-icon">chevron_right</span>
        <span className="pd-breadcrumb-current">Máy Lọc Không Khí PureBreeze</span>
      </nav>

      {/* Product Hero Section */}
      <div className="pd-hero-grid">
        {/* Left: Image Gallery */}
        <div className="pd-gallery">
          {/* Main Image */}
          <div className="pd-main-img-wrapper group">
            <div className="pd-badge">Tiết kiệm 15%</div>
            <img
              alt="Máy Lọc Không Khí PureBreeze"
              className="pd-main-img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPmD5Oa_YAuUa_7V4jG7wGnlUGKlIZ4afH6tvwGK2OjQT5lWZblx7QULc5yTkrkoDhD2mPgK0sfOUHoKMW_UH8DaGrsBRNkjtGLQ0iCQEq8C02JwAH5iqBV8EhTnUusymHkDBymcvQWlDJ0COplFRbajiRsAyn33kPaQOv957nL1vljf2EVlMjKbVbYYTIq4oA5hBny35xeTzQnDqWGjXt3AQAq0YlA2jse-xjdEfdpkOz888rmHOjv80-eXrzOmexByGlONPRAp0A"
            />
          </div>
          {/* Thumbnails */}
          <div className="pd-thumbnails">
            <button className="pd-thumb-btn active">
              <img alt="Thumb 1" className="pd-thumb-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgiElupBHTa-0FPc-QccWEEEXb3ijC1Vqe_9aRp3ibdcYh5YErY9N1LorwUJITxqJ58jbRRyvEcBdJxtx_xgh1ikjtmZO6oNZoLhgCkxTj6HLRC2LrVd7uqZABq0UjeahRQw_bGTm65GFEZYRc51K_QbZo0XZ-LwxZtnOCf5xkM9Bw29WdRa7lKGnL6tS0tVNKmEB1b1w3vCtot-U7RHtbErvydZahzo2tTQMeu72rva4-4PODQeYRjELBXRxdofOEws_PZ4JeR-Fi" />
            </button>
            <button className="pd-thumb-btn">
              <img alt="Thumb 2" className="pd-thumb-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWal_eaE8vEsHb5OwK7BOpqnWP0FKjUJM_Obk0A0R9J4CXaLrqwy3E5FR4bGXD105Ug3AgUZGpRR5zXxOODLM-NQ1F7smDIT7KWc16H_qmpiZQ7tQMZolrZhPyKeZICQBCK9FP-h0Mdu0GD2fSsBYeMSZtkPN1hFi7BfJSVowDEkdYSEQ3FVU9jZaXEdm1jgIMqJPdiQYKDO_q-6ieZfRph_0qL3xmg8lsI77JiDcn_6Z-Pbb3o9m95MsZq5MHYyhjz2M9q4n1hisP" />
            </button>
            <button className="pd-thumb-btn">
              <img alt="Thumb 3" className="pd-thumb-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmV1n3go6OCWlHqYWp9AlabsXrzraKw7VvvChi6rWGRRMz7Juzu2BwT6MHMAqWn7qvFgCj7zbP2E-DWem56EUGAyLjERmpwZn_EBXmStmgQZSWNpo81qPysd0x9ubLBlVIexR2vbFVNLzM0KDLgYw8qi23FPDpp6mCH18KYV7B2Xx-GG8iTtNHqrT9LgsPZ2i3zjfGV8YoShO8wGozSZEQWz00j9-TSekB8iw6HUb32zWd9QDwhxWm_mI5kYF3gyUNfPHsh3codABj" />
            </button>
            <button className="pd-thumb-btn">
              <img alt="Thumb 4" className="pd-thumb-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK9rkZaWHABkmnXMwO__30MLP8tdwzReC3FvJBMeBOwG3MmGjzTmRPQoIPHvZiZwgmCRwesoH4SgJ5oVTcyf02zAI3fhrYhQAeRMUIpZ2L1ywAgDrLsDYeQbMlNKQKmipTIc5cXZ8JRHgXaUZUua46GpfywcC7KhFs5JX7cw0WOVELOPTh_Ew2HSJ7-o5HZyzGd-dJI_3zVXAMblDIEjwda_GBIHiCgjVmbV530jz-9_JOESSKocGMkwnnAXCFRiv7hYQFs8Fgry6j" />
            </button>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="pd-info">
          <span className="pd-category">Đồ gia dụng thông minh</span>
          <h1 className="pd-title">Máy Lọc Không Khí PureBreeze</h1>
          
          <div className="pd-pricing">
            <span className="pd-price-current">4.800.000 ₫</span>
            <span className="pd-price-old">5.600.000 ₫</span>
          </div>
          
          <p className="pd-desc">
            Tận hưởng bầu không khí trong lành với Máy lọc không khí PureBreeze. Được trang bị hệ thống lọc HEPA đa lớp tiên tiến, thiết kế hiện đại và hoạt động cực êm, sản phẩm giúp loại bỏ 99.97% bụi mịn, vi khuẩn và mùi hôi, bảo vệ sức khỏe cho cả gia đình bạn.
          </p>

          {/* Stock & Shipping */}
          <div className="pd-features">
            <div className="pd-feature-item">
              <span className="material-symbols-outlined pd-feature-icon success">check_circle</span>
              Còn hàng & Sẵn sàng giao
            </div>
            <div className="pd-feature-item text-secondary">
              <span className="material-symbols-outlined pd-feature-icon">local_shipping</span>
              Miễn phí giao hàng tiêu chuẩn cho đơn từ 1.000.000 ₫
            </div>
          </div>

          {/* Add to Cart Block */}
          <div className="pd-actions">
            {/* Quantity Selector */}
            <div className="pd-quantity">
              <button className="pd-qty-btn">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <input type="number" min="1" defaultValue="1" className="pd-qty-input" />
              <button className="pd-qty-btn">
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            
            {/* Primary CTA */}
            <button className="pd-add-btn">
              <span className="material-symbols-outlined" data-weight="fill">shopping_cart_checkout</span>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="pd-secondary-actions">
            <button className="pd-sec-btn">
              <span className="material-symbols-outlined">favorite_border</span>
              Thêm vào yêu thích
            </button>
            <button className="pd-sec-btn">
              <span className="material-symbols-outlined">share</span>
              Chia sẻ
            </button>
          </div>
        </div>
      </div>

      {/* Details Sections */}
      <div className="pd-details-section">
        {/* Specifications */}
        <div className="pd-specs">
          <h2 className="pd-section-title">Thông số kỹ thuật</h2>
          <div className="pd-spec-list">
            <div className="pd-spec-item">
              <span className="pd-spec-label">Công suất</span>
              <span className="pd-spec-value">45W</span>
            </div>
            <div className="pd-spec-item">
              <span className="pd-spec-label">Kích thước</span>
              <span className="pd-spec-value">25cm x 25cm x 50cm</span>
            </div>
            <div className="pd-spec-item">
              <span className="pd-spec-label">Trọng lượng</span>
              <span className="pd-spec-value">3.5 kg</span>
            </div>
            <div className="pd-spec-item">
              <span className="pd-spec-label">Diện tích phòng</span>
              <span className="pd-spec-value">Tới 40m²</span>
            </div>
            <div className="pd-spec-item">
              <span className="pd-spec-label">Bảo hành</span>
              <span className="pd-spec-value">2 năm chính hãng</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="pd-reviews">
          <div className="pd-reviews-header">
            <h2 className="pd-section-title">Đánh giá của khách hàng</h2>
            <div className="pd-rating-summary">
              <div className="pd-stars">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star_half</span>
              </div>
              <span className="pd-rating-text">4.8 (124 Đánh giá)</span>
            </div>
          </div>

          <div className="pd-reviews-grid">
            {/* Review 1 */}
            <div className="pd-review-card">
              <div className="pd-stars mb-2">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
              </div>
              <h4 className="pd-review-title">Tuyệt vời cho phòng ngủ</h4>
              <p className="pd-review-desc">
                "Đúng như mong đợi. Máy chạy rất êm vào ban đêm, không khí trong phòng khác hẳn sau khi dùng vài ngày. Thiết kế nhỏ gọn và đẹp mắt."
              </p>
              <span className="pd-review-author">Minh A. — 12 Th10, 2023</span>
            </div>
            {/* Review 2 */}
            <div className="pd-review-card">
              <div className="pd-stars mb-2">
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined" data-weight="fill">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <h4 className="pd-review-title">Thiết kế đẹp</h4>
              <p className="pd-review-desc">
                "Màu trắng nhám rất sang trọng và dễ vệ sinh. Trừ một sao vì ứng dụng điện thoại thỉnh thoảng hơi chậm khi kết nối lần đầu."
              </p>
              <span className="pd-review-author">Lan S. — 28 Th9, 2023</span>
            </div>
          </div>
          
          <div className="pd-reviews-footer">
            <button className="pd-read-all-btn">Đọc tất cả 124 đánh giá</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
