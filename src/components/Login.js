import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, { email, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className='p-4'>
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='input input-bordered w-full max-w-xs' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='input input-bordered w-full max-w-xs' />
      <button onClick={handleLogin} className='btn btn-primary'>Login</button>
    </div>
  );
}

export default Login;