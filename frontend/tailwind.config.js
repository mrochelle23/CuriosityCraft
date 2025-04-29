/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of your template files
  content: [
    // Add paths to your HTML, JavaScript, and React component files
    './src/**/*.{html,js,jsx,ts,tsx}', // Include all files in the src directory with these extensions
  ],
  theme: {
    // Extend the default Tailwind CSS theme
    extend: {
      // Add custom styles, colors, spacing, etc., here
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here (e.g., forms, typography, etc.)
  ],

  theme: {
    extend: {
      screens: {
        'max-834px': { 'max': '834px' }, // Custom screen size for max-width 834px
      },
    },
  },
};
