import axios from 'axios';

// Remove trailing slash from API URL if present
const baseURL = process.env.REACT_APP_API_URL?.replace(/\/$/, '') || '';
const API_URL = baseURL ? `${baseURL}/api/tasks` : '/api/tasks';

// Get auth header
const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  
  return {};
};

// Get all tasks
const getTasks = async () => {
  const response = await axios.get(API_URL, {
    headers: getAuthHeader()
  });
  
  return response.data;
};

// Create task
const createTask = async (title) => {
  const response = await axios.post(API_URL, { title }, {
    headers: getAuthHeader()
  });
  
  return response.data;
};

// Update task
const updateTask = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data, {
    headers: getAuthHeader()
  });
  
  return response.data;
};

// Delete task
const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: getAuthHeader()
  });
  
  return response.data;
};

const taskService = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
};

export default taskService;
