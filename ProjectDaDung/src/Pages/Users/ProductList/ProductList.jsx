import React from 'react'
import './ProductList.css'

const ProductList = () => {
  return (
    <main className="pl-container">
      {/* Sidebar Filters */}
      <aside className="pl-sidebar">
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
        
        <div className="pl-divider"></div>

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Mức giá</h3>
          <input type="range" min="0" max="1000" className="pl-range" />
          <div className="pl-range-labels">
            <span>0 ₫</span>
            <span>1.000.000+ ₫</span>
          </div>
        </div>

        <div className="pl-divider"></div>

        <div className="pl-filter-group">
          <h3 className="pl-filter-title">Đánh giá</h3>
          <ul className="pl-filter-list">
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>4 Sao trở lên</span>
            </li>
            <li className="pl-filter-item">
              <input type="checkbox" className="pl-checkbox" />
              <span>3 Sao trở lên</span>
            </li>
          </ul>
        </div>
      </aside>

      {/* Product Grid Area */}
      <section className="pl-content">
        {/* Toolbar */}
        <div className="pl-toolbar">
          <p className="pl-toolbar-text">Đang hiển thị 24 sản phẩm</p>
          <div className="pl-sort">
            <label htmlFor="sort" className="pl-sort-label">Sắp xếp theo:</label>
            <select id="sort" className="pl-sort-select">
              <option>Đề xuất</option>
              <option>Giá: Thấp đến Cao</option>
              <option>Giá: Cao xuống Thấp</option>
              <option>Hàng mới về</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="pl-grid">
          {/* Skeleton Item 1 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
          {/* Skeleton Item 2 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
          {/* Skeleton Item 3 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
          {/* Skeleton Item 4 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
          {/* Skeleton Item 5 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
          {/* Skeleton Item 6 */}
          <div className="pl-skeleton-card">
            <div className="pl-skeleton-img shimmer"></div>
            <div className="pl-skeleton-line short shimmer"></div>
            <div className="pl-skeleton-line long shimmer"></div>
            <div className="pl-skeleton-line price shimmer"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductList
