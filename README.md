📝 Notes App (MERN Stack)
=========================

A full-stack **Notes Application** with **User Authentication & Authorization**, built using the **MERN stack**.\
Each user can securely create, view, edit, and delete their own notes.\
The app is fully deployed with **MongoDB Atlas**, **Render**, and **Vercel**.

* * * * *

🚀 Live Demo
------------

-   **Frontend:** <https://notes-psi-ashen.vercel.app>

-   **Backend API:** <https://notes-5lte.onrender.com>

* * * * *

✨ Features
----------

-   🔐 User Authentication (Register & Login)

-   🔑 JWT-based Authorization

-   👤 Notes are **user-specific** (data isolation)

-   📝 Full CRUD operations on notes

-   🪟 Modals for:

    -   Adding notes

    -   Editing notes

    -   Viewing note content

    -   Delete confirmation

-   🔔 Popup notifications for actions

-   🎨 Styled UI with Tailwind CSS

-   🎞️ Smooth animations

-   🚪 Logout functionality

-   ☁️ Deployed on cloud (Atlas + Render + Vercel)

* * * * *

🛠️ Tech Stack
--------------

### Frontend

-   React

-   Tailwind CSS

-   Axios

-   React Router

### Backend

-   Node.js

-   Express.js

-   MongoDB + Mongoose

-   JWT (jsonwebtoken)

-   bcryptjs

### Deployment

-   MongoDB Atlas (Database)

-   Render (Backend)

-   Vercel (Frontend)

* * * * *

📂 Project Structure
--------------------

`notes-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vercel.json
│   └── package.json
│
└── README.md`

* * * * *

🔐 Authentication Flow (How it works)
-------------------------------------

1.  User registers → password is hashed using **bcrypt**

2.  User logs in → server generates a **JWT**

3.  JWT is stored in `localStorage`

4.  JWT is sent in `Authorization` header for every request

5.  Backend middleware:

    -   Verifies token

    -   Extracts `userId`

    -   Attaches it to `req`

6.  Notes are created/fetched using this `userId`

This ensures:

-   No user can access another user's notes

-   No user ID is exposed from frontend

* * * * *

⚙️ Environment Variables
------------------------

### Backend (`backend/.env`) **(DO NOT COMMIT)**

`MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5000`

Environment variables are configured directly on **Render** in production.

* * * * *

🧪 Local Development Setup
--------------------------

### 1️⃣ Clone the repo

`git clone https://github.com/Aathi06/Notes.git
cd Notes`

### 2️⃣ Backend setup

`cd backend
npm install
npm run dev`

### 3️⃣ Frontend setup

`cd frontend
npm install
npm run dev`

Backend runs on `http://localhost:5000`\
Frontend runs on `http://localhost:5173` (Vite)

* * * * *

🌐 Deployment Notes
-------------------

-   Backend deployed as a **subdirectory** (`backend/`) on Render

-   Frontend deployed as a **subdirectory** (`frontend/`) on Vercel

-   `vercel.json` rewrite is used to support client-side routing

`{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}`

* * * * *

🧠 What I Learned
-----------------

-   Implementing JWT auth end-to-end

-   Securing user-specific data

-   Structuring controllers and middleware

-   Handling SPA routing issues on deployment

-   Deploying full-stack apps with environment separation

* * * * *

📌 Future Improvements
----------------------

-   Password reset flow

-   Search & filter notes

-   Rich text editor

-   Folder / tag support

-   Rate limiting & refresh tokens

* * * * *

👤 Author
---------

**Aathi Krishnan**\
BE CSE Student\
Full-Stack & Backend Enthusiast 🚀
