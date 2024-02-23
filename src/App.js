import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSingup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect to protected route)
        alert('signup successful')
        return 
      } else {
        // Handle login error (e.g., display error message)
        alert('invalid data')
      }
    } catch (error) {
      console.error('Singup error:', error);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect to protected route)
        alert('login successful')
      } else {
        // Handle login error (e.g., display error message)
        alert('invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-500">
      <div className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-around">
            <button onClick={handleLogin}
              type="submit"
              className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <button onClick={handleSingup}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <a href="#" className="my-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
