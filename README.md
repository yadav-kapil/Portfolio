# Portfolio

## Project Overview
This is a full-stack developer portfolio built using the MERN stack.  
It showcases my projects, skills, and provides visitors with the ability to contact me or subscribe for updates through integrated backend APIs.

The frontend is built with React and deployed on Vercel, while the backend API runs on Render with MongoDB Atlas as the database.

---

## Features
- Modern responsive UI
- Smooth animations using Framer Motion
- Contact form with backend integration
- Newsletter subscription system
- Toast notifications for user feedback
- Dark mode support
- Fully responsive design

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Toastify
- Lottie Animations

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- CORS

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## Project Structure

```
Portfolio
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   │   └── db.js
│   │
│   ├── models
│   │   ├── ContactForm.js
│   │   └── Subscribers.js
│   │
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yadav-kapil/Portfolio.git
cd Portfolio
```

---

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

Run backend server

```bash
npm run dev
```

Backend will run on

```
http://localhost:3001
```

---

### 3. Install Frontend Dependencies

Open a new terminal

```bash
cd client
npm install
```

Run frontend

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

---

## Environment Variables

### Backend (.env)

Create a `.env` file inside the **server** folder.

```
MONGO_URI=your_mongodb_connection_string
PORT=3001
FRONTEND_ORIGIN=http://localhost:5173
```

---

### Frontend (.env)

Create a `.env` file inside the **client** folder.

```
VITE_SERVER_URI=http://localhost:3001
```


---

## Contact Information

For inquiries, please reach out:

Email  
```
ky843622@gmail.com
```

LinkedIn  
```
https://www.linkedin.com/in/kapilyadav9560/
```

GitHub  
```
https://github.com/yadav-kapil
```

---

## License

MIT License