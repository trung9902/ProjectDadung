import React from 'react'
import './Home.css'

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
      <section className="category-section">
        <div className="section-header">
          <h2 className="section-title">Danh Mục Nổi Bật</h2>
        </div>
        <div className="category-grid">
          <a className="category-card group" href="#">
            <div className="category-img-container level-1-shadow">
              <img
                alt=""
                className="category-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgYYDg1GnQT2ogCmAglHTKLbyNFsin8Y_j26WSsWwRbM4upm_r0hrtI2aUMx3AaRFBKAul1o_C95I1gLwFzdw_j9mfjV_ID8SkwAA967OIFfocX4H74xe9SXEKbuJia6ChDwe2c74qJ7jd9OGATxbfGhvUVK3HMIQyG3mQ4fDiK9crJm8kM3piHrqon_swaH25Vp-RzBLEvvbcBxI1rA8MpsxQtdjOaiYl3PFVM5mb_r2sGpJZEZnt9gz7YnDsgstq4LCKDLSmx1J"
              />
            </div>
            <span className="category-title">Thiết Bị Bếp</span>
          </a>
          <a className="category-card group" href="#">
            <div className="category-img-container level-1-shadow">
              <img
                alt=""
                className="category-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk00tN3E_iBEVUTUtZ1iJ3gIsBa9SjraCDg8dCtZXUpRJ9ODKsAzLfN9O7AeBcLssUCNVi1gj6AUPM2K34QN4-mkH5e3X1AxuBnLaUMgJ8gNCkWtQUnsY7Kmc-dBxwFUNfbBkjBP1JOyySGvgRRywTSx30y2qBk3elSYvJ_zEoBEdobreVvkou7oRN811rzRbUUQunC_iL7lXbUxnpI5zJziFZYiD6Vyia4Ul5SpHCSDXI5WTbd7_TPj2_xOFVdOH6C9Opn5ZvdRrT"
              />
            </div>
            <span className="category-title">Vệ Sinh Nhà Cửa</span>
          </a>
          <a className="category-card group" href="#">
            <div className="category-img-container level-1-shadow">
              <img
                alt=""
                className="category-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Kd-NpIO4JCI3k2BBltbMPaIFGFQwyqRjeWQuFBrhwYZEAVDXifuVGfyZ3Gd9FHoiyS7fu8hg3QVgnwUjdxfwdFRCCBfCDyv0Tn59tPpnZmeBx2S_xC-wtZ99l5kXQM2mN3cep0MdzFY0IwWq2bs4nf9GvamJJdCpTNPukrEx6_x5guc9OET2r78Lo6gYPUO7VPapIJuV9Yk5MXLBiDiGWq2239VmClRg42IvHDUxAk5vHaGGNt95xjE_mxnCtCRemrBx_X0Sc8UE"
              />
            </div>
            <span className="category-title">Không Gian Sống</span>
          </a>
          <a className="category-card group" href="#">
            <div className="category-img-container level-1-shadow">
              <img
                alt=""
                className="category-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKqQUDPeSAzXwGnPyac4v8l8TbpK4SOqGfvg0pqJZeaVrtjL88ZNF5xjhIQfCyP_2adT-yn619p1xWgL9I7FegmRXx6S1A7btH5AqEArfDUL4pFZARphGpJtALgRRIfzTvlwJV5U31GRBAmvWgnPi2Ln6a2GY3MAX4zidlAO7fPztDB-Hqzo5xSXeW7zh32zgb21EL5ikZSoSFTUUgUYU1ZUUfWwJedsX7tjcGTN50dW4-4ru4G9-Z8mbLxpTXIhoSH1LFQMXCLyP-"
              />
            </div>
            <span className="category-title">Chăm Sóc Cá Nhân</span>
          </a>
        </div>
      </section>

      {/* Trending Now */}
      <section className="trending-section">
        <div className="section-header">
          <h2 className="section-title">Xu Hướng Hiện Tại</h2>
          <a className="view-all-link" href="#">Xem Tất Cả</a>
        </div>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="product-badge discount-badge">GIẢM 15%</span>
              <img
                alt=""
                className="product-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfbAxCtCZtACtLjRXKRxFeS6MkLonwDOzEtb-Ke5guUiAAuk_7p4XMdBceZI5UyURdjaq8-qKXg-SXrhI9FIZlp_LsV0-w96LGXL2bY47rUi6qHfLvwYtc2Qo0U9F3G_i4-aFZ77p2IyMplCZwoVpMKmUCIzf9hCqEcFjY5fCV2_VHsUK7g5oGuMN22-73RrnqbcYw5NZWsBqMhR6AJ-wzCv7l4RQ9JgwVeLImdr4g8Ml9oP7KXTL59KkOaMAOkfkPe2JDJP5FSgda"
              />
            </div>
            <p className="product-category">Thiết Bị Thông Minh</p>
            <h3 className="product-title">Loa Không Dây Studio</h3>
            <p className="product-price">
              6.990.000 ₫ <span className="product-price-old">8.200.000 ₫</span>
            </p>
          </div>
          {/* Product 2 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <span className="product-badge new-badge">MỚI</span>
              <img
                alt=""
                className="product-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf0ESQamHhc7HLqCv_hA-ikZtt69cIsiVrBfyPeY3OtLjrpn6RLOfqvNbo4vbY9g0O4hKCC-yhGD8NGAaJX336TBK5B-ueRxSKle6uhxnbc-jTrjuNkxYyI3EoOddKDDns8otywOpPpAnfH2O6r3zlgOu0TriIpqjRhb4fyR2zRn8pu7at0kUM3Zolps9zI-bA0pS4Ht3gjbv_TB_sk15r_myL8xyyD7Mxw9K-WaIjL1TpNuD9eEEsgX6o7q76saJiVzs-EXYerv5"
              />
            </div>
            <p className="product-category">Máy Giặt & Sấy</p>
            <h3 className="product-title">Máy Giặt Thông Minh</h3>
            <p className="product-price">12.500.000 ₫</p>
          </div>
          {/* Product 3 */}
          <div className="product-card">
            <div className="product-img-wrapper">
              <img
                alt=""
                className="product-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjNbiIwYBh-vJdYWxX2q14opy11sO7QhberpzVUkEsJYbveoJUwz5tw60dzi6Vt6VeXPCsrhfKSEeRpcO1IP_6cav04Lr5fU0E3wB9NRwSYGl8l0s3Vq8ze6IaSVd2DFtfroClW39Wql-dnLOYiJToLkn3xQHkX71vRLq6rKLGlYs5g0rXM3XxeqkNuqSnzfOxIJilbzPVQpnYrc6um2HvCutOEx2Pr8QLf5fha7rYB9up642ZCImv-7xO92RXEW2Lb31gskJ7x-2h"
              />
            </div>
            <p className="product-category">Đồ Gia Dụng</p>
            <h3 className="product-title">Máy Pha Cà Phê Cao Cấp</h3>
            <p className="product-price">4.800.000 ₫</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

