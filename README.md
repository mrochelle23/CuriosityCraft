# CuriosityCraft STEM Toys Store

CuriosityCraft is a React-based web application designed to showcase and sell STEM toys for kids. The application features a shopping cart, product details, and a contact form, all built with modern web technologies like React, Tailwind CSS, and React Router.

---

## File Structure

The project is organized as follows:

```
frontend/
├── public/
    ├── images/
        ├── toy.png
        ├── toy2.png
    ├── index.html
├── src/
│ ├── components/
│ │ ├── About.js
│ │ ├── Cart.js
│ │ ├── ContactForm.js
│ │ ├── Footer.js
│ │ ├── Header.js
│ │ ├── Home.js
│ │ ├── ToyDetails.js
│ │ ├── ToyList.js
│ ├── context/
│ │ ├── CartContext.js
│ ├── App.js
│ ├── index.css
│ ├── index.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
```

---

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Tailwind CSS**: For styling the application.
- **Axios**: For handling HTTP requests (e.g., in the contact form).
- **Font Awesome**: For icons.
- **PostCSS**: For processing Tailwind CSS.

---

## How to Run the Project

### Prerequisites
- Node.js and npm installed on your machine.

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd frontend
   ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Start the Development Server**:
    ```bash
    npm start
    ```
    This will start the application on
    `http://localhost:3000`.
4. **Build for Production** (Optional):
    ```bash
    npm run build
    ```
    This will create an optimized production build in the `build/` directory.

---

## Features
- **Homepage**: Displays a hero section and a grid of STEM toys.
- **Product List**: Shows all available toys with links to their details.
- **Product Details**: Displays detailed information about a specific toy.
- **Shopping Cart**: Allows users to add, update, and remove items.
- **Contact Form**: Lets users send messages to the store.
- **About Page**: Provides information about the store's mission and story.

---

## Tailwind CSS Configuration
The project uses Tailwind CSS for styling. The configuration is defined in `tailwind.config.js` and includes:

- Paths to all template files in the `src/` directory.
- Custom theme extensions (if needed).

---
## PostCSS Configuration

The project uses PostCSS to process Tailwind CSS. The configuration is defined in `postcss.config.js` and includes:

- `tailwindcss`: For processing Tailwind directives.
- `autoprefixer`: For adding vendor prefixes to CSS.