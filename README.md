# Thinkly - Full Stack Blog App

A minimalist blog app built with React, Express, and SQL Server.

## 🛠 Tech Stack

- Frontend: React.js (Vite)
- Backend: Node.js, Express.js
- Database: SQL Server
- Styling: Tailwind CSS (optional)

## 📁 Folder Structure

```
blog-app/
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── index.js
├── frontend/
└── README.md
```

## 🚀 Features

- User Registration & Login
- Create, Read, Update, Delete Posts
- Protected Routes for Authenticated Users
- Responsive UI

## 📦 Setup Instructions

### 1. Backend

```
cd backend
npm install
npm install express cors mssql dotenv
npm install --save-dev nodemon
```

Create `.env` in `backend/`:

```
PORT=5000
DB_USER=your_username
DB_PASS=your_password
DB_NAME=BlogApp
```

Run backend:

```bash
npx nodemon index.js
```

### 2. Frontend

```
cd frontend
npm install
npm run dev
```

## ✅ Status

Currently in development – up to route planning and environment setup.

## 👤 Author

Faraaz Khan
