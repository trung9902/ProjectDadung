import React from 'react'
import './Home.css'
import FeaturedCategories from '../Category/featuredCategories'
import Product from '../Product/Product'

const Home = () => {
  return (
    <main className="main-container">
      {/* Hero Banner */}
      <section className="hero-section">
        <img
          alt="High-end modern home interior"
          className="hero-bg-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHq8-KXGAl7AyVxIh1KvyNEdcffuT8WdZy78xtaNc4nv6YhbHTA6I6VO_nvSVg43R5H33nEKvfy9UM8H13-x5nLBowQJg93eu8LN2aZeaBwNAnhT7YHlCGbtGoGeA3wMGOdpyBdF55Kwvk_lx-_dgeuKVtQNGpTjaV_bqVmp81p1ZDmbiPtpxEYmQ__5nuyNqNLYssa-CnbFtJ97GgW7W5O98stNEFCQqgIakMKkKp0MVNbbF5BdKoBPtVBbdxxOpvJdoNIhb9LjyT"
        />
        <div className="hero-overlay-wrapper">
          <div className="hero-glass-card">
            <div className="hero-badge-premium">
              <span>Premium Collection</span>
            </div>
            <h1 className="hero-title">Không Gian Sống Hoàn Mỹ.</h1>
            <p className="hero-desc">Nâng tầm ngôi nhà của bạn với các thiết bị gia dụng cao cấp. Giảm giá lên đến 40% cho các sản phẩm được chọn lọc để mang lại sự tiện nghi và đẳng cấp.</p>
            <button className="btn-primary-hero">Mua Sắm Ngay</button>
          </div>
        </div>
      </section>

      {/* Curated Categories */}
      <FeaturedCategories />

      {/* Trending Now */}
      <Product />
    </main>
  )
}

export default Home

