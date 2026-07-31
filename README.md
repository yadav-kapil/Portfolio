# <div align="center">✨ MERN Stack Developer Portfolio ✨</div>

<p align="center">
  <strong>A premium, modern, and highly interactive portfolio featuring an intelligent AI-powered chatbot assistant.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind Badge" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express Badge" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75C2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini Badge" />
</p>

---

## 📖 Project Overview

This is a full-stack developer portfolio built using the **MERN (MongoDB, Express, React, Node)** stack. It showcases projects, details technical capabilities, and integrates a state-of-the-art **AI Chatbot Assistant** powered by Google Gemini. The chatbot allows visitors to interact with the profile, ask questions about skills and experience, and receive context-aware responses in real-time.

- **Frontend:** Built with React 19, Tailwind CSS v4, and Vite. Styled with smooth glassmorphism, responsive components, and custom hardware-accelerated animations using Framer Motion (Motion v12).
- **Backend:** A secure Node/Express API with rate limiting, request validation, and CORS policies, integrated with Gemini AI.
- **Database:** MongoDB Atlas instance for persistent contact forms and newsletter subscriber tracking.

---

## 🚀 Key Features

> [!NOTE]
> Designed to provide a flawless, premium user experience with rich aesthetics, seamless responsiveness, and interactive micro-animations.

* **🤖 AI Chatbot Assistant** — Live chatbot powered by Google Gemini to answer visitor questions dynamically.
* **🎨 Modern Glassmorphism UI** — High-end styling featuring vibrant gradients, dark mode support, and clean typography.
* **⚡ Fluid Micro-Animations** — Smooth scroll effects, transitions, and hover interactions driven by Framer Motion.
* **✉️ Contact Form Integration** — Secure backend API endpoint with validation, rate-limiting, and direct database storage.
* **📰 Newsletter Subscription** — Built-in newsletter registration form for subscribers to stay updated.
* **🔔 Toast Notifications** — Instant confirmation alerts via React Toastify for form submissions and subscriptions.
* **🌓 Dynamic Theme Support** — Easily toggles between premium dark and light modes, automatically detecting system preferences.

---

<details>
  <summary><strong>🛠️ Click to Expand Tech Stack & Skills</strong></summary>
  <br />

  ### 💻 Technology Breakdown

  | Component | Technologies & Tools |
  | :--- | :--- |
  | **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![Motion](https://img.shields.io/badge/Motion-black?style=flat-square&logo=framer&logoColor=white) ![Lottie](https://img.shields.io/badge/Lottie-00D2FF?style=flat-square&logo=lottiefiles&logoColor=white) |
  | **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![Google Gemini API](https://img.shields.io/badge/Gemini_AI-8E75C2?style=flat-square&logo=googlegemini&logoColor=white) |
  | **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) |
  | **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white) ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) |

  ### Key Client Libraries
  * `@lottiefiles/react-lottie-player` (Vector animation renderings)
  * `motion` (Framer Motion v12 animation library)
  * `react-router` (Unified app routing)
  * `react-toastify` (Rich alert notifications)
  * `react-icons` (Icon framework)

  ### Key Server Packages
  * `@google/genai` (Official Google Gemini API)
  * `express-rate-limit` (DDoS and abuse prevention)
  * `express-validator` (Sanitization and schema enforcement)
  * `dotenv` (Secure environment variables)
  * `cors` (Cross-origin configuration)

</details>

---

## 📂 Project Structure

```directory
Portfolio/
├── client/                  # React Frontend Application
│   ├── src/
│   │   ├── components/      # Modular layout parts (Hero, About, Chat, Skills, Projects)
│   │   ├── assets/          # Lottie animations and media files
│   │   ├── store/           # Global context stores (Theme, states)
│   │   └── App.jsx          # Main application page router
│   └── package.json
└── server/                  # Express Backend Service
    ├── config/              # Database connection setups
    ├── models/              # Mongoose DB schema definitions
    ├── index.js             # API entrypoint, routes, and AI handling
    └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yadav-kapil/Portfolio.git
cd Portfolio
```

### 2. Configure Environment Variables

#### Backend (`/server/.env`)
Create a `.env` file inside the `server/` directory:
```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3001
FRONTEND_ORIGIN=http://localhost:5173
GEMINI_API_KEY=your_google_gemini_api_key
```

#### Frontend (`/client/.env`)
Create a `.env` file inside the `client/` directory:
```env
VITE_SERVER_URI=http://localhost:3001
```

### 3. Run Backend Server

```bash
cd server
npm install
npm run dev
```
The server will boot on `http://localhost:3001`.

### 4. Run Frontend Development

Open a separate terminal shell:
```bash
cd client
npm install
npm run dev
```
The client app will launch at `http://localhost:5173`.

---

## ✉️ Contact Information

For collaboration or inquiries, feel free to reach out:

* **Email:** [ky843622@gmail.com](mailto:ky843622@gmail.com)
* **LinkedIn:** [Kapil Yadav](https://www.linkedin.com/in/kapilyadav9560/)
* **GitHub:** [yadav-kapil](https://github.com/yadav-kapil)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.