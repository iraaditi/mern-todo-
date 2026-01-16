# MongoDB Connection Verification Guide

## Your MongoDB Atlas Configuration

**Connection String:**
```
mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo
```

**Status:** ✅ Connection string is properly configured in `.env` file

---

## How to Verify MongoDB Connection

### Option 1: Run the Test Script (Recommended)

Open a terminal in the `backend` folder and run:

```bash
node test-connection.js
```

**Expected Output if Connected:**
```
🔍 Testing MongoDB Atlas Connection...
📍 MongoDB URI: mongodb+srv://db_User_admin:****@cluster0.knexdqm.mongodb.net/mern-todo

✅ SUCCESS! MongoDB Atlas Connected!
📊 Database: mern-todo
🌐 Host: cluster0-shard-00-00.knexdqm.mongodb.net

🎉 Your MongoDB connection is working perfectly!
```

**If Connection Fails:**
```
❌ ERROR: MongoDB Connection Failed!
📝 Error Message: [error details]

💡 Common fixes:
   1. Check your MongoDB Atlas username and password
   2. Ensure your IP address is whitelisted in Atlas
   3. Verify the cluster URL is correct
   4. Check if the database user has proper permissions
```

---

### Option 2: Start the Backend Server

```bash
cd backend
npm start
```

or

```bash
npm run dev
```

**Expected Output if Connected:**
```
🚀 Starting MERN Todo Backend Server...

📋 Configuration:
   Port: 5001
   Environment: development
   MongoDB: Configured ✓

✅ MongoDB Connected: cluster0-shard-00-00.knexdqm.mongodb.net
📊 Database: mern-todo

✅ Server running on port 5001
🌐 API URL: http://localhost:5001
📡 Health check: http://localhost:5001/
```

---

## Troubleshooting

### Issue: Port 5000 Already in Use

**Solution:** The `.env` file has been updated to use port **5001** instead.

If you still get port errors, you can:
1. Kill the process using the port
2. Or change the PORT in `.env` to another number (e.g., 5002, 5003)

### Issue: MongoDB Connection Timeout

**Possible Causes:**
1. **IP Not Whitelisted** - Go to MongoDB Atlas → Network Access → Add your IP (or use 0.0.0.0/0 for testing)
2. **Firewall Blocking** - Check your firewall settings
3. **Wrong Credentials** - Verify username and password

### Issue: Authentication Failed

**Solution:**
1. Go to MongoDB Atlas Dashboard
2. Database Access → Check user `db_User_admin` exists
3. Verify the password is `naman283030`
4. Ensure user has "Read and write to any database" permissions

---

## MongoDB Atlas Checklist

✅ **Database User Created**
   - Username: `db_User_admin`
   - Password: `naman283030`
   - Role: Atlas Admin or Read/Write

✅ **Network Access Configured**
   - Your IP address is whitelisted
   - OR `0.0.0.0/0` is added (allows access from anywhere - for development only)

✅ **Cluster is Running**
   - Cluster name: `Cluster0`
   - Region: Available and running

---

## Quick Test Commands

```bash
# Test 1: Check if .env file exists and is configured
cd backend
type .env

# Test 2: Test MongoDB connection
node test-connection.js

# Test 3: Start the server
npm run dev

# Test 4: Check if server is responding (in another terminal)
curl http://localhost:5001
```

---

## Current Configuration Summary

| Setting | Value |
|---------|-------|
| **Port** | 5001 (changed from 5000 to avoid conflict) |
| **Database** | mern-todo |
| **Cluster** | cluster0.knexdqm.mongodb.net |
| **User** | db_User_admin |
| **Connection** | MongoDB Atlas (Cloud) |

---

## Next Steps

1. ✅ MongoDB URI is configured
2. ✅ Deprecated connection options removed
3. ✅ Port changed to 5001
4. ⏳ **Run `node test-connection.js` to verify connection**
5. ⏳ **Start backend server with `npm run dev`**
6. ⏳ **Start frontend with `npm start` in frontend folder**

---

**Note:** Make sure MongoDB Atlas Network Access allows your IP address!
