import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/register', data);
      alert('Registration successful');
    } catch {
      alert('Error registering');
    }
  };

  return (
    <div className="form-box">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
