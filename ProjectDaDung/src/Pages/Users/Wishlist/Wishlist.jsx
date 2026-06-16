import React, { useState } from 'react'
import './Wishlist.css'
import { useWishlist } from '../../../../hook/useWishlist'
import { getCart, saveCart } from '../../../utils/cart'
import useProductsData from '../../../../servers/produc'

const Wishlist = () => {
  const { wishlist, loading } = useWishlist();
  const [cart, setCart] = useState(() => {
    return getCart()
  })
  // const { deleteWishlistAll } = useDeleteWishlistAll();
  const products = useProductsData()

  const addCart = (id) => {
    const product = products.find((p) => p.id === id)
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      if (existingItem.quantity >= product.stock) {
        alert('Số lượng sản phẩm đã đạt tối đa trong kho!')
        return
      }
      setCart(updatedCart)
      saveCart(updatedCart)
    } else {
      const newItem = { ...product, quantity: 1 }
      const updatedCart = [...cart, newItem]
      setCart(updatedCart)
      saveCart(updatedCart)
    }
  }
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
          wishlist?.length > 0 ? (
            wishlist?.map((item) => {
              const product = item?.product;
              const firstBadge = product?.badges?.[0];
              return (
                <article className="static-card wishlist-card" key={product?.id}>
                  <div className="static-image-frame portrait">
                    <img src={product?.image} alt={product?.name} />
                    {firstBadge && (
                      <span className="static-badge wishlist-badge">{firstBadge.label}</span>
                    )}

                    <button type="button" className="static-icon-btn wishlist-remove" aria-label="Xoa san pham">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="static-product-body">
                    <p className="static-brand">{product?.brand}</p>
                    <h2 className="static-product-title">{product?.name}</h2>
                    <p className="static-price">{product?.price}</p>
                    <button type="button" className="static-btn wishlist-add" onClick={() => addCart(product.id)}>
                      <span className="material-symbols-outlined">shopping_cart</span>
                      Them vao gio
                    </button>
                  </div>
                </article>
              )
            })

          ) : (
            <p className="static-empty">Ban chua co san pham nao trong danh sach yeu thich.</p>
          )

        )}
      </section>
    </main>
  )
}

export default Wishlist
