import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');

  const login = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    window.location.href = '/dashboard';
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

