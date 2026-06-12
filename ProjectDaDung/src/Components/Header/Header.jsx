import React, { useState, useEffect, useRef } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { CART_UPDATED_EVENT, getCartCount } from '../../utils/cart'
import { useAuth } from '../../contexts/AuthContext'

const Header = () => {
  const [numberCart, setNumberCart] = useState(() => getCartCount())
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const { isLoggedIn, isAdmin, user, logout } = useAuth()

  useEffect(() => {
    const updateCartCount = () => setNumberCart(getCartCount())
    window.addEventListener(CART_UPDATED_EVENT, updateCartCount)
    window.addEventListener('storage', updateCartCount)
    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCartCount)
      window.removeEventListener('storage', updateCartCount)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    setDropdownOpen(false)
    navigate('/')
  }
  const handleActiveMenu = (path) => {
    return window.location.pathname === path ? 'header-menu-item active' : 'header-menu-item'
  }

  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">MODERN_RETAIL</Link>
        </div>
        <div className="header-menu">
          <Link className={handleActiveMenu('/')} to="/">
            Cửa hàng
          </Link>
          <Link className={handleActiveMenu('/collections')} to="/collections">
            Bộ sưu tập
          </Link>
          <Link className={handleActiveMenu('/new-arrivals')} to="/new-arrivals">
            Hàng mới về
          </Link>
          <Link className={handleActiveMenu('/sale')} to="/sale">
            Giảm giá
          </Link>
        </div>
        <div className="header-actions">
          <Link to="/cart">
            <button className="header-action-btn">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="header-cart-count">{numberCart}</span>
            </button>
          </Link>

          {isLoggedIn ? (
            <div className="header-user-menu" ref={dropdownRef}>
              <button
                className="header-action-btn header-user-btn"
                onClick={() => setDropdownOpen(prev => !prev)}
                title={user?.fullName}
              >
                <i className="fa-solid fa-user"></i>
              </button>
              {dropdownOpen && (
                <div className="header-dropdown">
                  <div className="header-dropdown-name">{user?.fullName}</div>
                  <div className="header-dropdown-email">{user?.email}</div>
                  <div className="header-dropdown-divider"></div>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="header-dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <i className="fa-solid fa-gauge"></i> Quản trị
                    </Link>
                  )}
                  <button className="header-dropdown-item header-dropdown-logout" onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth">
              <button className="header-action-btn">
                <i className="fa-solid fa-user"></i>
              </button>
            </Link>
          )}

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
