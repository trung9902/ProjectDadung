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
import Account from '../Pages/Users/Account/Account.jsx'
import AccountOrders from '../Pages/Users/AccountOrders/AccountOrders.jsx'
import AccountOrderDetail from '../Pages/Users/AccountOrderDetail/AccountOrderDetail.jsx'
import Collections from '../Pages/Users/Collections/Collections.jsx'
import Contact from '../Pages/Users/Contact/Contact.jsx'
import ForgotPassword from '../Pages/Users/ForgotPassword/ForgotPassword.jsx'
import NewArrivals from '../Pages/Users/NewArrivals/NewArrivals.jsx'
import Search from '../Pages/Users/Search/Search.jsx'
import Wishlist from '../Pages/Users/Wishlist/Wishlist.jsx'

import Dashboard from '../Pages/Admin/Dashboard/Dashboard.jsx'
import AdminProducts from '../Pages/Admin/Products/AdminProducts.jsx'
import AdminOrders from '../Pages/Admin/Orders/AdminOrders.jsx'
import AdminUsers from '../Pages/Admin/Users/AdminUsers.jsx'
import AdminCoupons from '../Pages/Admin/Coupons/AdminCoupons.jsx'
import AdminOrderDetail from '../Pages/Admin/OrderDetail/AdminOrderDetail.jsx'
import AdminReports from '../Pages/Admin/Reports/AdminReports.jsx'

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
          <Route path="account" element={<Account />} />
          <Route path="account/orders" element={<AccountOrders />} />
          <Route path="account/orders/:id" element={<AccountOrderDetail />} />
          <Route path="collections" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
          <Route path="search" element={<Search />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        {/* Pages without standard Layout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin routes */}
        <Route path="/admin" element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/:id" element={<AdminOrderDetail />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="coupons" element={<AdminCoupons />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
