import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header.jsx'
import Footer from '../Components/Footer.jsx'

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
