import React from 'react'
import './ProductList.css'

const products = [
  {
    id: 1,
    category: 'Đồ dùng nhà bếp',
    name: 'Máy pha cà phê cao cấp',
    price: 4800000,
    oldPrice: 5200000,
    rating: 4.8,
    sold: 120,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80',
    badges: [{ label: 'GIẢM 10%', variant: 'discount' }],
  },
  {
    id: 2,
    category: 'Phòng khách',
    name: 'Đèn trang trí hiện đại',
    price: 2300000,
    oldPrice: null,
    rating: 4.5,
    sold: 80,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    badges: [{ label: 'MỚI', variant: 'new' }],
  },
  {
    id: 3,
    category: 'Phòng tắm',
    name: 'Kệ treo khăn inox',
    price: 890000,
    oldPrice: null,
    rating: 4.2,
    sold: 55,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    badges: [],
  },
  {
    id: 4,
    category: 'Đồ dùng nhà bếp',
    name: 'Bộ nồi chống dính',
    price: 3200000,
    oldPrice: 3900000,
    rating: 4.7,
    sold: 200,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
    badges: [{ label: 'HOT', variant: 'hot' }],
  },
  {
    id: 5,
    category: 'Phòng khách',
    name: 'Ghế sofa mini',
    price: 9500000,
    oldPrice: null,
    rating: 5,
    sold: 40,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    badges: [{ label: 'BEST SELLER', variant: 'best' }],
  },
  {
    id: 6,
    category: 'Phòng tắm',
    name: 'Gương LED thông minh',
    price: 4100000,
    oldPrice: 4600000,
    rating: 4.6,
    sold: 90,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80',
    badges: [{ label: 'GIẢM 15%', variant: 'discount' }],
  },
]

const formatCurrency = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

const ProductList = () => {
  return (
    <main className="pl-container">
      <aside className="pl-sidebar">
        <div className="pl-sidebar-header">
          <p className="pl-eyebrow">Bộ lọc</p>
          <h2>Tìm sản phẩm phù hợp</h2>
        </div>

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Danh mục</h3>
          <ul className="pl-filter-list">
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" defaultChecked />
              <span>Tất cả sản phẩm</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>Đồ dùng nhà bếp</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>Phòng khách</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>Phòng tắm</span>
            </li>
          </ul>
        </div>

        <div className="pl-divider" />

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Mức giá</h3>
          <input type="range" min="0" max="10000000" defaultValue="5000000" className="pl-range" />
          <div className="pl-range-labels">
            <span>0 ₫</span>
            <span>10.000.000 ₫</span>
          </div>
        </div>

        <div className="pl-divider" />

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Đánh giá</h3>
          <ul className="pl-filter-list">
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>4 sao trở lên</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>3 sao trở lên</span>
            </li>
          </ul>
        </div>
      </aside>

      <section className="pl-content">
        <div className="pl-toolbar">
          <div>
            <p className="pl-eyebrow">Sản phẩm gia dụng</p>
            <h1 className="pl-title">Danh sách sản phẩm</h1>
            <p className="pl-toolbar-text">Đang hiển thị {products.length} sản phẩm nổi bật</p>
          </div>

          <div className="pl-sort">
            <label htmlFor="sort" className="pl-sort-label">Sắp xếp</label>
            <select id="sort" className="pl-sort-select">
              <option>Đề xuất</option>
              <option>Giá: Thấp đến cao</option>
              <option>Giá: Cao xuống thấp</option>
              <option>Hàng mới về</option>
            </select>
          </div>
        </div>

        <div className="pl-grid">
          {products.map((product) => (
            <article key={product.id} className="pl-product-card">
              <div className="pl-product-img-wrapper">
                <div className="pl-product-badges">
                  {product.badges.map((badge) => (
                    <span key={badge.label} className={`pl-product-badge ${badge.variant}-badge`}>
                      {badge.label}
                    </span>
                  ))}
                </div>
                <img src={product.image} alt={product.name} className="pl-product-img" />
              </div>

              <div className="pl-product-body">
                <p className="pl-product-category">{product.category}</p>
                <h3 className="pl-product-name">{product.name}</h3>

                <div className="pl-product-meta">
                  <span className="pl-rating">★ {product.rating}</span>
                  <span>Đã bán {product.sold}</span>
                </div>

                <div className="pl-product-footer">
                  <p className="pl-product-price">
                    {formatCurrency(product.price)}
                    {product.oldPrice && (
                      <span className="pl-product-old-price">
                        {formatCurrency(product.oldPrice)}
                      </span>
                    )}
                  </p>
                  <button type="button" className="pl-add-button" aria-label={`Thêm ${product.name} vào giỏ hàng`}>
                    <i className="fa-solid fa-cart-shopping" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductList
