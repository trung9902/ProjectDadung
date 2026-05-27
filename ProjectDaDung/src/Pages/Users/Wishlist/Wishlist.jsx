import React from 'react'
import './Wishlist.css'

const wishlistProducts = [
  {
    brand: 'TIMEPIECE CO.',
    name: 'Dong ho Minimalist White',
    price: '1.250.000 VND',
    badge: 'GIAM 20%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNx_JHjfQHMSdse7Vphjp1pJIOjiVIBX73SLWY70ZtWKMxQp69SvweN0Qd9UAQ0GIK9MLEKwOj89t3eZ45rYOFe9uu0R_wXgLFf4zR_ILW1b5c_HWqVsnXLPvldUsB_YogL1Gt5sMBpa2mSWmzGH-pGBcVUpdM5nennL2DujWVtsFwqroVWMIJKDQ1E1YrhpHPAAOrV2FtMM2kXm-IvqCbZXlcy2v6hOEnPt15tlRGAwjjDgKnWgZ-NXx-SmlSFPlQ3Rb_Y4vSPnC5',
  },
  {
    brand: 'AUDIO PRO',
    name: 'Tai nghe Wireless Studio',
    price: '3.490.000 VND',
    badge: 'MOI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTSOu0vW0A0pFwvoJvr5CKSIhF9zv8eLViycyEOnkGQ5LmWULm7z1oYfZdCYaMTOCPyKtnMbc5N0lHSjYNzRvmsgz25jsez9n6J4jIWsziPcArKA0D46vCXWmtzZO-JS1phkX2AUUpD16XMA9ZyhR-0iSWOiv1aHEQaJ-9SEnlmXHj5v-qrK9P75LvSOzjH4gJj6lI1iP3s3HLDFw3mG8C9Bv6Kf-ztqTdhZbXuF3bOX-UXahXWfU_nioonykXvQD31kECqryf6ZJt',
  },
  {
    brand: 'STREET CORE',
    name: 'Giay Sneaker Urban White',
    price: '1.800.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaSHYf3lmOYhWt7vYBq_PUFN1w2V_vnhfVQk3Ed2NmVx7HD8Ap9iQK1Pu9TzcVLeyuSlNhEtEZRC4ZqFctv1Rcgd0_HfwWQKyDCphB7lWTjSq9lJFK3wVDo2TvC1SEHE6yvK7X7Qn3nCxg5WhuVfimdRCU6EJ7lJV7nFsYscijWGNtfbtnN88D8V9uX-Vw_Hi6_Os3ktsnf3shKTLEPT4rIrPSrdNOdKthArOLRHJlnN32cL7hRVE19mhkO-W9ACoPe-u-COJXRIpv',
  },
  {
    brand: 'OFFICE LUXE',
    name: 'Den ban lam viec Nordic',
    price: '950.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPOadCJP_BYY658C3jrV9eKvYXPLXRckIs8KEA17oZ3-SyPNPTmCw4yIydseA_3FBWspsphJ1S6CMKhsZ2MIkavo7yKyAaJhtR8zc-Z83GCH874V2wxj-S-eLEr9bA9hVmExstjSJlu4pcZaRs8kbovZfgKp7mZSePl2TFoSTy7jia4GV0EUjNv6YjvtUX-AGq7ldLs2CTewdZlXExLCOJVsyJtM2zEoPP_mwL2ltxnCa_JigsBh3ZddGHM4Tj6-FcnHtnxYWInyYG',
  },
]

const Wishlist = () => {
  return (
    <main className="static-page wishlist-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Trang chu / Yeu thich</p>
          <h1 className="static-heading">San pham yeu thich</h1>
          <p className="static-subtitle">
            Ban dang co <strong>4</strong> san pham trong danh sach luu tru.
          </p>
        </div>
        <button type="button" className="static-btn-outline">
          <span className="material-symbols-outlined">delete_sweep</span>
          Xoa tat ca
        </button>
      </section>

      <section className="static-grid">
        {wishlistProducts.map((product) => (
          <article className="static-card wishlist-card" key={product.name}>
            <div className="static-image-frame portrait">
              <img src={product.image} alt={product.name} />
              {product.badge && <span className="static-badge wishlist-badge">{product.badge}</span>}
              <button type="button" className="static-icon-btn wishlist-remove" aria-label="Xoa san pham">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
            <div className="static-product-body">
              <p className="static-brand">{product.brand}</p>
              <h2 className="static-product-title">{product.name}</h2>
              <p className="static-price">{product.price}</p>
              <button type="button" className="static-btn wishlist-add">
                <span className="material-symbols-outlined">shopping_cart</span>
                Them vao gio
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Wishlist
