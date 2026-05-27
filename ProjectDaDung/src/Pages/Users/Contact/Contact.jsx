import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <main className="static-page contact-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Lien he</p>
          <h1 className="static-heading">Lien he voi chung toi</h1>
          <p className="static-subtitle">
            Doi ngu ModernRetail luon san sang ho tro cac cau hoi ve san pham, don hang va chinh sach.
          </p>
        </div>
      </section>

      <section className="static-two-col">
        <div className="static-card contact-map">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwSg6bXoCsTSeFmxTHEQubAoigV9NfQbrzECVgH34yWyve8LttI6cFL91UsiGngjTmBtmdlrAa1EBjVTZk0BsuXD-qJ-KCImQrG7-67daovBhISxw2_E7N5U9Xn3zwGY2Q3DSfty9-7IDUBx46Pd5YdDoH36KAzaWqrhX2soNXyDfoqda6QPYhXnI4MN9TT8zAMnZ82vEF3L8nhV525xYfVW-XWLHSgZ7AwIv7ii3UEFaUH5BpaOl-etQNXheEQqo-RUph2D0_fve5"
            alt="Ban do lien he"
          />
        </div>
        <form className="static-card static-card-pad contact-form">
          <h2>Gui tin nhan</h2>
          <div className="static-form-grid">
            <div className="static-form-group">
              <label htmlFor="contactName">Ho ten</label>
              <input id="contactName" className="static-input" placeholder="Nguyen Van A" />
            </div>
            <div className="static-form-group">
              <label htmlFor="contactEmail">Email</label>
              <input id="contactEmail" className="static-input" type="email" placeholder="you@example.com" />
            </div>
            <div className="static-form-group full">
              <label htmlFor="contactMessage">Noi dung</label>
              <textarea id="contactMessage" className="static-textarea" placeholder="Ban can ho tro van de gi?" />
            </div>
          </div>
          <button type="button" className="static-btn">Gui tin nhan</button>
        </form>
      </section>

      <section className="contact-info-grid">
        <article className="static-card static-card-pad">
          <span className="material-symbols-outlined">location_on</span>
          <h3>Dia chi</h3>
          <p>123 Le Loi, Quan 1, TP. Ho Chi Minh</p>
        </article>
        <article className="static-card static-card-pad">
          <span className="material-symbols-outlined">call</span>
          <h3>Hotline</h3>
          <p>1900 1234</p>
        </article>
        <article className="static-card static-card-pad">
          <span className="material-symbols-outlined">mail</span>
          <h3>Email</h3>
          <p>support@modernretail.vn</p>
        </article>
      </section>
    </main>
  )
}

export default Contact
