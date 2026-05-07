import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Home from '../Pages/Users/Home/Home.jsx'
import Footer from '../Components/footer/Footer.jsx'

const Layout = () => {
  console.log('changed')
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default Layout

