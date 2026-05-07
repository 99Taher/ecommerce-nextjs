'use client'

import { useState } from 'react'
import axios from 'axios'
import { Product } from '@/types'

export function ProductCard({ product }: { product: Product }) {
  const [adding, setAdding] = useState(false)

  const handleAddToCart = async () => {
    try {
      setAdding(true)
      const token = localStorage.getItem('token')
      
      if (!token) {
        alert('Please login to add items to cart')
        return
      }

      await axios.post(
        '/api/cart',
        { productId: product.id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      alert('Product added to cart!')
    } catch (error) {
      alert('Failed to add product to cart')
    } finally {
      setAdding(false)
    }
  }

  return (
    <div className="card p-4 overflow-hidden">
      <div className="bg-gray-200 h-48 mb-4 rounded flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
        <span className="text-sm bg-gray-200 px-2 py-1 rounded">{product.category}</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-yellow-500">★ {product.rating.toFixed(1)}</span>
        <span className="text-gray-500 text-sm">({product.stock} in stock)</span>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={adding || product.stock === 0}
        className="btn-primary w-full"
      >
        {adding ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  )
}