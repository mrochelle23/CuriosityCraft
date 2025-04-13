import React from 'react';
import { FaLeaf } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto p-4">
      {/* Page heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
      
      {/* About section container */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        
        {/* Logo and company name */}
        <div className="flex justify-center my-8">
          <h1 className="text-4xl font-bold">
            <span className="flex items-center whitespace-nowrap">
              CuriosityCraft <FaLeaf className="ml-2" />
            </span>
          </h1>
        </div>
        
        {/* Content section */}
        <div className="p-6">
          {/* Mission section */}
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700 mb-4">
            At CuriosityCraft, we believe that every child has the potential to become the next great innovator, inventor, or scientist. Our journey began with a simple yet powerful idea: to create toys that not only entertain but inspire young minds to explore the world of science, technology, engineering, and mathematics (STEM).
            Founded by a passionate team of educators and engineers, CuriosityCraft was born out of a desire to provide kids with high-quality, hands-on experiences that promote problem-solving, creativity, and critical thinking. Our products are designed with one goal in mind: to ignite a child’s curiosity and empower them to become lifelong learners.
            We’re committed to creating fun, engaging, and educational toys that foster imagination and provide children with the tools they need to build a brighter, smarter future.
          </p>
          
          {/* Story section */}
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-gray-700 mb-4">
            Founded in 2023, our mission is to inspire the next generation of thinkers, creators, and problem-solvers. We are dedicated to developing toys that spark curiosity, foster creativity, and ignite a lifelong love of learning. By combining fun and education, we aim to give children the foundation they need to succeed in a rapidly changing world.
            Through innovation, quality craftsmanship, and an unwavering commitment to education, we strive to make STEM accessible and enjoyable for kids everywhere. Our goal is to empower children with the skills and knowledge to shape the future, one playtime at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

// Exporting the About component for use in other parts of the application
export default About;