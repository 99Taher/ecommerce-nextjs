export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your trusted e-commerce platform for quality products.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Categories</a></li>
              <li><a href="#" className="hover:text-white">Deals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}