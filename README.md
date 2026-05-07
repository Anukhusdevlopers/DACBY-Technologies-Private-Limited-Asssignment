# MERN Hacker News Backend

This is the backend service for the MERN Hacker News Assignment.  
The application is built using Node.js, Express.js, MongoDB, and JWT Authentication.

---

# Features

- Hacker News Web Scraper
- JWT Authentication
- User Registration & Login
- Bookmark Stories
- REST API Architecture
- MongoDB Integration
- Pagination Support
- Protected Routes using Middleware
- Clean MVC Folder Structure

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Axios
- Cheerio

---

# Folder Structure

backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── scraper/
├── config/
├── server.js
└── .env

---

# API Endpoints

## Authentication

### Register User

POST /api/auth/register

### Login User

POST /api/auth/login

---

## Stories

### Get All Stories

GET /api/stories?page=1&limit=5

### Get Single Story

GET /api/stories/:id

### Toggle Bookmark

POST /api/stories/:id/bookmark

### Get Bookmarks

GET /api/stories/bookmarks

---

# Web Scraper

The application scrapes the top stories from:

https://news.ycombinator.com

Extracted fields:
- Title
- URL
- Points
- Author
- Posted Time

The scraper:
- Runs automatically on server start
- Can also be triggered manually using:
POST /api/scrape

---

# Environment Variables

Create a `.env` file inside backend folder:

PORT=5000

MONGO_URI=mongodb+srv://khushboopanday05_db_user:9grm245x9I7esC4z@cluster0.ctzkpxb.mongodb.net/mernDB?retryWrites=true&w=majority

JWT_SECRET=your_secret_key

---

# Installation

## Clone Repository

git clone [<repository-url>](https://github.com/Anukhusdevlopers/DACBY-Technologies-Private-Limited-Asssignment.git)

---

## Install Dependencies

npm install

---

## Run Server

npm run dev

---

# Pagination

Server-side pagination is implemented using:
- skip()
- limit()

Example:

GET /api/stories?page=1&limit=5

---

# Authentication

JWT-based authentication is implemented for:
- Protected bookmark routes
- Secure API access

---

 Frontend


 # MERN Hacker News Frontend

This is the frontend application for the MERN Hacker News Assignment.  
The application is built using React.js and Context API.

---

# Features

- User Authentication
- Register & Login Pages
- Hacker News Stories Listing
- Bookmark Stories
- Protected Bookmark Page
- Pagination
- React Context API State Management
- Responsive UI
- REST API Integration

---

# Tech Stack

- React.js
- React Router DOM
- Axios
- Context API

---

# Folder Structure

frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.js
│   └── index.js

---

# Pages

## Home Page
Displays:
- Story Title
- Author
- Points
- Bookmark Button
- Pagination

---

## Login Page
Allows users to:
- Login securely
- Access protected routes

---

## Register Page
Allows users to:
- Create a new account

---

## Bookmarks Page
Displays bookmarked stories for authenticated users.

---

# Context API

Two Context APIs are implemented:

## AuthContext
Handles:
- Login
- Register
- Logout
- Authentication State

## StoryContext
Handles:
- Fetch Stories
- Pagination
- Bookmark Management

---

# API Integration

Frontend communicates with backend APIs using Axios.

Example:

GET /api/stories?page=1&limit=5

---

# Installation

## Install Dependencies

npm install

---

## Run Frontend

npm start

---

# Environment Variables

Create a `.env` file inside frontend folder:

REACT_APP_API_URL=http://localhost:5000/api

---

# Pagination

Pagination is implemented with:
- Previous Button
- Next Button
- Dynamic Page Fetching

Each page displays 5 stories.

---

# Authentication

JWT token is stored in:
- localStorage

Protected routes are implemented using React Router.



# Also added  deployment 
---

# Author

Khushboo Panday