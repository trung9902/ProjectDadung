import React from 'react'
import './Wishlist.css'
import { useWishlist } from '../../../../hook/useWishlist'

const Wishlist = () => {
  const { wishlist, loading } = useWishlist();
  // const { deleteWishlistAll } = useDeleteWishlistAll();

  return (
    <main className="static-page wishlist-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Trang chu / Yeu thich</p>
          <h1 className="static-heading">San pham yeu thich</h1>
          {
            wishlist.length > 0 && (
              <p className="static-subtitle">
                Ban dang co <strong>{wishlist.length}</strong> san pham trong danh sach luu tru.
              </p>
            )
          }
        </div>
        <button type="button" className="static-btn-outline">
          <span className="material-symbols-outlined">delete_sweep</span>
          Xoa tat ca
        </button>
      </section>

      <section className="static-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (

          wishlist.length === 0 ? (
            <p>Khong co san pham nao trong danh sach yeu thich.</p>
          ) : (
            wishlist.map((product) => (
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
            ))
          )

        )}
      </section>
    </main>
  )
}

export default Wishlist
