import React from 'react';
import { useCart } from './CartContext.jsx';

const Cart = () => {
  // Получаем состояние корзины и функцию удаления из контекста
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}₽
              <button onClick={() => removeFromCart(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
