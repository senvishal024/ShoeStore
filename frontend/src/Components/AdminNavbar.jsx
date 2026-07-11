import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
     <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            ShoeStore
          </h1>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/admin"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/admin-orders"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Orders
          </Link>

          <Link
            to="/add-products"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Add Products
          </Link>

          <Link
            to="/all-products"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default AdminNavbar
