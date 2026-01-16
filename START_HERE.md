# 🚀 MERN Todo - Quick Start Guide

## ✅ MongoDB Status: CONNECTED!

Your MongoDB Atlas connection is working perfectly:
- Database: `mern-todo`
- Host: `ac-xuypy8n-shard-00-02.knexdqm.mongodb.net`
- Status: ✅ Connected

---

## 🎯 How to Run the Application

### Step 1: Start Backend Server

Open a terminal and run:

```bash
cd backend
npm run dev
```

**Expected Output:**
```
🚀 Starting MERN Todo Backend Server...

📋 Configuration:
   Port: 5002
   Environment: development
   MongoDB: Configured ✓

✅ MongoDB Connected: ac-xuypy8n-shard-00-02.knexdqm.mongodb.net
📊 Database: mern-todo

✅ Server running on port 5002
🌐 API URL: http://localhost:5002
📡 Health check: http://localhost:5002/
```

**Leave this terminal running!**

---

### Step 2: Start Frontend (New Terminal)

Open a **NEW** terminal and run:

```bash
cd frontend
npm start
```

The React app will automatically open in your browser at:
**http://localhost:3000**

---

## 📝 Configuration Summary

| Component | Port | Status |
|-----------|------|--------|
| **Backend API** | 5002 | ✅ Ready |
| **Frontend** | 3000 | ✅ Ready |
| **MongoDB** | Atlas Cloud | ✅ Connected |

---

## 🎨 Using the Application

1. **Sign Up**
   - Open http://localhost:3000
   - Click "Sign Up" tab
   - Enter email and password (min 6 characters)
   - Click "Sign Up"

2. **Add Tasks**
   - Type task in the input field
   - Click "Add" button

3. **Manage Tasks**
   - ☑️ **Complete**: Click checkbox (adds strikethrough)
   - ✎ **Edit**: Click edit icon, modify text, press Enter
   - 🗑️ **Delete**: Click trash icon

4. **View Stats**
   - See total, completed, and remaining tasks at the top

---

## 🔧 Troubleshooting

### Backend won't start - Port in use

If you see "EADDRINUSE" error:

```bash
# Kill all node processes
taskkill /F /IM node.exe

# Then restart backend
cd backend
npm run dev
```

### Frontend dependency errors

```bash
cd frontend
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm start
```

### MongoDB connection issues

Test the connection:
```bash
cd backend
node test-connection.js
```

---

## 📁 Project Ports

- **Backend**: http://localhost:5002
- **Frontend**: http://localhost:3000
- **API Endpoints**: http://localhost:5002/api/...

---

## 🎉 You're All Set!

Your MERN Todo application is ready to use with:
- ✅ MongoDB Atlas connected
- ✅ JWT authentication
- ✅ Dark minimalist design
- ✅ Full CRUD operations

**Enjoy your todo app!** 🚀
