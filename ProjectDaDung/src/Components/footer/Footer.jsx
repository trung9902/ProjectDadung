import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-brand">MODERN_RETAIL</h2>
                    <p className="footer-copyright">© 2024 MODERN_RETAIL. KHÔNG GIAN SỐNG HOÀN MỸ.</p>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h3 className="footer-title">Chính Sách Bảo Mật</h3>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Điều Khoản Dịch Vụ</h3>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Văn Chuyển & Đổi Trả</h3>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-title">Liên Hệ</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
