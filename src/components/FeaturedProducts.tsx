'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '@/types'
import { ProductCard } from './ProductCard'

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products?limit=8')
      setProducts(response.data.data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <section className="container-main py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {undefined.map(item => <div key={item.id}>{item.name}</div>)}
    </section>
  )
}