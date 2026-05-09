import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <nav className="header-nav">
            <div className="header-container">
                <div className="header-left">
                    <a className="header-logo" href="/">MODERN_RETAIL</a>
                </div>
                <div className="header-menu">
                    <a className="header-menu-item active" href="/">Cửa hàng</a>
                    <a className="header-menu-item" href="/collections">Bộ sưu tập</a>
                    <a className="header-menu-item" href="/new-arrivals">Hàng mới về</a>
                    <a className="header-menu-item" href="/sale">Giảm giá</a>
                </div>
                <div className="header-actions">
                    <button className="header-action-btn">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </button>
                    <button className="header-action-btn">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                    <button className="header-action-btn">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
