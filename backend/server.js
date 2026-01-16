#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

console.log('\n🚀 Starting MERN Todo Backend Server...\n');
console.log('📋 Configuration:');
console.log(`   Port: ${process.env.PORT || 5000}`);
console.log(`   Environment: ${process.env.NODE_ENV}`);
console.log(`   MongoDB: ${process.env.MONGODB_URI ? 'Configured ✓' : 'Not configured ✗'}`);
console.log('\n');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    message: 'MERN Todo API is running',
    status: 'healthy',
    database: 'connected'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n✅ Server running on port ${PORT}`);
  console.log(`🌐 API URL: http://localhost:${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/\n`);
  console.log('Press Ctrl+C to stop\n');
});
