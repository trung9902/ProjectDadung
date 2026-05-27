import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <main className="static-page account-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Tai khoan</p>
          <h1 className="static-heading">Tai khoan cua toi</h1>
          <p className="static-subtitle">Quan ly thong tin ca nhan va tuy chon mua sam cua ban.</p>
        </div>
      </section>

      <section className="account-layout">
        <aside className="static-card static-card-pad account-profile">
          <img
            className="profile-avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzVcfl-VGN9TxZpvv-XbW29vENiJ2WsggHnQYb4IRrqXlDav9TmmIQ8t3HlnH1sM11WvVArdOsfYgCtJcYSaos4cfPlemHlzAfHantWVb6NdAU5sS9aisceNOkhMLZAeeSTogIHBlqGUGupidxEDGBI_aAVfhGsfIMJPUbKsehQjV2_OgITfw7Q7-wu7O47CnnSG2QyGeJ1JR-DwRwHFrVAQup-a9ANu5WDIevgGfVXdILPHZjf-JmP6Thmez_6nNcaqdlh5buJW6S"
            alt="Anh dai dien"
          />
          <h2>Nguyen Minh Anh</h2>
          <p className="static-muted">minhanh@example.com</p>
          <div className="account-stats">
            <span><strong>12</strong> Don hang</span>
            <span><strong>4</strong> Yeu thich</span>
            <span><strong>Gold</strong> Hang thanh vien</span>
          </div>
        </aside>

        <section className="static-card static-card-pad">
          <h2>Thong tin ca nhan</h2>
          <form className="static-form-grid">
            <div className="static-form-group">
              <label htmlFor="accountName">Ho ten</label>
              <input id="accountName" className="static-input" defaultValue="Nguyen Minh Anh" />
            </div>
            <div className="static-form-group">
              <label htmlFor="accountPhone">So dien thoai</label>
              <input id="accountPhone" className="static-input" defaultValue="090 123 4567" />
            </div>
            <div className="static-form-group">
              <label htmlFor="accountEmail">Email</label>
              <input id="accountEmail" className="static-input" defaultValue="minhanh@example.com" />
            </div>
            <div className="static-form-group">
              <label htmlFor="accountBirthday">Ngay sinh</label>
              <input id="accountBirthday" className="static-input" defaultValue="12/08/1996" />
            </div>
            <div className="static-form-group full">
              <label htmlFor="accountAddress">Dia chi mac dinh</label>
              <input id="accountAddress" className="static-input" defaultValue="123 Le Loi, Quan 1, TP. Ho Chi Minh" />
            </div>
            <div className="static-actions">
              <button type="button" className="static-btn">Luu thay doi</button>
              <button type="button" className="static-btn-outline">Doi mat khau</button>
            </div>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Account
