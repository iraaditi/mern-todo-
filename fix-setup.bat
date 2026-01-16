@echo off
echo ========================================
echo   MERN Todo - Complete Setup Fix
echo ========================================
echo.

echo Step 1: Fixing Backend .env file...
cd backend
(
echo PORT=5002
echo MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true^&w=majority
echo JWT_SECRET=mern_todo_secret_key_2024_change_in_production
echo NODE_ENV=development
) > .env
echo ✓ Backend .env updated to port 5002
echo.

echo Step 2: Killing any running Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo ✓ Node processes cleared
echo.

cd ..

echo Step 3: Reinstalling Frontend dependencies...
cd frontend
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Installing with --legacy-peer-deps...
call npm install --legacy-peer-deps
echo ✓ Frontend dependencies installed
echo.

cd ..

echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Open Terminal 1: cd backend ^&^& npm run dev
echo 2. Open Terminal 2: cd frontend ^&^& npm start
echo.
echo Backend will run on: http://localhost:5002
echo Frontend will run on: http://localhost:3000
echo.
pause
