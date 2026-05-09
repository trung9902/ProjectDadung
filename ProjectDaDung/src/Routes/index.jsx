import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layouts/layout.jsx'

import Home from '../Pages/Users/Home/Home.jsx'
import ProductList from '../Pages/Users/ProductList/ProductList.jsx'
import ProductDetail from '../Pages/Users/ProductDetail/ProductDetail.jsx'
import Cart from '../Pages/Users/Cart/Cart.jsx'
import Checkout from '../Pages/Users/Checkout/Checkout.jsx'
import Auth from '../Pages/Users/Auth/Auth.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        
        {/* Pages without standard Layout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
