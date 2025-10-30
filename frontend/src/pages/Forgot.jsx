import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance'; 
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.get(`/api/auth/forgot-password?email=${email}`);
      if (res.status === 200) {
        setEmailSubmitted(true);
        setError('');
      }
    } catch (err) {
      setError('Email not found or request failed.');
       console.log(err)
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/api/auth/reset-password', {
        email,
        password,
      });
      if (res.status === 200) {
        alert('Password reset successful!');
        navigate('/');
      }
    } catch (err) {
      setError('Password reset failed.');
      console.log(err)
    }
  };

  return (
    <div className=" max-w-md mx-auto mt-10 p-6 border rounded shadow">
      {!emailSubmitted ? (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <h2 className="text-xl font-bold text-red-500">Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Submit Email
          </button>
          {error && <p className="text-red-500 text-lg justify-center">{error}</p>}
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <h2 className="text-xl font-bold text-red-500">Set New Password</h2>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Reset Password
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Forgot;
