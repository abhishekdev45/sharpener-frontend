// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginImage from '../assets/image'; // Import your SVG or image component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        // Redirect to profile completion page if profile is incomplete
        const profileComplete = false; // Replace with actual profile check
        if (!profileComplete) {
          navigate('/complete-profile');
        } else {
          navigate('/home'); // Redirect to the main app/dashboard
        }
      } else {
        toast.error("Please verify your email before logging in.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer />
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
            <LoginImage /> {/* Your SVG or image component */}
        </div>
      </div>
      {/* Login Form */}
      <div className="flex items-center justify-center flex-1 bg-gray-200">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
