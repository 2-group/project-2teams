import React from 'react';
import { useCart } from './CartContext.jsx';

const Checkout = () => {
  // Получаем элементы корзины из контекста
  const { cartItems } = useCart();

  // Функция для обработки бронирования
  const handleBooking = () => {
    // Логика для обработки бронирования
    alert('Бронирование успешно!');
  };

  return (
    <div>
      <h2>Оформление заказа</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - {item.price}₽
              </li>
            ))}
          </ul>
          <button onClick={handleBooking}>Забронировать</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
