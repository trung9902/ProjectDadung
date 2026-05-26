import React, { createContext, useContext, useState, useCallback } from 'react'

const API = 'http://localhost:8080/api'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('auth_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [token, setToken] = useState(() => localStorage.getItem('auth_token') || null)

  const saveAuth = useCallback((tokenValue, userValue) => {
    localStorage.setItem('auth_token', tokenValue)
    localStorage.setItem('auth_user', JSON.stringify(userValue))
    setToken(tokenValue)
    setUser(userValue)
  }, [])

  const login = useCallback(async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Đăng nhập thất bại')
    saveAuth(data.token, data.user)
    return data.user
  }, [saveAuth])

  const register = useCallback(async (email, password, fullName) => {
    const res = await fetch(`${API}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, fullName })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Đăng ký thất bại')
    saveAuth(data.token, data.user)
    return data.user
  }, [saveAuth])

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_user')
    setToken(null)
    setUser(null)
  }, [])

  const isAdmin = user?.role === 'Admin'
  const isLoggedIn = !!token

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, isAdmin, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
