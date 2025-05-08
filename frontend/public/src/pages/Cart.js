import React from 'react';

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
      <button onClick={() => alert("Payment Success (mock)")}>Pay Now</button>
    </div>
  );
}

