export const CART_STORAGE_KEY = 'cart'
export const CART_UPDATED_EVENT = 'cart-updated'

export const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]')
}

export const getCartCount = () => {
  return getCart().reduce((total, item) => total + item.quantity, 0)
}

export const saveCart = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, { detail: cart }))// phát tín hiệu cập nhật giỏ hàng
}

export const clearStoredCart = () => {
  localStorage.removeItem(CART_STORAGE_KEY)
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT, { detail: [] }))
}
