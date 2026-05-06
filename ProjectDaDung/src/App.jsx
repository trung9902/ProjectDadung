import { useState } from 'react'
import './App.css'
// import Home from './Pages/Users/Home/Home.jsx'
import Layout from '@/layouts/layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
    </>
  )
}

export default App
