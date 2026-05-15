import React from 'react'
import './Product.css'
import product from '@/img/Content/Product/product.png'
import product2 from '@/img/Content/Product/product2.png'
import product3 from '@/img/Content/Product/product3.png'
import {Link} from 'react-router-dom'
const trendingProducts = [
  {
    id: 1,
    category: "Thiết Bị Thông Minh",
    title: "Loa Không Dây Studio",
    price: "6.990.000 ₫",
    oldPrice: "8.200.000 ₫",
    badge: {
      text: "GIẢM 15%",
      type: "discount"
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfbAxCtCZtACtLjRXKRxFeS6MkLonwDOzEtb-Ke5guUiAAuk_7p4XMdBceZI5UyURdjaq8-qKXg-SXrhI9FIZlp_LsV0-w96LGXL2bY47rUi6qHfLvwYtc2Qo0U9F3G_i4-aFZ77p2IyMplCZwoVpMKmUCIzf9hCqEcFjY5fCV2_VHsUK7g5oGuMN22-73RrnqbcYw5NZWsBqMhR6AJ-wzCv7l4RQ9JgwVeLImdr4g8Ml9oP7KXTL59KkOaMAOkfkPe2JDJP5FSgda"
  },
  {
    id: 2,
    category: "Máy Giặt & Sấy",
    title: "Máy Giặt Thông Minh",
    price: "12.500.000 ₫",
    oldPrice: null,
    badge: {
      text: "MỚI",
      type: "new"
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWf0ESQamHhc7HLqCv_hA-ikZtt69cIsiVrBfyPeY3OtLjrpn6RLOfqvNbo4vbY9g0O4hKCC-yhGD8NGAaJX336TBK5B-ueRxSKle6uhxnbc-jTrjuNkxYyI3EoOddKDDns8otywOpPpAnfH2O6r3zlgOu0TriIpqjRhb4fyR2zRn8pu7at0kUM3Zolps9zI-bA0pS4Ht3gjbv_TB_sk15r_myL8xyyD7Mxw9K-WaIjL1TpNuD9eEEsgX6o7q76saJiVzs-EXYerv5"
  },
  {
    id: 3,
    category: "Đồ Gia Dụng",
    title: "Máy Pha Cà Phê Cao Cấp",
    price: "4.800.000 ₫",
    oldPrice: null,
    badge: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjNbiIwYBh-vJdYWxX2q14opy11sO7QhberpzVUkEsJYbveoJUwz5tw60dzi6Vt6VeXPCsrhfKSEeRpcO1IP_6cav04Lr5fU0E3wB9NRwSYGl8l0s3Vq8ze6IaSVd2DFtfroClW39Wql-dnLOYiJToLkn3xQHkX71vRLq6rKLGlYs5g0rXM3XxeqkNuqSnzfOxIJilbzPVQpnYrc6um2HvCutOEx2Pr8QLf5fha7rYB9up642ZCImv-7xO92RXEW2Lb31gskJ7x-2h"
  }
];
function Product() {
    return (
        <section className="trending-section">
            <div className="section-header">
                <h2 className="section-title">Xu Hướng Hiện Tại</h2>
                <Link className="view-all-link" to="/products">
                    Xem Tất Cả
                </Link>
            </div>
            <div className="product-grid">
                {/* Product 1 */}
                <div className="product-card">
                    <div className="product-img-wrapper">
                        <span className="product-badge discount-badge">{trendingProducts[0].badge ? trendingProducts[0].badge.text : null}</span>
                        <img
                            alt=""
                            className="product-img"
                            src={trendingProducts[0].image}
                        />
                    </div>
                    <p className="product-category">{trendingProducts[0].category}</p>
                    <h3 className="product-title">{trendingProducts[0].title}</h3>
                    <p className="product-price">
                        {trendingProducts[0].price} <span className="product-price-old">{trendingProducts[0].oldPrice}</span>
                    </p>
                </div>
                {/* Product 2 */}
                <div className="product-card">
                    <div className="product-img-wrapper">
                        <span className="product-badge new-badge">{trendingProducts[1].badge ? trendingProducts[1].badge.text : null}</span>
                        <img
                            alt=""
                            className="product-img"
                            src={trendingProducts[1].image}
                        />
                    </div>
                    <p className="product-category">{trendingProducts[1].category}</p>
                    <h3 className="product-title">{trendingProducts[1].title}</h3>
                    <p className="product-price">
                        {trendingProducts[1].price} <span className="product-price-old">{trendingProducts[1].oldPrice}</span>
                    </p>
                </div>
                {/* Product 3 */}
                <div className="product-card">
                    <div className="product-img-wrapper">
                        <span className="product-badge">{trendingProducts[2].badge ? trendingProducts[2].badge.text : null}</span>
                        <img
                            alt=""
                            className="product-img"
                            src={trendingProducts[2].image}
                        />
                    </div>
                    <p className="product-category">{trendingProducts[2].category}</p>
                    <h3 className="product-title">{trendingProducts[2].title}</h3>
                    <p className="product-price">
                        {trendingProducts[2].price} <span className="product-price-old">{trendingProducts[2].oldPrice}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Product
