# 🚀 Vercel Deployment Guide - MERN Todo App

## 📋 Prerequisites
- ✅ MongoDB Atlas (already configured)
- ✅ GitHub account
- ✅ Vercel account (free tier works)

---

## 🎯 Deployment Strategy

**Frontend**: Vercel (React app)
**Backend**: Vercel Serverless Functions
**Database**: MongoDB Atlas ✅ (already connected)

---

## 📦 Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - MERN Todo App"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/mern-todo.git
git branch -M main
git push -u origin main
```

---

## 🔧 Step 2: Deploy Backend to Vercel

### 2.1: Go to Vercel Dashboard
1. Visit https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `mern-todo` repository

### 2.2: Configure Backend Deployment
1. **Root Directory**: Set to `backend`
2. **Framework Preset**: Other
3. **Build Command**: Leave empty
4. **Output Directory**: Leave empty

### 2.3: Add Environment Variables
Click "Environment Variables" and add:

```
MONGODB_URI = mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true&w=majority
JWT_SECRET = mern_todo_secret_key_2024_change_in_production
NODE_ENV = production
FRONTEND_URL = (leave empty for now, will add after frontend deployment)
```

### 2.4: Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. **Copy your backend URL** (e.g., `https://mern-todo-backend.vercel.app`)

---

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1: Create New Project
1. In Vercel dashboard, click "Add New" → "Project"
2. Import the **same repository** again
3. This time configure for frontend

### 3.2: Configure Frontend Deployment
1. **Root Directory**: Set to `frontend`
2. **Framework Preset**: Create React App
3. **Build Command**: `npm run build`
4. **Output Directory**: `build`

### 3.3: Add Environment Variables
Click "Environment Variables" and add:

```
REACT_APP_API_URL = https://your-backend-url.vercel.app
```
(Replace with your actual backend URL from Step 2.4)

### 3.4: Deploy
1. Click "Deploy"
2. Wait for deployment
3. **Copy your frontend URL** (e.g., `https://mern-todo-app.vercel.app`)

---

## 🔄 Step 4: Update Backend CORS

### 4.1: Go back to Backend Project
1. In Vercel, open your backend project
2. Go to "Settings" → "Environment Variables"
3. Add/Update:

```
FRONTEND_URL = https://your-frontend-url.vercel.app
```
(Replace with your actual frontend URL from Step 3.4)

### 4.2: Redeploy Backend
1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"

---

## ✅ Step 5: Test Your Deployed App

1. Open your frontend URL: `https://your-app.vercel.app`
2. Sign up with a new account
3. Add some tasks
4. Verify everything works!

---

## 📝 Quick Reference

### Backend Vercel Settings
```json
{
  "rootDirectory": "backend",
  "framework": "Other",
  "buildCommand": "",
  "outputDirectory": ""
}
```

### Frontend Vercel Settings
```json
{
  "rootDirectory": "frontend",
  "framework": "Create React App",
  "buildCommand": "npm run build",
  "outputDirectory": "build"
}
```

---

## 🔧 Environment Variables Summary

### Backend (.env on Vercel)
```
MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true&w=majority
JWT_SECRET=mern_todo_secret_key_2024_change_in_production
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Frontend (.env on Vercel)
```
REACT_APP_API_URL=https://your-backend-url.vercel.app
```

---

## 🚨 Common Issues & Fixes

### Issue: CORS Error
**Fix**: Make sure `FRONTEND_URL` is set in backend environment variables and redeploy

### Issue: 404 on API Routes
**Fix**: Check `vercel.json` exists in backend folder

### Issue: MongoDB Connection Failed
**Fix**: 
1. Go to MongoDB Atlas
2. Network Access → Add IP `0.0.0.0/0` (allow all)
3. Redeploy backend

### Issue: Build Failed
**Fix**: Make sure root directory is set correctly (backend or frontend)

---

## 🎉 Success Checklist

- [ ] Backend deployed to Vercel
- [ ] Frontend deployed to Vercel
- [ ] Environment variables configured
- [ ] CORS updated with frontend URL
- [ ] MongoDB Atlas allows all IPs
- [ ] Can sign up on production
- [ ] Can add/edit/delete tasks
- [ ] Data persists in MongoDB

---

## 📱 Your Live URLs

After deployment, you'll have:

- **Frontend**: `https://your-app.vercel.app`
- **Backend API**: `https://your-backend.vercel.app`
- **Database**: MongoDB Atlas (cloud)

---

## 🔄 Future Updates

To update your app:

```bash
# Make changes locally
git add .
git commit -m "Your update message"
git push

# Vercel auto-deploys on push!
```

---

## 💡 Pro Tips

1. **Custom Domain**: Add your own domain in Vercel project settings
2. **Analytics**: Enable Vercel Analytics for free
3. **Logs**: Check deployment logs if something fails
4. **Preview**: Every branch gets a preview URL

---

**Ready to deploy? Follow the steps above!** 🚀

**Estimated Time**: 15-20 minutes
