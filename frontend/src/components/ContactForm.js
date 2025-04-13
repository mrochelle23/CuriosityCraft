import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '', // User's name
    email: '', // User's email
    message: '' // User's message
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Limit the message to 500 characters
    if (name === 'message' && value.length > 500) {
      return;
    }

    // Update the form data state
    setFormData({ ...formData, [name]: value });

    // Dynamically adjust the height of the textarea
    if (name === 'message') {
      event.target.style.height = 'auto'; // Reset height to auto to calculate new height
      event.target.style.height = `${event.target.scrollHeight}px`; // Set height based on scrollHeight
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Send form data to the backend API
      const response = await axios.post('http://localhost:5001/contact', formData);
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error('There was an error sending the message!', error); // Log error
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Page heading */}
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
        {/* Name input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mb-4 w-full rounded"
          required
          placeholder="Your Name"
        />
        {/* Email input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 mb-4 w-full rounded"
          required
          placeholder="Your Email"
        />
        {/* Message textarea */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border p-4 mb-4 w-full rounded resize-none pr-20 pb-10"
            required
            placeholder="Your Message"
            rows="4" // Initial height
          />
          {/* Character counter for the message */}
          <div className="absolute bottom-6 right-3 text-sm text-gray-500 pointer-events-none">
            {formData.message.length}/500
          </div>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// Exporting the ContactForm component for use in other parts of the application
export default ContactForm;