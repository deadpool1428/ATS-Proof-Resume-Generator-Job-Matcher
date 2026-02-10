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



# Week 2 – Implementation Update

## Overview
Week 2 focuses on implementing core functionality for the ATS Resume Builder, including resume persistence, ATS analysis, and validation improvements.

## Features Added in Week 2
- Resume builder with structured sections
- MongoDB integration for resume storage
- Rule-based ATS analyzer with weighted keyword matching
- Save Resume validation
- ATS Analyzer input validation
- Improved UI consistency

## Status
Week 2 implementation is complete and locked.

## 🚀 Week 3 – Enhancements & Improvements

### Overview
Week 3 focuses on improving ATS accuracy, enhancing user feedback, and enabling resume export while keeping the system **rule-based and explainable**.

---

### ✅ Features Added in Week 3

- Stopword filtering to remove non-relevant job description terms  
- Keyword normalization for improved ATS matching  
- Enhanced ATS scoring accuracy  
- ATS match-level classification:
  - Poor Match  
  - Moderate Match  
  - Strong Match  
- Actionable ATS feedback suggestions  
- Resume export as a **single-page ATS-friendly PDF**  
- Improved ATS Analyzer UI for clarity and usability  

---

### 🧠 ATS Improvements

- Reduced noise in keyword matching  
- Improved interpretability of ATS scores  
- Clear guidance on resume optimization  

---

### 🔒 Scope Control

The following features are **intentionally excluded** from Week 3:

- AI-based resume rewriting  
- NLP or machine learning models  
- User authentication  

These are planned for future iterations.

---

### 📍 Week 3 Status

- ✅ ATS accuracy improved  
- ✅ Feedback and classification added  
- ✅ Resume export implemented  
- ✅ Codebase stable and locked  

---
---

## 🚀 Week 4: Authentication, Resume Persistence & ATS Analysis

### 📌 Overview
In Week 4, the ATS Resume Builder was enhanced with **secure user authentication**, **resume persistence**, and **advanced ATS analysis features**. This phase transforms the application into a **user-centric, production-style full-stack web application**.

---

## ✨ Features Implemented (Week 4)

### 🔐 User Authentication
- User Registration and Login using email and password
- Password hashing with **bcrypt**
- **JWT-based authentication**
- Protected routes to restrict resume access
- Secure Logout functionality
- Automatic redirection to Login on app start

---

### 💾 Resume Persistence
- Save resume data securely to **MongoDB Atlas**
- Update existing resume details
- Resume data linked to the authenticated user
- Resume retrieval after login
- Secure API access using JWT middleware

---

### 📊 ATS Resume Analyzer
- ATS Match Score calculation based on Job Description
- Detection of missing keywords
- Keyword normalization and stop-word filtering
- Clear and actionable feedback to improve resume quality

---

### 🎯 Job Readiness Evaluation
- Resume completeness assessment
- Job readiness score based on skills, experience, and education
- Helps users understand employability gaps

---

## 🧱 Updated Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React.js, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT, bcrypt |
| Styling | CSS |

---

## 🛠️ How to Run the Project

### Backend
```bash
cd server
npm install
npm start
