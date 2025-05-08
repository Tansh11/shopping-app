import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:5000/api/shop/categories', {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
    setCategories(res.data);
  };

  const fetchItems = async (cat) => {
    const res = await axios.get(`http://localhost:5000/api/shop/items/${cat}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    });
    setItems(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((c) => (
        <button key={c} onClick={() => fetchItems(c)}>{c}</button>
      ))}
      <h2>Items</h2>
      {items.map((i) => (
        <div key={i}>
          {i} <button onClick={() => setCart([...cart, i])}>Add to Cart</button>
        </div>
      ))}
      <button onClick={() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = '/cart';
      }}>Go to Cart</button>
    </div>
  );
}

