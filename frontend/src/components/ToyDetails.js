import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ToyDetails({ toys }) {
  const { id } = useParams(); // Get the toy ID from the URL
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // For navigation to the cart page

  // Find the toy by ID
  const toy = toys?.find((b) => b.id === parseInt(id));

  // If the toy is not found, display a message
  if (!toy) {
    return <p>toy not found.</p>;
  }

  // Handle adding the toy to the cart
  const handleAddToCart = () => {
    addToCart(toy); // Add the toy to the cart
    setShowModal(true); // Show the modal
  };

  // Handle navigating to the cart page
  const handleCheckout = () => {
    setShowModal(false); // Close the modal
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Toy Image */}
        <img
          src={toy.image || '/images/default.png'} // Display toy image or fallback to default
          alt={toy.name}
          className="w-full md:w-1/3 h-auto object-cover mb-8 md:mb-0 md:mr-8"
        />
        {/* Right: Toy Info */}
        <div className="flex flex-col items-start text-left">
          {/* Toy Name */}
          <h1 className="text-3xl font-bold mb-6">{toy.name}</h1>
          {/* Toy Price */}
          <p className="text-gray-700 text-2xl mb-6">${toy.price}</p>
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Separator */}
      <hr className="my-8" />
      {/* Toy Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <p className="mb-4">{toy.description}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-3xl relative">
            {/* Close Button (X) */}
            <button
              onClick={() => setShowModal(false)} // Close the modal
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-left md:items-start">
              {/* Toy Image */}
              <img
                src={toy.image || '/images/default.png'} // Display toy image or fallback to default
                alt={toy.name}
                className="w-80 h-100 object-cover mb-8 md:mb-0 md:mr-8"
              />
              {/* Modal Content */}
              <div className="text-left">
                {/* Modal Heading */}
                <h2 className="text-3xl font-bold mb-6">Added to your cart</h2>
                {/* Toy Price */}
                <p className="text-gray-700 text-1xl font-bold mt-3 mb-5">${toy.price}</p>
                {/* Go to Cart Button */}
                <button
                  onClick={handleCheckout} // Navigate to the cart page
                  className="bg-blue-500 text-white px-7 py-3 rounded hover:bg-blue-600 text-lg"
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Exporting the ToyDetails component for use in other parts of the application
export default ToyDetails;