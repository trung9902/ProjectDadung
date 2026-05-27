import React from 'react'
import './ForgotPassword.css'

const ForgotPassword = () => {
  return (
    <main className="forgot-page">
      <a className="forgot-brand" href="/">ModernRetail</a>
      <section className="forgot-card">
        <div className="forgot-icon">
          <span className="material-symbols-outlined">lock_reset</span>
        </div>
        <h1>Quen mat khau?</h1>
        <p>
          Nhap email cua ban de chung toi gui huong dan khoi phuc mat khau.
        </p>
        <form className="forgot-form">
          <label htmlFor="forgotEmail">Dia chi Email</label>
          <div className="forgot-input-wrap">
            <span className="material-symbols-outlined">mail</span>
            <input id="forgotEmail" type="email" placeholder="username@email.com" />
          </div>
          <button type="button">
            Gui yeu cau khoi phuc
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>
        <a className="forgot-back" href="/auth">
          <span className="material-symbols-outlined">arrow_back</span>
          Quay lai trang dang nhap
        </a>
      </section>
    </main>
  )
}

export default ForgotPassword
