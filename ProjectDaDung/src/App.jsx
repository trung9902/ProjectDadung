import React from 'react'
import './App.css'
import AppRouter from './Routes/index.jsx'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
