import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductList.css'
import { products } from '../../../data/products'


const formatCurrency = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPriceRange, setSelectedPriceRange] = useState(10000000)
  const [selectedRating, setSelectedRating] = useState(0)
  const productsFiltered = (selectedCategory, selectedPriceRange, selectedRating) => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === 'all' || product.category === selectedCategory

      const matchPrice =
        product.price <= selectedPriceRange

      const matchRating =
        product.rating >= selectedRating
      return matchCategory && matchPrice && matchRating
    })

  }
  let handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setFilteredProducts(productsFiltered(category, selectedPriceRange, selectedRating))
  }
  let handlePriceChange = (price) => {
    setSelectedPriceRange(price)
    setFilteredProducts(productsFiltered(selectedCategory, price, selectedRating))
  }
  let handleRatingChange = (rating) => {
    setSelectedRating(rating)
    setFilteredProducts(productsFiltered(selectedCategory, selectedPriceRange, rating))
  }

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
              <input type="checkbox" className="pl-checkbox" defaultChecked onChange={() => handleCategoryChange('all')} />
              <span>Tất cả sản phẩm</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" onChange={() => handleCategoryChange('Đồ dùng nhà bếp')} />
              <span>Đồ dùng nhà bếp</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" onChange={() => handleCategoryChange('Phòng khách')} />
              <span>Phòng khách</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" onChange={() => handleCategoryChange('Phòng tắm')} />
              <span>Phòng tắm</span>
            </li>
          </ul>
        </div>

        <div className="pl-divider" />

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Mức giá</h3>
          <input type="range" min="0" max="10000000" defaultValue="5000000" className="pl-range" onChange={(e) => { handlePriceChange(e.target.value) }} />
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
              <input type="checkbox" className="pl-checkbox" onChange={() => handleRatingChange(5)} />
              <span>5 sao trở lên</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" onChange={() => handleRatingChange(3)} />
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article key={product.id} className="pl-product-card">
                <Link to={`/product/${product.id}`} className="pl-product-img-wrapper">
                  <div className="pl-product-badges">
                    {product.badges.map((badge) => (
                      <span key={badge.label} className={`pl-product-badge ${badge.variant}-badge`}>
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <img src={product.image} alt={product.name} className="pl-product-img" />
                </Link>

                <div className="pl-product-body">
                  <p className="pl-product-category">{product.category}</p>
                  <h3 className="pl-product-name">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

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
            ))
          ) : (
            <p>Không có sản phẩm nào phù hợp với tiêu chí lọc.</p>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProductList
