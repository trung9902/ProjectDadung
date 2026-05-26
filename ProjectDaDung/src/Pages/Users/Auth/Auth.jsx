import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import './Auth.css'

const Auth = () => {
  const navigate = useNavigate()
  const { login, register } = useAuth()
  const [mode, setMode] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({ email: '', password: '', fullName: '', confirmPassword: '' })

  const set = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  const switchMode = (m) => {
    setMode(m)
    setError('')
    setForm({ email: '', password: '', fullName: '', confirmPassword: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (mode === 'register') {
      if (!form.fullName.trim()) return setError('Vui lòng nhập họ tên.')
      if (form.password.length < 6) return setError('Mật khẩu phải có ít nhất 6 ký tự.')
      if (form.password !== form.confirmPassword) return setError('Mật khẩu xác nhận không khớp.')
    }

    setLoading(true)
    try {
      if (mode === 'login') {
        const user = await login(form.email, form.password)
        navigate(user.role === 'Admin' ? '/admin' : '/')
      } else {
        await register(form.email, form.password, form.fullName)
        navigate('/')
      }
    } catch (err) {
      setError(err.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      {/* Left Pane */}
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

      {/* Right Pane */}
      <div className="auth-right-pane">
        <div className="auth-form-container">
          <div className="auth-mobile-header">
            <span className="auth-logo-text-mobile">MODERN_RETAIL</span>
          </div>

          <div className="auth-header">
            <h1 className="auth-title">
              {mode === 'login' ? 'Chào mừng trở lại' : 'Tạo tài khoản'}
            </h1>
            <p className="auth-subtitle">
              {mode === 'login'
                ? 'Vui lòng nhập thông tin của bạn để đăng nhập.'
                : 'Điền thông tin bên dưới để tạo tài khoản mới.'}
            </p>
          </div>

          <div className="auth-toggle">
            <button
              type="button"
              className={`auth-toggle-btn ${mode === 'login' ? 'active' : ''}`}
              onClick={() => switchMode('login')}
            >
              Đăng nhập
            </button>
            <button
              type="button"
              className={`auth-toggle-btn ${mode === 'register' ? 'active' : ''}`}
              onClick={() => switchMode('register')}
            >
              Tạo tài khoản
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="auth-input-group">
                <label className="auth-label">Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="auth-input"
                  value={form.fullName}
                  onChange={set('fullName')}
                  required
                />
              </div>
            )}

            <div className="auth-input-group">
              <label className="auth-label">Địa chỉ Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="auth-input"
                value={form.email}
                onChange={set('email')}
                required
              />
            </div>

            <div className="auth-input-group">
              <label className="auth-label">Mật khẩu</label>
              <input
                type="password"
                placeholder="••••••••"
                className="auth-input"
                value={form.password}
                onChange={set('password')}
                required
              />
            </div>

            {mode === 'register' && (
              <div className="auth-input-group">
                <label className="auth-label">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="auth-input"
                  value={form.confirmPassword}
                  onChange={set('confirmPassword')}
                  required
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="auth-form-actions">
                <label className="auth-checkbox-label">
                  <input type="checkbox" className="auth-checkbox" />
                  <span className="auth-checkbox-text">Ghi nhớ tôi</span>
                </label>
                <button
                  type="button"
                  className="auth-forgot-link"
                  onClick={() => alert('Tính năng đặt lại mật khẩu sắp ra mắt!')}
                >
                  Quên mật khẩu?
                </button>
              </div>
            )}

            {error && (
              <div style={{
                padding: '12px 16px',
                backgroundColor: '#fef2f2',
                border: '1px solid #fca5a5',
                borderRadius: '0.25rem',
                color: '#dc2626',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? 'Đang xử lý...' : mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
            </button>
          </form>

          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <span className="auth-divider-text">Hoặc tiếp tục với</span>
            <div className="auth-divider-line"></div>
          </div>

          <div className="auth-social-login">
            <button type="button" className="auth-social-btn" onClick={() => alert('Google login sắp ra mắt!')}>
              <span className="material-symbols-outlined auth-social-icon">mail</span>
              <span className="auth-social-text">Google</span>
            </button>
            <button type="button" className="auth-social-btn" onClick={() => alert('Apple login sắp ra mắt!')}>
              <span className="material-symbols-outlined auth-social-icon">ios</span>
              <span className="auth-social-text">Apple</span>
            </button>
          </div>

          <p className="auth-disclaimer">
            Bằng cách nhấp tiếp tục, bạn đồng ý với{' '}
            <a href="#" className="auth-link">Điều khoản Dịch vụ</a> và{' '}
            <a href="#" className="auth-link">Chính sách Bảo mật</a> của chúng tôi.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Auth
