# 🔧 QUICK FIX GUIDE

## Issue 1: Backend Port Conflict (Port 5001 already in use)

### Fix Steps:

**Step 1: Kill all Node processes**
```bash
taskkill /F /IM node.exe
```

**Step 2: Update .env file manually**

Open `backend\.env` file and make sure it contains:
```
PORT=5002
MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true&w=majority
JWT_SECRET=mern_todo_secret_key_2024_change_in_production
NODE_ENV=development
```

**Step 3: Start backend**
```bash
cd backend
npm run dev
```

---

## Issue 2: Frontend ajv Module Error

### Fix Steps:

**Step 1: Delete node_modules and package-lock.json**
```bash
cd frontend
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
```

**Step 2: Reinstall with legacy peer deps**
```bash
npm install --legacy-peer-deps
```

**Step 3: Start frontend**
```bash
npm start
```

---

## ✅ Complete Manual Fix (Copy & Paste)

### Terminal 1 - Fix Backend:
```bash
# Kill node processes
taskkill /F /IM node.exe

# Go to backend
cd c:\projects\mern-todo-\backend

# Create/update .env file
echo PORT=5002 > .env
echo MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true^&w=majority >> .env
echo JWT_SECRET=mern_todo_secret_key_2024_change_in_production >> .env
echo NODE_ENV=development >> .env

# Start backend
npm run dev
```

### Terminal 2 - Fix Frontend:
```bash
# Go to frontend
cd c:\projects\mern-todo-\frontend

# Remove old dependencies
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Reinstall
npm install --legacy-peer-deps

# Start frontend
npm start
```

---

## 🎯 Expected Results:

### Backend Terminal:
```
🚀 Starting MERN Todo Backend Server...

📋 Configuration:
   Port: 5002
   Environment: development
   MongoDB: Configured ✓

✅ MongoDB Connected: ac-xuypy8n-shard-00-02.knexdqm.mongodb.net
📊 Database: mern-todo

✅ Server running on port 5002
```

### Frontend Terminal:
```
Compiled successfully!

You can now view mern-todo-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

---

## 🚨 If Still Having Issues:

### Backend won't start:
1. Check if `.env` file exists in `backend` folder
2. Verify port 5002 is not in use: `netstat -ano | findstr :5002`
3. Try a different port (5003, 5004, etc.) in `.env`

### Frontend won't start:
1. Make sure you used `--legacy-peer-deps` flag
2. Try: `npm cache clean --force` then reinstall
3. Check Node version: `node --version` (should be 14+ for React 18)

---

## 📞 Quick Test:

After both are running, test the API:
```bash
curl http://localhost:5002
```

Should return:
```json
{
  "message": "MERN Todo API is running",
  "status": "healthy",
  "database": "connected"
}
```

---

**Good luck! Your MongoDB is already connected, just need to fix these startup issues.** ✨
