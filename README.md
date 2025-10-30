# 🌐 LearnaryHub Dashboard

Welcome to **LearnaryHub** — a next-generation **AI-powered EdTech Dashboard Application** that merges **learning management, automation, and intelligent support** into one seamless platform.

> 🧠 **Note:** The **frontend of LearnaryHub** was built with the assistance of **AI tools**, ensuring a sleek, responsive, and scalable design optimized for learning environments.

🔗 **Live Demo:** [https://learnaryhub.onrender.com/](https://learnaryhub.onrender.com/)

---

## 📚 Table of Contents

* [Features](#features)
* [Project Structure](#project-structure)
* [Tech Stack](#tech-stack)
* [Architecture Overview](#architecture-overview)
* [Getting Started](#getting-started)

  * [Installation](#installation)
  * [Environment Variables](#environment-variables)
  * [Running the App](#running-the-app)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## ✨ Features

### 🔹 Core Platform

* **Dynamic Dashboard** — Displays analytics such as users, course statistics, and engagement metrics.
* **AI Assistant** — Intelligent, conversational helper for personalized recommendations and content insights.
* **Schedule Manager** — Organize lessons, meetings, and reminders.
* **YouTube Feed Integration** — Curated educational content powered by YouTube API.
* **Real-Time Live Chat** — Connect instantly with other learners or support agents.

### 🤖 Telegram Integration

* **User Support Bot** — Telegram bot automatically handles FAQs, ticketing, and instant user support.
* **Cloud File Management** — Upload and retrieve resources securely through Telegram cloud APIs.
* **Smart Notifications** — Telegram notifications for new courses, updates, and important reminders.
* **Admin Alerts** — Instant admin alerts for user feedback, error reports, or data events.

### 🧰 Tools & Utilities

* 📝 **Notepad** — Create, save, and manage quick notes.
* 📄 **PDF Viewer** — Display and annotate documents within the app.
* ☁️ **Cloud Sync** — Manage course materials across Telegram cloud storage.

### ⚙️ Other Sections

* **Policies Pages** — Accessibility, Privacy, Cookies, and Terms of Service.
* **Support Section** — Contact forms, feedback, and help-center integration.
* **Responsive Design** — Optimized for all screen sizes and devices.

---

## 🧩 Project Structure

```
LearnaryHub/
│
├── Admin/
│   └── admin.js
│
├── Features/
│   ├── aimodel.js
│   ├── cloud.js
│   ├── features.js
│   ├── livechat.js
│   ├── method.js
│   ├── schedule.js
│   ├── stream.js
│   └── ytfeed.js
│
├── Policies/
│   ├── about-us.html
│   ├── accessibility-statement.html
│   ├── careers.html
│   ├── cookie-policy.html
│   ├── polices.js
│   ├── privacy-policy.html
│   └── terms-of-service.html
│
├── Support/
│   ├── contact.html
│   ├── feedback.html
│   ├── help-center.html
│   └── support.js
│
├── Tools/
│   ├── notepad.js
│   ├── pdfviewer.js
│   └── tools.js
│
├── .env
├── .gitignore
├── IMG_20251007_180809.jpg
├── README.md
├── call.js
├── courses.js
├── index.html
├── index.js
├── logo.jpg
└── package.json
```

🗂 **Highlights:**

* `Features/` → Core modules (AI, Telegram integration, YouTube feed, schedule manager)
* `Support/` → Contact, feedback, and help pages integrated with Telegram Bot support
* `Tools/` → Notepad, PDF viewer, and other utilities
* `Policies/` → All legal and accessibility documents

---

## ⚙️ Tech Stack

| Layer                         | Technology                              |
| ----------------------------- | --------------------------------------- |
| **Frontend**                  | HTML, CSS, JavaScript *(AI-assisted)*   |
| **Backend**                   | Node.js (Express.js)                    |
| **Database**                  | MongoDB / Telegram Cloud                |
| **AI Integration**            | Custom AI Model (`Features/aimodel.js`) |
| **Messaging / Notifications** | Telegram Bot API                        |
| **Deployment**                | Render.com                              |
| **Libraries / Tools**         | Axios, dotenv, Chart.js, localStorage   |

---

## 🏗 Architecture Overview

```
[ Frontend (AI-built) ] 
        ↓
[ Node.js Backend + Telegram API ]
        ↓
[ MongoDB / Telegram Cloud Storage ]
```

* **Frontend:** Handles user interactions, dashboards, and visual rendering.
* **Backend:** Manages APIs, Telegram bot integration, and AI queries.
* **Telegram:** Powers notifications, file storage, and live user support.
* **Database:** Stores user data, logs, and AI interaction history.

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd LearnaryHub

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/learnaryhub
AI_API_KEY=your_ai_key
YOUTUBE_API_KEY=your_youtube_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_admin_chat_id
```

### Running the App

```bash
npm start
```

Visit **[http://localhost:5000](http://localhost:5000)** in your browser.

---

## 💡 Usage

1. **Access the dashboard** to view your learning data and insights.
2. **Use Telegram Bot** for support, cloud storage access, and instant alerts.
3. **Explore modules:** Schedule Manager, Notes, YouTube Feed, and AI Assistant.
4. **Stay informed** with Telegram push notifications and updates.

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork this repository
git checkout -b feature/YourFeature
# Make changes
git commit -m "Add YourFeature"
git push origin feature/YourFeature
# Open a Pull Request
```

Please test and document your contributions before submitting.

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more information.

---

## 📬 Contact

📧 **For Code Access or Collaboration Inquiries:**
**Email:** [shivamnox@gmail.com](mailto:shivamnox@gmail.com)
🌐 **Portfolio:** [https://shivamnox.github.io/#contact](https://shivamnox.github.io/#contact)

---

## 🙏 Acknowledgements

* Frontend design crafted with **AI assistance**
* Telegram integration for real-time support and automation
* Inspired by modern LMS and intelligent dashboards
* Supported by open-source libraries and APIs

---

**🎓 LearnaryHub — Empowering Learners with AI and Automation.**
*Learn smarter. Connect faster. Grow continuously.* 🚀
