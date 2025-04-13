import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ToyList from './components/ToyList';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import ToyDetails from './components/ToyDetails';

function App() {
  // Array of toy objects to be passed as props to components
  const toys = [
    {
      id: 1,
      name: 'BotQuest Explorer',
      price: 55.99,
      image: '/images/toy.png',
      description: 'The BotQuest Explorer is a next-gen coding robot designed to introduce kids to the world of robotics and programming through hands-on learning. Equipped with advanced sensors, a durable metal frame, and Wi-Fi/Bluetooth connectivity, this bot is ready to navigate challenges, follow commands, and react to its environment. Kids can program it using block-based coding or transition to Python as their skills grow—making it the perfect companion for curious minds and future coders.',
    },
    {
      id: 2,
      name: 'SolarMorph 12X Builder Kit',
      price: 65.99,
      image: '/images/toy2.png',
      description: 'The SolarMorph 12X Builder Kit is an eco-friendly robotics set that lets kids create 12 unique solar-powered models using over 190 interchangeable pieces. From crawling crabs to rolling rovers and soaring windmills, each design comes to life using solar energy—no batteries required! It’s the ultimate introduction to green technology and mechanical engineering, designed to spark innovation and environmental awareness in young inventors.',
    },
  ];

  return (
    // Provide the cart context to the entire application
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header component */}
          <Header />
          <main className="flex-grow">
            {/* Define application routes */}
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />
              {/* Toy list page */}
              <Route path="/toys" element={<ToyList toys={toys} />} />
              {/* Toy details page */}
              <Route path="/toys/:id" element={<ToyDetails toys={toys} />} />
              {/* Contact form page */}
              <Route path="/contact" element={<ContactForm />} />
              {/* About page */}
              <Route path="/about" element={<About />} />
              {/* Cart page */}
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          {/* Footer component */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

// Exporting the App component as the root of the application
export default App;