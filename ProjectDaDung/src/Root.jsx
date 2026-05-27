import { useEffect, useState } from 'react'
import App from './App.jsx'

function Root() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 800)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <phantom-ui loading={loading ? true : undefined} reveal="0.2">
      <App />
    </phantom-ui>
  )
}

export default Root
