import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { CART_UPDATED_EVENT, getCartCount } from '../../utils/cart';
const Header = () => {
    const [numberCart, setNumberCart] = useState(() => getCartCount())
    const updateCartCount = () => {
        setNumberCart(getCartCount());
    };
    useEffect(() => {
        window.addEventListener(CART_UPDATED_EVENT, updateCartCount);
        window.addEventListener('storage', updateCartCount);

        return () => {
            window.removeEventListener(CART_UPDATED_EVENT, updateCartCount);
            window.removeEventListener('storage', updateCartCount);
        };
    }, []);

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
                    <Link to="/cart">
                        <button className="header-action-btn">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="header-cart-count">{numberCart}</span>
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="header-action-btn">
                            <i className="fa-solid fa-user"></i>
                        </button>
                    </Link>
                    <Link to="/wishlist">
                        <button className="header-action-btn">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
