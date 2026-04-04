import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Structure: { 's1': { issuePhoto: null } }
  const [cart, setCart] = useState({});
  
  // Global state so the "Book Now" button remembers it was clicked across pages
  const [isCartConfirmed, setIsCartConfirmed] = useState(false);

  // Toggles item in or out of cart
  const toggleCartItem = (id) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[id]) {
        delete newCart[id]; // If it's there, remove it
      } else {
        newCart[id] = { issuePhoto: null }; // If it's not, add it
      }
      
      if (Object.keys(newCart).length === 0) setIsCartConfirmed(false);
      return newCart;
    });
  };

  const updateItemImage = (id, imageUrl) => {
    setCart(prev => ({
      ...prev,
      [id]: { ...prev[id], issuePhoto: imageUrl }
    }));
  };

  const clearCart = () => {
    setCart({});
    setIsCartConfirmed(false);
  };

  // Count is just the number of unique items now
  const getCartCount = () => {
    return Object.keys(cart).length;
  };

  return (
    <CartContext.Provider value={{ 
      cart, toggleCartItem, updateItemImage, clearCart, getCartCount,
      isCartConfirmed, setIsCartConfirmed 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);