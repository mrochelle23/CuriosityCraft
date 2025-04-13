import React from 'react';

// Footer component definition
function Footer() {
  return (
    // Footer container with styling
    <footer className="bg-blue-600 text-white p-4 mt-8 shadow-md">
      <div className="container mx-auto text-center">
        {/* Navigation links */}
        <ul className="flex justify-center space-x-4 mb-4">
          {/* Link to Facebook */}
          <li><a href="https://facebook.com/curiositycraftinc" className="hover:text-gray-400">Facebook</a></li>
          {/* Link to Instagram */}
          <li><a href="https://instagram.com/curiositycraftinc" className="hover:text-gray-400">Instagram</a></li>
          {/* Link to email */}
          <li><a href="mailto:contact@curiositycraft.com" className="hover:text-gray-400">Email Us</a></li>
        </ul>
        {/* Copyright text */}
        <p>&copy; 2025 CuriosityCraft Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Exporting the Footer component for use in other parts of the application
export default Footer;