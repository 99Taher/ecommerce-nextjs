'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '@/types'
import { ProductCard } from '@/components/ProductCard'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetchProducts()
  }, [category])

  const fetchProducts = async () => {
    try {
      const url = category === 'all' 
        ? '/api/products'
        : `/api/products?category=${category}`
      const response = await axios.get(url)
      setProducts(response.data.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container-main py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      <div className="mb-8 flex gap-4">
        {['all', 'electronics', 'clothing', 'books'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              category === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}