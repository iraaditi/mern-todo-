# ⚡ Vercel Deployment - Quick Checklist

## 🎯 Concise Roadmap

### 1️⃣ Prepare Code (5 min)
- [x] Backend `vercel.json` created ✅
- [x] CORS updated for production ✅
- [x] API services updated for env variables ✅
- [ ] Push code to GitHub

### 2️⃣ Deploy Backend (5 min)
1. Go to https://vercel.com
2. Import GitHub repo
3. Set root directory: `backend`
4. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
5. Deploy → **Copy backend URL**

### 3️⃣ Deploy Frontend (5 min)
1. Import same repo again
2. Set root directory: `frontend`
3. Framework: Create React App
4. Add environment variable:
   - `REACT_APP_API_URL=<backend-url>`
5. Deploy → **Copy frontend URL**

### 4️⃣ Update & Redeploy (3 min)
1. Go to backend project
2. Add `FRONTEND_URL=<frontend-url>`
3. Redeploy backend

### 5️⃣ MongoDB Atlas (2 min)
1. Network Access → Add IP: `0.0.0.0/0`

---

## 📦 Environment Variables

### Backend (Vercel)
```
MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true&w=majority
JWT_SECRET=mern_todo_secret_key_2024_change_in_production
NODE_ENV=production
FRONTEND_URL=<your-frontend-vercel-url>
```

### Frontend (Vercel)
```
REACT_APP_API_URL=<your-backend-vercel-url>
```

---

## ⚡ Commands

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Deploy to Vercel"
git remote add origin https://github.com/YOUR_USERNAME/mern-todo.git
git push -u origin main

# 2. Then deploy via Vercel dashboard
```

---

## ✅ Done!

**Total Time**: ~20 minutes

**See full guide**: `VERCEL_DEPLOYMENT.md`
