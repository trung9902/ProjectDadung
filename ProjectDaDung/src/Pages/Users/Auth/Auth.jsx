import React from 'react'
import './Auth.css'

const Auth = () => {
  return (
    <main className="auth-page">
      {/* Left Pane: Image (Desktop Only) */}
      <div className="auth-left-pane">
        <div 
          className="auth-bg-img" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbFiyQyjqoHhkhCvV6nHLwk04PCzVnWS-rfVY3SfbF9zuzF4Eom6fDJCHFt_76eD1bdWTAldP7WTz11Kh109DnbTFwKFXdjeSdAlZ-Vc1zXX7MLduNGURYgo-kBXxkFlUUYl0WmI9L1lotE2TY5A1QHcWYkg4k9jfC3UaT6GvymO3_7feTy34SL6leWkGz-GKfldmvXPTarshfwS1gCQ_EaAyyIqGTl0q3RLWuqq4WQHPANYzfUrCORPFMSpqJePEnFntN-02DKx8G')" }}
        ></div>
        <div className="auth-bg-overlay"></div>
        <div className="auth-logo-overlay">
          <span className="auth-logo-text">MODERN_RETAIL</span>
        </div>
        <div className="auth-hero-text">
          <p className="auth-hero-title">Sắp xếp dễ dàng.</p>
          <p className="auth-hero-desc">Những vật dụng thiết yếu được tuyển chọn cho một lối sống hiện đại, tối giản. Đăng nhập để truy cập vào bộ sưu tập độc quyền của bạn.</p>
        </div>
      </div>

      {/* Right Pane: Form Area */}
      <div className="auth-right-pane">
        <div className="auth-form-container">
          {/* Mobile Brand Header */}
          <div className="auth-mobile-header">
            <span className="auth-logo-text-mobile">MODERN_RETAIL</span>
          </div>

          {/* Page Header */}
          <div className="auth-header">
            <h1 className="auth-title">Chào mừng trở lại</h1>
            <p className="auth-subtitle">Vui lòng nhập thông tin của bạn để đăng nhập vào tài khoản.</p>
          </div>

          {/* Toggle (Login / Register) */}
          <div className="auth-toggle">
            <button className="auth-toggle-btn active">Đăng nhập</button>
            <button className="auth-toggle-btn">Tạo tài khoản</button>
          </div>

          {/* Form */}
          <form className="auth-form">
            <div className="auth-input-group">
              <label className="auth-label">Địa chỉ Email</label>
              <input type="email" placeholder="hello@example.com" className="auth-input" />
            </div>
            
            <div className="auth-input-group">
              <label className="auth-label">Mật khẩu</label>
              <input type="password" placeholder="••••••••" className="auth-input" />
            </div>

            <div className="auth-form-actions">
              <label className="auth-checkbox-label">
                <input type="checkbox" className="auth-checkbox" />
                <span className="auth-checkbox-text">Ghi nhớ tôi</span>
              </label>
              <a href="#" className="auth-forgot-link">Quên mật khẩu?</a>
            </div>

            <button type="button" className="auth-submit-btn">
              Đăng nhập
            </button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <span className="auth-divider-text">Hoặc tiếp tục với</span>
            <div className="auth-divider-line"></div>
          </div>

          {/* Social Login Options */}
          <div className="auth-social-login">
            <button type="button" className="auth-social-btn">
              <span className="material-symbols-outlined auth-social-icon">mail</span>
              <span className="auth-social-text">Google</span>
            </button>
            <button type="button" className="auth-social-btn">
              <span className="material-symbols-outlined auth-social-icon">ios</span>
              <span className="auth-social-text">Apple</span>
            </button>
          </div>

          {/* Footer Disclaimer */}
          <p className="auth-disclaimer">
            Bằng cách nhấp tiếp tục, bạn đồng ý với <br className="hidden-md" />
            <a href="#" className="auth-link">Điều khoản Dịch vụ</a> và <a href="#" className="auth-link">Chính sách Bảo mật</a> của chúng tôi.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Auth
