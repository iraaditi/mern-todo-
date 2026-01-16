# MERN Todo Application

A minimalist, dark-themed To-Do List application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- 🔐 JWT-based authentication (Sign Up / Sign In)
- ✅ Create, Read, Update, Delete tasks
- ✏️ Inline task editing
- ☑️ Mark tasks as completed with strikethrough styling
- 📊 Task statistics dashboard
- 🌑 Beautiful dark mode design
- 📱 Responsive layout

## Project Structure

```
mern-todo/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Task.js            # Task schema
│   ├── routes/
│   │   ├── auth.js            # Authentication routes
│   │   └── tasks.js           # Task CRUD routes
│   ├── .env.example           # Environment variables template
│   ├── package.json
│   └── server.js              # Express server
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Auth.js        # Authentication component
    │   │   ├── Auth.module.css
    │   │   ├── Dashboard.js   # Main dashboard
    │   │   └── Dashboard.module.css
    │   ├── services/
    │   │   ├── authService.js # Auth API calls
    │   │   └── taskService.js # Task API calls
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    └── package.json
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-todo
JWT_SECRET=your_secure_secret_key_here
NODE_ENV=development
```

5. Make sure MongoDB is running locally, or update `MONGODB_URI` with your MongoDB Atlas connection string.

6. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication Routes

- **POST** `/api/auth/signup`
  - Register a new user
  - Body: `{ email, password }`
  - Returns: `{ _id, email, token }`

- **POST** `/api/auth/signin`
  - Authenticate user
  - Body: `{ email, password }`
  - Returns: `{ _id, email, token }`

### Task Routes (Protected)

All task routes require JWT token in Authorization header: `Bearer <token>`

- **GET** `/api/tasks`
  - Get all tasks for logged-in user
  - Returns: Array of tasks

- **POST** `/api/tasks`
  - Create a new task
  - Body: `{ title }`
  - Returns: Created task object

- **PUT** `/api/tasks/:id`
  - Update a task (title or completion status)
  - Body: `{ title?, isCompleted? }`
  - Returns: Updated task object

- **DELETE** `/api/tasks/:id`
  - Delete a task
  - Returns: Success message

## Usage

1. **Sign Up**: Create a new account with your email and password
2. **Sign In**: Log in with your credentials
3. **Add Tasks**: Use the input field to add new tasks
4. **Complete Tasks**: Click the checkbox to mark tasks as complete
5. **Edit Tasks**: Click the edit button (✎) to modify task text
6. **Delete Tasks**: Click the delete button (🗑) to remove tasks
7. **View Stats**: See your total, completed, and remaining tasks

## Design Philosophy

This application follows a strict **dark minimalist** design:

- **Color Scheme**: Deep grays (#121212, #1e1e1e) with white text
- **Typography**: Clean, modern sans-serif fonts
- **Animations**: Smooth transitions and hover effects
- **Layout**: Spacious, uncluttered interface
- **Interactions**: Intuitive and responsive

## Technologies Used

### Backend
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

### Frontend
- **React**: UI library
- **Axios**: HTTP client
- **CSS Modules**: Scoped styling

## Security Features

- Passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- Protected API routes
- Input validation and sanitization
- CORS configuration

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm start  # Hot reload enabled
```

## Production Build

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

## License

ISC

## Author

Your Name

---

**Enjoy your minimalist task management experience!** ✓