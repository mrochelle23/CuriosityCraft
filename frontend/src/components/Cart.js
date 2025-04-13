import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  // Access cart data and functions from CartContext
  const { cart, updateCartQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      {/* Page heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>
      {/* Display message if the cart is empty */}
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        // Display cart items in a grid
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <CartItem
              key={item.id} // Unique key for each cart item
              item={item} // Pass item data as a prop
              updateCartQuantity={updateCartQuantity} // Pass function to update quantity
              removeFromCart={removeFromCart} // Pass function to remove item
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CartItem({ item = {}, updateCartQuantity, removeFromCart }) {
  const { id, name, price, image, quantity } = item; // Destructure item properties

  // State to track hover status for the expandable circle
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
      {/* Left: Item details */}
      <div className="flex items-center">
        {/* Item image with fallback to a default image */}
        <img
          src={image || '/images/default.png'}
          alt={name || 'Item'}
          className="w-16 h-16 object-contain mr-4"
        />
        <div>
          {/* Link to the item's details page */}
          <Link to={`/toys/${id}`} className="text-xl font-bold">
            {name || 'Unknown Item'}
          </Link>
          {/* Item price */}
          <p className="text-gray-700">${price || '0.00'}</p>
        </div>
      </div>
      {/* Right: Expandable circle for quantity controls */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)} // Show expanded controls on hover
        onMouseLeave={() => setIsHovered(false)} // Collapse controls when not hovered
      >
        <div
          className={`flex items-center justify-center bg-blue-500 text-white font-bold rounded-full transition-all duration-300 ${
            isHovered ? 'w-64 px-4' : 'w-12'
          } h-12`}
        >
          {isHovered ? (
            <div className="flex items-center space-x-4">
              {/* Decrement button */}
              <button
                onClick={() => updateCartQuantity(id, quantity - 1)} // Decrease quantity
                className="text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 transition duration-300"
              >
                -
              </button>
              {/* Quantity display */}
              <span className="mx-4">{quantity || 0}</span>
              {/* Increment button */}
              <button
                onClick={() => updateCartQuantity(id, quantity + 1)} // Increase quantity
                className="text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 transition duration-300"
              >
                +
              </button>
              {/* Remove item button */}
              <button
                onClick={() => removeFromCart(id)} // Remove item from cart
                className="text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 transition duration-300"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ) : (
            // Display quantity when not hovered
            <span>{quantity || 0}</span>
          )}
        </div>
      </div>
    </div>
  );
}

// Exporting the Cart component for use in other parts of the application
export default Cart;