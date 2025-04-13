import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaLeaf } from "react-icons/fa";

// Header component definition
function Header() {
  // Access the cart data from the CartContext
  const { cart } = useContext(CartContext);

  // Function to calculate the total quantity of items in the cart
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    // Header container with styling
    <header className="bg-blue-600 text-white p-11 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and link to the homepage */}
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="flex items-center whitespace-nowrap">
              CuriosityCraft
              {/* Leaf icon next to the logo */}
              <FaLeaf className="ml-2" />
            </span>
          </h1>
        </Link>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            {/* Link to Home */}
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            {/* Link to Toys */}
            <li><Link to="/toys" className="hover:text-gray-400">Toys</Link></li>
            {/* Link to Contact */}
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            {/* Link to About Us */}
            <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            {/* Cart icon with item count */}
            <li className="relative">
              <Link to="/cart" className="hover:text-gray-400">
                {/* Shopping cart icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8L17 13M7 13H5.4M7 13l1.4-7h10.2M7 13h10m0 0l1.4 7M7 13l-1.4 7"></path>
                </svg>
                {/* Display the total quantity of items in the cart if greater than 0 */}
                {getTotalQuantity() > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {getTotalQuantity()}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Exporting the Header component for use in other parts of the application
export default Header;