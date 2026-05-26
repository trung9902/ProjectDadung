import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../layouts/layout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import { AdminRoute } from '../Components/ProtectedRoute.jsx'

import Home from '../Pages/Users/Home/Home.jsx'
import ProductList from '../Pages/Users/ProductList/ProductList.jsx'
import ProductDetail from '../Pages/Users/ProductDetail/ProductDetail.jsx'
import Cart from '../Pages/Users/Cart/Cart.jsx'
import Checkout from '../Pages/Users/Checkout/Checkout.jsx'
import Auth from '../Pages/Users/Auth/Auth.jsx'

import Dashboard from '../Pages/Admin/Dashboard/Dashboard.jsx'
import AdminProducts from '../Pages/Admin/Products/AdminProducts.jsx'
import AdminOrders from '../Pages/Admin/Orders/AdminOrders.jsx'
import AdminUsers from '../Pages/Admin/Users/AdminUsers.jsx'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes with standard Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* Pages without standard Layout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />

        {/* Admin routes */}
        <Route path="/admin" element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
