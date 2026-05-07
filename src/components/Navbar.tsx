'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      setIsLoggedIn(true)
      const userData = JSON.parse(user)
      setUserName(userData.firstName)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container-main flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ShopHub
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>

          {isLoggedIn ? (
            <div className="flex gap-4 items-center">
              <span className="text-gray-700">Welcome, {userName}!</span>
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/login" className="btn-secondary">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}