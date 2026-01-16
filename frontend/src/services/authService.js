import axios from 'axios';

// Remove trailing slash from API URL if present
const baseURL = process.env.REACT_APP_API_URL?.replace(/\/$/, '') || '';
const API_URL = baseURL ? `${baseURL}/api/auth` : '/api/auth';

// Register user
const signup = async (email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { email, password });
  
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Login user
const signin = async (email, password) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
  
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

// Get current user
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const authService = {
  signup,
  signin,
  logout,
  getCurrentUser
};

export default authService;
