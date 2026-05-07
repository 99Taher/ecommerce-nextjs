'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { CartItem, Product } from '@/types'

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchCart()
  }, [])

  useEffect(() => {
    calculateTotal()
  }, [cartItems])

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }

      const response = await axios.get('/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      })
      setCartItems(response.data.data?.items || [])
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const calculateTotal = () => {
    const sum = cartItems.reduce((acc, item) => {
      return acc + (item.product?.price || 0) * item.quantity
    }, 0)
    setTotal(sum)
  }

  const removeItem = async (productId: string) => {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`/api/cart/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      fetchCart()
    } catch (error) {
      console.error('Failed to remove item:', error)
    }
  }

  if (loading) {
    return (
      <div className="container-main py-12">
        <p className="text-center text-gray-600">Loading cart...</p>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container-main py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link href="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container-main py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map(item => (
            <div key={item.productId} className="card p-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold">{item.product?.name}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="font-bold">${(item.product?.price || 0) * item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.productId)}
                className="btn-secondary"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="card p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4 pb-4 border-b">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="btn-primary w-full">Checkout</button>
        </div>
      </div>
    </div>
  )
}