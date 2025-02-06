import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Function to validate inputs
  const validate = () => {
    let isValid = true;
    let newErrors = { email: '', password: '' };

    // Email Validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email address.';
      isValid = false;
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Login successful!'); // You can replace this with your authentication logic
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-yellow-100">
      <div className="flex flex-col items-center w-[400px] p-6 bg-yellow-600 rounded-lg shadow-lg">
        {/* Logo */}
        <img 
          src="http://localhost:5173/audioImage.png" 
          alt="logo" 
          className="w-[180px] h-[100px] mb-4"
        />

        <form onSubmit={handleSubmit} className="w-full">
          {/* Email Input */}
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] my-2 rounded-md bg-yellow-200 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.email && <p className="text-sm text-black-700">{errors.email}</p>}

          {/* Password Input */}
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[50px] my-2 rounded-md bg-yellow-200 p-3 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {errors.password && <p className="text-sm text-black-700">{errors.password}</p>}

          {/* Login Button */}
          <button 
            type="submit"
            className="w-full h-[50px] my-4 rounded-md bg-yellow-500 text-white text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div>
          <span className="text-lg font-semibold text-white">Don't have an account?</span>
          <Link to="/register" className="ml-2 text-lg font-semibold text-white hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
