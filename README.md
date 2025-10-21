
# LearnaryHub Dashboard

Welcome to **LearnaryHub** — a professional dashboard application built for the Learnary platform: an EdTech‑/learning‑management interface where users can explore courses, manage schedules/notes, use a YouTube feed, chat, AI assistant, and more.

Live demo: [https://learnaryhub.onrender.com/](https://learnaryhub.onrender.com/)

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech‑stack)  
- [Architecture](#architecture)  
- [Getting Started](#getting‑started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment‑variables)  
  - [Running the App](#running‑the‑app)  
- [Folder Structure](#folder‑structure)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Dashboard overview: total users, courses, success rate, countries reached  
- Modules including:  
  - Schedule Manager — organise tasks/appointments  
  - Notepad — take notes & manage data  
  - YouTube Feed — access YouTube‑based content  
  - Live Chats — real‑time customer support style chat  
  - AI Assistant — leverage AI insights for learning/business decisions  
- Quick links: Dashboard, Courses, Community, Certifications, Premium, Help Center  
- Subscription & newsletter feature  
- Responsive and modern UI/UX  

---

## Tech Stack

> Adapt the list below to your actual stack.

- Frontend: React (or Vue / Angular)  
- Backend: Node.js + Express (or another framework)  
- Database: MongoDB (or PostgreSQL / MySQL)  
- Authentication: JWT / OAuth  
- Deployment: Render (on render.com)  
- Other libraries & tools: (e.g., Chart.js, Tailwind CSS / Bootstrap, Axios, etc.)

---

## Architecture

The application follows a standard client‑server model:

```

[ Browser / Frontend ] ⟷ [ REST API Backend ] ⟷ [ Database ]

````

- Frontend collects user input, renders pages
- Backend exposes API endpoints to fetch/update data
- Database persists user/courses/schedule/chat/AI logs

You may also integrate external services (YouTube API, AI/ML APIs, chat service) depending on your modules.

---

## Getting Started

### Prerequisites

- Node.js (version X or higher)  
- npm / yarn  
- MongoDB (local or cloud)  
- (Optional) YouTube API key, Chat service credentials, AI/ML API key  

### Installation

```bash
# Clone repo
git clone <repository-url>
cd learnaryhub

# Install front‑end dependencies
cd frontend
npm install

# Install back‑end dependencies
cd ../backend
npm install
````

### Environment Variables

Create a `.env` file in the backend directory with required keys, for example:

```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/learnaryhub
JWT_SECRET=your_jwt_secret
YOUTUBE_API_KEY=your_youtube_key
CHAT_SERVICE_KEY=your_chat_key
AI_API_KEY=your_ai_service_key
```

### Running the App

```bash
# Start backend
cd backend
npm run dev   # or npm start

# Start frontend
cd ../frontend
npm run start  # or npm run dev
```

Navigate to `http://localhost:3000` (or the port your frontend uses) to view the app.

---

## Folder Structure

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

Modify as per your actual structure.

---

## Usage

1. Register or sign in as a user.
2. On the dashboard you can see key metrics (users, courses, success rate, countries reached).
3. Use the modules:

   * Schedule Manager: open schedule, add tasks/appointments
   * Notepad: manage notes
   * YouTube Feed: watch curated content
   * Live Chats: engage in real‑time chat
   * AI Assistant: get insights / chat with AI
4. Navigate using the sidebar or menu links (Dashboard, Courses, Community, Certifications, Premium, Help Center).
5. Subscribe to the newsletter to receive updates.

---

## Contributing

Feel free to submit pull requests or open issues. Please follow the code style guidelines and ensure you test any new features thoroughly.

**Steps**:

* Fork the project
* Create your feature branch: `git checkout -b feature/YourFeature`
* Commit your changes: `git commit -m "Add YourFeature"`
* Push to the branch: `git push origin feature/YourFeature`
* Open a Pull Request

Please make sure to add documentation/tests for new features.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

**Thank you for using LearnaryHub!** 🎓
Join millions of learners worldwide and empower your future.

```

---

Feel free to let me know if you’d like a **detailed README** with additional sections (e.g., API documentation, testing, deployment steps for Render, CI/CD) or if you want it in a different style/template.
::contentReference[oaicite:0]{index=0}
```
