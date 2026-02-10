📘 ATS-Friendly Resume Builder
Software Requirements Specification (SRS)

Internship Project | Weeks 1–3

1. Introduction
1.1 Purpose

This document specifies the functional and non-functional requirements of the ATS-Friendly Resume Builder, developed as part of an enterprise internship program.

The SRS captures requirements incrementally across Week 1, Week 2, and Week 3, and serves as a reference for:

Developers

Mentors

Evaluators

1.2 Scope

The ATS-Friendly Resume Builder is a web-based application that helps users—especially freshers, interns, and entry-level professionals—create professional, ATS-compatible resumes.

The project evolves week-by-week:

Week 1: Resume creation & storage

Week 2: ATS analysis & scoring

Week 3: ATS accuracy improvements & resume export

1.3 Definitions & Abbreviations
Term	Meaning
ATS	Applicant Tracking System
UI	User Interface
SRS	Software Requirements Specification
CRUD	Create, Read, Update, Delete
JD	Job Description
2. Overall Description
2.1 Product Perspective

The system follows a client–server architecture:

Frontend: React.js (resume input & preview)

Backend: Node.js with Express.js

Database: MongoDB (Atlas / Compass)

Each layer is modular and independently maintainable.

2.2 Product Functions

At a high level, the system enables users to:

Enter structured resume data

Preview resumes in real time

Save resumes to a database

Analyze resumes against job descriptions

Export ATS-friendly resumes as PDF

2.3 User Characteristics

Target users include:

Freshers and interns

Entry-level professionals

Experienced professionals

Users are expected to have basic familiarity with web forms.

2.4 Constraints

No user authentication (Weeks 1–3)

ATS logic is rule-based

No AI / ML / NLP models

Development-level deployment only

2.5 Assumptions & Dependencies

Internet connectivity is available

MongoDB service is accessible

Modern web browsers are used

3. Functional Requirements
🔹 Week 1 – Core Resume Builder

FR-1: Resume Data Input
The system shall allow users to enter:

Personal information

Education details

Experience details

Skills and certifications

FR-2: Live Resume Preview
The system shall display a real-time preview reflecting user inputs instantly.

FR-3: Resume Data Storage
The system shall store resume data in MongoDB using a structured schema.

FR-4: Resume Schema Design
The system shall define a definitive schema supporting education, experience, and skills.

Week 1 Status: ✅ Implemented and locked

🔹 Week 2 – ATS Analyzer

FR-5: Job Description Input
The system shall allow users to paste a job description for ATS evaluation.

FR-6: Keyword Matching
The system shall compare resume content with job description keywords.

FR-7: ATS Score Calculation
The system shall compute an ATS compatibility score (percentage).

FR-8: ATS Result Display
The system shall display:

ATS score

Matched keywords

Missing keywords

Week 2 Status: ✅ Implemented and locked

🔹 Week 3 – Enhancements & Accuracy Improvements

FR-9: Stopword Filtering
The system shall remove non-technical stopwords from job descriptions.

FR-10: Keyword Normalization
The system shall normalize technical keywords
(e.g., ReactJS → React, APIs → API).

FR-11: ATS Match Classification
The system shall classify results as:

Poor Match

Moderate Match

Strong Match

FR-12: ATS Feedback Suggestions
The system shall provide actionable suggestions for improving ATS compatibility.

FR-13: Resume Export
The system shall allow users to download a single-page ATS-friendly PDF resume.

Week 3 Status: ✅ Implemented and locked

4. Non-Functional Requirements

NFR-1: Usability
The system shall provide a clean, intuitive, and readable user interface.

NFR-2: Performance
ATS analysis shall complete within acceptable response time.

NFR-3: Accuracy
ATS scoring shall reduce noise using stopword filtering and normalization.

NFR-4: Maintainability
The system shall remain modular and easy to extend.

6. Conclusion

Across three weeks, the ATS-Friendly Resume Builder has evolved into a stable, explainable, and enterprise-ready system:

Week 1: Resume creation & storage

Week 2: ATS analysis & scoring

Week 3: Accuracy improvements & export

Week 4: Advanced Features & System Integration
4.1 Overview

Week 4 focuses on enhancing the ATS Resume Builder by integrating secure authentication, resume persistence, and advanced resume analysis features. This phase transitions the application from a static resume builder to a user-centric, data-driven web application.

4.2 Functional Requirements (Week 4)
FR-4.1 User Authentication

The system shall allow users to register using email and password.

The system shall allow users to log in using registered credentials.

The system shall securely hash passwords using bcrypt.

The system shall authenticate users using JWT-based authentication.

The system shall restrict resume access to authenticated users only.

FR-4.2 Resume Persistence

The system shall allow authenticated users to save resumes to the database.

The system shall associate each resume with a unique user account.

The system shall allow users to update existing resumes.

The system shall retrieve saved resumes when the user logs in.

FR-4.3 ATS Resume Analysis

The system shall analyze resume content against a provided job description.

The system shall calculate an ATS Match Score.

The system shall identify and display missing keywords.

The system shall display matched and missing keywords visually.

FR-4.4 Job Readiness Evaluation

The system shall compute a Job Readiness Score based on:

Resume completeness

Skills presence

Experience and education details

The system shall provide feedback to help users improve job readiness.

4.3 Non-Functional Requirements (Week 4)
NFR-4.1 Security

Passwords shall never be stored in plain text.

JWT tokens shall be used to secure protected routes.

Resume data shall be accessible only by the authenticated user.

NFR-4.2 Usability

The system shall provide a user-friendly login and registration interface.

The system shall give clear success and error messages.

Resume analysis results shall be easy to understand.

NFR-4.3 Performance

Resume analysis shall complete within an acceptable response time.

Resume save and retrieval operations shall be optimized for minimal latency.

4.4 System Architecture (Week 4 Enhancements)

Frontend: React.js with Context API

Backend: Node.js + Express.js

Database: MongoDB Atlas

Authentication: JWT + bcrypt

Communication: RESTful APIs

4.5 Constraints

The application requires an active internet connection.

MongoDB Atlas is used as the cloud database.

The system depends on browser support for modern JavaScript features.

4.6 Future Enhancements

Google OAuth login

Resume versioning

PDF export

AI-powered resume suggestions
