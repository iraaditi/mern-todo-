# Quick Setup Guide

## Step 1: Install Dependencies

### Option A: Install All at Once (Recommended)
```bash
npm run install-all
```

### Option B: Install Separately
```bash
# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

## Step 2: Configure Backend

1. Navigate to the `backend` folder
2. Copy `.env.example` to `.env`:
   ```bash
   cd backend
   copy .env.example .env
   ```
3. Edit `.env` file and update the following:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string (change in production!)
   - `PORT`: Backend server port (default: 5000)

## Step 3: Start MongoDB

Make sure MongoDB is running:

### Local MongoDB
```bash
mongod
```

### MongoDB Atlas
Update `MONGODB_URI` in `.env` with your Atlas connection string.

## Step 4: Run the Application

You need to run both backend and frontend in **separate terminals**:

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Server will run on http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
App will open on http://localhost:3000

## Step 5: Use the Application

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" to create a new account
3. Enter your email and password (minimum 6 characters)
4. Start adding tasks!

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your `MONGODB_URI` in `.env`
- For Atlas, ensure your IP is whitelisted

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Set `PORT=3001` before running `npm start`

### CORS Errors
- Make sure backend is running on port 5000
- Check `proxy` setting in `frontend/package.json`

### Module Not Found
- Run `npm install` in both backend and frontend directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## Default Test Credentials

You can create any account you want. For testing:
- Email: test@example.com
- Password: test123

## Features to Try

✅ Create tasks
✅ Mark tasks as complete (checkbox)
✅ Edit task text (click edit icon)
✅ Delete tasks (click trash icon)
✅ View statistics (total, completed, remaining)
✅ Logout and login again

Enjoy your minimalist todo app! 🎉
