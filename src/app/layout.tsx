import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShopHub - Modern E-Commerce Platform',
  description: 'Shop the best products with secure payment and fast delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}