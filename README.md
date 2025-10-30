# 🌐 LearnaryHub Dashboard

Welcome to **LearnaryHub** — an advanced and professional dashboard application designed for the **Learnary** platform, an EdTech / Learning Management interface where users can explore courses, manage schedules, take notes, chat, and access an AI-powered assistant for personalized insights.

> 🧠 **Note:** The **frontend of LearnaryHub** was built with the assistance of **AI tools**, ensuring a modern, responsive, and efficient user experience.

🔗 **Live Demo:** [https://learnaryhub.onrender.com/](https://learnaryhub.onrender.com/)

---

## 📚 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Architecture](#architecture)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Environment Variables](#environment-variables)
  * [Running the App](#running-the-app)
* [Folder Structure](#folder-structure)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

---

## ✨ Features

* **Dashboard Overview** – Display key metrics such as total users, active courses, success rates, and countries reached
* **Modules**

  * 📅 *Schedule Manager* — Organize tasks, events, and learning sessions
  * 📝 *Notepad* — Create, edit, and manage notes
  * ▶️ *YouTube Feed* — Integrate educational YouTube videos and resources
  * 💬 *Live Chats* — Real-time chat and support interface
  * 🤖 *AI Assistant* — Get smart insights and guidance powered by AI
* **Quick Navigation Links** – Dashboard, Courses, Community, Certifications, Premium, Help Center
* **Subscription & Newsletter** – Stay updated with the latest learning resources
* **Responsive Design** – Fully adaptive layout for all devices

---

## 🧩 Tech Stack

> *(Update as per your exact implementation)*

**Frontend**: React (AI-assisted build) + Tailwind CSS / Bootstrap
**Backend**: Node.js + Express
**Database**: MongoDB (Mongoose ORM)
**Authentication**: JWT / OAuth
**APIs & Integrations**: YouTube API, AI Assistant API
**Deployment**: Render.com
**Other Tools**: Axios, Chart.js, Context API / Redux, dotenv

---

## 🏗 Architecture

The project follows a modern **client-server architecture**:

```
[ Browser / Frontend ]  ⇄  [ REST API Backend ]  ⇄  [ Database ]
```

* The **frontend** handles the user interface and interactions
* The **backend** serves RESTful endpoints for data operations
* The **database** stores users, course data, schedules, chat logs, and AI interactions

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* npm or yarn
* MongoDB (local or cloud instance)
* API keys for YouTube, Chat service, and AI assistant

### Installation

```bash
# Clone repository
git clone <repository-url>
cd learnaryhub

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file inside `/backend`:

```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/learnaryhub
JWT_SECRET=your_jwt_secret
YOUTUBE_API_KEY=your_youtube_key
CHAT_SERVICE_KEY=your_chat_key
AI_API_KEY=your_ai_key
```

### Running the App

```bash
# Start backend server
cd backend
npm run dev

# Start frontend app
cd ../frontend
npm start
```

Access the application at **[http://localhost:3000](http://localhost:3000)**.

---

## 📁 Folder Structure

```
learnaryhub/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── public/
└── README.md
```

---

## 💡 Usage

1. **Register or log in** to your account.
2. Explore the **Dashboard Overview** for insights and analytics.
3. Navigate through various modules:

   * Manage your **Schedule** and appointments.
   * Create notes in the **Notepad**.
   * Watch videos in the **YouTube Feed**.
   * Chat with users in **Live Chat**.
   * Get personalized responses from the **AI Assistant**.
4. Access learning materials through the **Courses** section.
5. Stay connected by subscribing to the **Newsletter**.

---

## 🤝 Contributing

We welcome contributions from the community!

**To contribute:**

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m "Add YourFeature"`
4. Push to your branch: `git push origin feature/YourFeature`
5. Open a **Pull Request**

Please ensure your code is clean, tested, and well-documented before submission.

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more details.

---

## 🙏 Acknowledgements

* Built with the help of **AI tools** for frontend design and optimization.
* Inspired by modern LMS and dashboard platforms.
* Thanks to all contributors and open-source libraries that made this project possible.

---

**🎓 LearnaryHub — Empowering Learners Worldwide.**
*Discover. Learn. Grow.*
