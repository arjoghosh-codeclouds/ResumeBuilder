import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './Inputs';
import { validateEmail } from '../utils/helper';
import { UserContext } from '../context/userContext';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { authStyles as styles } from '../assets/dummystyle';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter the password');
      return;
    }
    setError('');
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.title}>Welcome Back</h3>
        <p className='${styles.subtitle} text-grey-800 font-semibold'>Sign in to show your human side</p>
      </div>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="example@gmail.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 characters"
          type="password"
        />
        {error && <div className={styles.errorMessage}>{error}</div>}
        <button type="submit" className="w-full py-4 bg-red-500 text-white font-black rounded-xl   hover:bg-red-700  text-lg leading-6 cursor-pointer">
          Sign In
        </button>
        <p className={styles.switchText}>
          Don't have an account?{' '}
          <button type="button" className="font-black text-red-600 hover:text-red-500 transition-colors" onClick={() => setCurrentPage('signup')}>
            Sign Up
          </button>
        </p>
      </form>
      <div className='flex flex-wrap'>
      <h4 className="text-sm justify-items-end-safe text-blue-600 font-bold mx-auto md:justify-between  cursor-pointer" onClick={()=>
        {
          navigate('/forgot')
      }
      }> Forgot password</h4>
      </div>
      
    </div>
    
  );
};

export default Login;
