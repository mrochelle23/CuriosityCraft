import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

export function CartProvider({ children }) {
  // State to hold the cart items
  const [cart, setCart] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If the item exists, increase its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => 
      // Filter out the item with the given ID
      prevCart.filter((item) => item.id !== itemId)
    );
  };

  // Update the quantity of an item in the cart
  const updateCartQuantity = (itemId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        // If the new quantity is 0 or less, remove the item from the cart
        return prevCart.filter((item) => item.id !== itemId);
      }
      // Otherwise, update the item's quantity
      return prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    // Provide the cart context to child components
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}