import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <div className="header">
                <div className="header-logo">
                  <a href="#" className="header-logo-link">
                    <img src="/src/img/Header/logo.png" alt="Logo" />
                  </a>
                </div>
                <div className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-item active">Trang chủ</li>
                        <li className="header-menu-item">Sản phẩm</li>
                        <li className="header-menu-item">Giới thiệu</li>
                        <li className="header-menu-item">Liên hệ</li>
                    </ul>
                </div>
                <div className="header-Action">
                    <a href="/cart" className="icon-link" aria-label="Cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        {/* <span className="icon-badge">0</span> */}
                    </a>
                    <a href="/account" className="icon-link" aria-label="Account">
                        <i className="fa-solid fa-user"></i>
                    </a>
                    <a href="/wishlist" className="icon-link" aria-label="Wishlist">
                        <i className="fa-regular fa-heart"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
