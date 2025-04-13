import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ToyList({ toys }) {
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

  // If no toys are available, display a message
  if (!toys || toys.length === 0) {
    return <p>No Toys available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Page heading */}
      <h2 className="text-3xl font-bold mb-4 text-left">Our STEM Toys</h2>
      {/* Grid container for displaying toys */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {toys.map((toy) => (
          <div key={toy.id} className="toy border p-4 bg-white">
            {/* Link to the individual toy's details page */}
            <Link to={`/toys/${toy.id}`}>
              {/* Toy image */}
              <img src={toy.image} alt={toy.name} className="mb-4 mx-auto" />
              {/* Toy name */}
              <h3 className="text-xl font-bold">{toy.name}</h3>
              {/* Toy price */}
              <p>${toy.price}</p>
            </Link>
            {/* Button to add the toy to the cart */}
            <button
              onClick={() => addToCart(toy)} // Add the toy to the cart
              className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the ToyList component for use in other parts of the application
export default ToyList;