import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container-main text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to ShopHub</h1>
        <p className="text-xl mb-8 text-blue-100">
          Discover amazing products at incredible prices
        </p>
        <Link href="/products" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
          Start Shopping
        </Link>
      </div>
    </section>
  )
}