import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { CartContext } from '../context/CartContext';

function Home() {
  // Access the addToCart function from the CartContext
  const { addToCart } = useContext(CartContext);

  // Animation for fading in elements
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  // Animation for sliding in elements
  const slideIn = useSpring({ transform: 'translateY(0)', from: { transform: 'translateY(-50px)' }, delay: 400 });

  // Array of toy objects to display on the homepage
  const toys = [
    { id: 1, name: 'BotQuest Explorer', price: 55.99, image: '/images/toy.png' },
    { id: 2, name: 'SolarMorph 12X Builder Kit', price: 65.99, image: '/images/toy2.png' },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Hero section with background and animations */}
      <div
        className="relative h-96"
        style={{
          backgroundColor: '#2669b5',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          {/* Animated heading */}
          <animated.h1 style={fadeIn} className="text-5xl font-bold mb-4">
            Welcome to CuriosityCraft
          </animated.h1>
          {/* Animated subheading */}
          <animated.p style={slideIn} className="text-xl mb-8">
            Your one-stop shop for STEM Toys for Kids.
          </animated.p>
          {/* Button linking to the toys page */}
          <Link to="/toys">
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
              Explore Our STEM Toys
            </button>
          </Link>
        </div>
      </div>

      {/* Grid container for displaying toys */}
      <div className="container mx-auto w-full grid grid-cols-2 gap-8 mt-8">
        {toys.map((toy) => (
          <div
            key={toy.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            {/* Link to the individual toy's page */}
            <Link to={`/toys/${toy.id}`}>
              <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                {/* Display toy image or fallback to default */}
                <img
                  src={toy.image || '/images/toy.png'}
                  alt={toy.name}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </Link>
            {/* Toy details */}
            <div className="p-6">
              {/* Toy name */}
              <h3 className="text-2xl font-bold mb-2">{toy.name}</h3>
              {/* Toy price */}
              <p className="text-gray-700 mb-4">${toy.price}</p>
              {/* Button to add the toy to the cart */}
              <button
                onClick={() => addToCart(toy)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Exporting the Home component for use in other parts of the application
export default Home;