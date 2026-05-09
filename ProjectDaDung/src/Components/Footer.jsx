import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="footer-logo">MODERN_RETAIL</span>
                    <p className="footer-copyright">© 2024 MODERN_RETAIL. KHÔNG GIAN SỐNG HOÀN MỸ.</p>
                </div>
                <div className="footer-links">
                    <a className="footer-link" href="/privacy">Chính Sách Bảo Mật</a>
                    <a className="footer-link" href="/terms">Điều Khoản Dịch Vụ</a>
                    <a className="footer-link" href="/shipping">Vận Chuyển & Đổi Trả</a>
                    <a className="footer-link" href="/contact">Liên Hệ</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
