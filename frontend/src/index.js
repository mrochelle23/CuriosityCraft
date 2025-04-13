import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global CSS styles
import App from './App'; // Import the root App component

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);