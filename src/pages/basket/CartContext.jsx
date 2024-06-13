import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const CartContext = createContext();

// Провайдер контекста, который будет оборачивать наше приложение
export const CartProvider = ({ children }) => {
  // Состояние для хранения элементов корзины
  const [cartItems, setCartItems] = useState([]);

  // Функция для добавления элемента в корзину
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Функция для удаления элемента из корзины
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    // Предоставляем контекст с текущими значениями
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста корзины
export const useCart = () => useContext(CartContext);
