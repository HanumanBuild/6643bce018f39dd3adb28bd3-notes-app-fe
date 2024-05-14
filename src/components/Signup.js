import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signup`, { username, email, password });
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };

  return (
    <div className='p-4'>
      <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' className='input input-bordered w-full max-w-xs' />
      <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' className='input input-bordered w-full max-w-xs' />
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className='input input-bordered w-full max-w-xs' />
      <button onClick={handleSignup} className='btn btn-primary'>Sign Up</button>
    </div>
  );
}

export default Signup;