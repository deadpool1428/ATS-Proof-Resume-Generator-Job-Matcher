# ATS Resume Builder – Week 1

## Overview
ATS Resume Builder is an enterprise-oriented web application designed to help users create **ATS-friendly resumes** using a clean, structured, and scalable architecture.

This repository contains the **Week 1 implementation**, which focuses on building the **core resume builder foundation**. Advanced AI-based features are intentionally deferred to later phases as per the project roadmap.

---

## Week 1 Objective
**Builder Core (Data Entry → Live Preview)**

The primary goal of Week 1 is to establish a stable frontend–backend foundation that enables users to:
- Enter resume details
- View a real-time resume preview
- Persist resume data in a database

---

## Features Implemented (Week 1)

### Frontend
- React application setup
- Clean and scalable folder structure
- Resume input form
- Live resume preview
- ATS-safe resume layout (plain text, headings, bullet points)
- State management using React Context API

### Backend
- Node.js and Express server
- MongoDB Atlas integration
- Resume schema design
- REST APIs for saving and fetching resume data

---

## Tech Stack

### Frontend
- React 18
- Create React App
- Context API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure
```text
ATS-Resume-Builder/
├── Frontend/
│   └── src/
│       ├── components/
│       │   ├── ResumeForm.js
│       │   └── ResumePreview.js
│       ├── context/
│       │   └── ResumeContext.js
│       ├── pages/
│       │   └── Builder.js
│       ├── index.css
│       └── index.js
├── Server/
│   ├── models/
│   │   └── Resume.js
│   ├── routes/
│   │   └── resumeRoutes.js
│   ├── server.js
│   └── package.json
└── README.md
````
-----------------------------

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-repo-url>
cd ATS-Resume-Builder
________________________________________
2️⃣ Backend Setup
cd Server
npm install
Create a .env file inside Server folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start backend server:
npm start
Backend will run on:
http://localhost:5000
________________________________________
3️⃣ Frontend Setup
cd Frontend
npm install
npm start
Frontend will run on:
http://localhost:3000
________________________________________

🧪 How It Works
1.	User enters resume details in the form
2.	Resume preview updates in real time
3.	Users can add:
o	Skills
o	Experience
o	Projects
o	Education
o	Courses
4.	Experience and project descriptions support point-wise input
5.	Clicking Save Resume stores data in MongoDB
________________________________________





