@echo off
echo ========================================
echo   MERN Todo - Backend Server Startup
echo ========================================
echo.
echo Checking environment...
echo.

if not exist .env (
    echo ERROR: .env file not found!
    echo Please create .env file from .env.example
    pause
    exit /b 1
)

if not exist node_modules (
    echo ERROR: node_modules not found!
    echo Please run: npm install
    pause
    exit /b 1
)

echo Starting server on port 5001...
echo MongoDB Atlas will connect automatically
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

node server.js
