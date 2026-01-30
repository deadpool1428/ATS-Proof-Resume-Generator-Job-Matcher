ATS-Friendly Resume Builder – Week 1
________________________________________
1. Introduction
1.1 Purpose
The purpose of this document is to define the functional and non-functional requirements for Week-1 of the ATS-Friendly Resume Builder project. This phase focuses on building the core resume creation interface, enabling users to input, preview, and store resume data in a structured and professional format.
This document serves as a reference for developers, mentors, and evaluators involved in the internship program.
________________________________________
1.2 Scope
The ATS Resume Builder is a web-based application designed to help users—especially freshers, interns, and entry-level professionals—create clean, professional, and ATS-compatible resumes.
Week-1 scope includes:
•	Resume data input through a structured UI
•	Real-time resume preview
•	Resume data storage using MongoDB
•	Support for both freshers and experienced users
Advanced features such as ATS scoring, AI suggestions, and PDF export are out of scope for Week-1.
________________________________________
1.3 Definitions, Acronyms, and Abbreviations
Term	Description
ATS	Applicant Tracking System
UI	User Interface
SRS	Software Requirements Specification
CRUD	Create, Read, Update, Delete
________________________________________
2. Overall Description
2.1 Product Perspective
The system follows a client–server architecture:
•	Frontend: React.js (Resume input & preview)
•	Backend: Node.js + Express.js
•	Database: MongoDB (via MongoDB Compass / Atlas)
Week-1 focuses on resume creation and visualization, not deployment or analytics.
________________________________________
2.2 User Classes and Characteristics
User Type	Description
Fresher / Student	Creates resumes using projects and skills
Intern	Adds projects, internships, and certifications
Experienced Professional	Adds work experience and education
No authentication is required in Week-1.
________________________________________
2.3 Operating Environment
•	Frontend: React.js (Browser-based)
•	Backend: Node.js with Express
•	Database: MongoDB
•	OS: Windows / Linux / macOS
•	Browser: Chrome, Edge, Firefox
________________________________________
2.4 Design Constraints
•	Resume must be ATS-friendly (simple structure, readable text)
•	UI must be clean and professional
•	No external UI frameworks (Bootstrap, MUI, etc.) in Week-1
•	Data persistence limited to resume storage
________________________________________
2.5 Assumptions and Dependencies
•	User has basic internet access
•	MongoDB service is running
•	Backend API is reachable from frontend
•	User inputs data manually
________________________________________
3. Functional Requirements
FR-1: Resume Data Input
The system shall allow users to input the following resume details:
•	Personal Information (Name, Email, Phone, LinkedIn)
•	Professional Summary
•	Skills
•	Experience
•	Projects
•	Education
•	Courses & Certifications
•	Declaration
________________________________________
FR-2: Dynamic Sections
The system shall allow users to:
•	Add multiple skills
•	Add multiple experiences
•	Add multiple projects
•	Add multiple education entries
•	Add multiple courses/certifications
________________________________________
FR-3: Resume Preview
The system shall display a real-time preview of the resume as the user enters data.
The preview shall:
•	Follow a professional resume layout
•	Display experience and projects in bullet-point format
•	Avoid unnecessary symbols or brackets
________________________________________
FR-4: Fresher-Friendly Resume Support
The system shall support resumes without experience by allowing:
•	Projects section
•	Skills-based resumes
________________________________________
FR-5: Resume Persistence
The system shall save resume data to MongoDB when the user clicks Save Resume.
________________________________________
FR-6: Input Formatting
The system shall:
•	Render experience and project descriptions as bullet points
•	Maintain clean spacing and readable layout
•	Prevent empty or placeholder data from appearing in preview
________________________________________
4. Non-Functional Requirements
4.1 Usability
•	UI must be intuitive and easy to understand
•	Input fields must be properly spaced and readable
•	Resume preview must resemble a real professional resume
________________________________________
4.2 Performance
•	Resume preview should update instantly
•	Save operation should complete within acceptable response time
________________________________________
4.3 Reliability
•	Data entered by the user must not be lost before saving
•	Application should not crash due to empty fields
________________________________________
4.4 Maintainability
•	Codebase must follow modular React component structure
•	Clear separation between UI, logic, and data management
________________________________________
4.5 Scalability
•	System should allow future extensions such as:
o	ATS score calculation
o	PDF export
o	AI-based suggestions
________________________________________
5. System Architecture (High-Level)
[ React Frontend ]
        |
        |  REST API
        |
[ Node.js + Express ]
        |
        |
[ MongoDB Database ]
________________________________________
6. Week-1 Deliverables
•	Resume Builder UI
•	Resume Preview UI
•	Backend API for saving resume
•	MongoDB schema for resume data
•	SRS Documentation (this document)
________________________________________
7. Out of Scope (Week-1)
•	Authentication & authorization
•	ATS score calculation
•	Resume templates
•	PDF export
•	AI resume suggestions
________________________________________
8. Conclusion
Week-1 establishes the foundation of the ATS Resume Builder by delivering a functional, professional, and extensible resume creation system. The implementation ensures clean UI, proper data handling, and readiness for advanced features in subsequent phases.
________________________________________

***************************************************************************************************************************************************************************************************


1. Introduction (Week 2 Scope)
This section extends the Week 1 SRS by defining the functional and non-functional requirements implemented in Week 2.
Week 2 focuses on core system functionality, data persistence, and ATS analysis.
________________________________________
2. Objectives (Week 2)
•	Enable users to create structured resumes
•	Persist resume data in a database
•	Analyse resumes against job descriptions
•	Improve usability and data validation
•	Maintain enterprise-ready architecture
________________________________________
3. Functional Requirements (Week 2)
FR-1: Resume Creation
•	The system shall allow users to enter personal information.
•	The system shall allow users to add:
o	Professional summary
o	Skills
o	Experience
o	Education
o	Courses & Certifications
o	Declaration
•	The system shall display a real-time resume preview.
________________________________________
FR-2: Resume Persistence
•	The system shall store resume data in MongoDB.
•	The system shall provide an API to save resume data.
•	The system shall prevent saving incomplete resumes.
________________________________________
FR-3: ATS Analyzer
•	The system shall allow users to paste a Job Description.
•	The system shall extract keywords from the Job Description.
•	The system shall compare Job Description keywords with resume content.
•	The system shall calculate an ATS score as a percentage match.
•	The system shall display:
o	ATS score
o	Matched keywords
o	Missing keywords
________________________________________
FR-4: Keyword Weighting
•	The system shall prioritize keywords based on resume sections:
o	Skills (highest priority)
o	Experience (medium priority)
o	Summary (lowest priority)
________________________________________
FR-5: Validation Rules
•	The system shall disable the “Analyse Resume” button until a Job Description is provided.
•	The system shall prevent invalid API calls.
________________________________________
4. Non-Functional Requirements (Week 2)
NFR-1: Usability
•	The UI shall be simple and consistent.
•	Actions shall be clearly enabled or disabled based on input.
________________________________________


NFR-2: Performance
•	ATS analysis shall complete within acceptable response time.
•	Resume saving shall not block the UI.
________________________________________
NFR-3: Maintainability
•	Code shall follow modular structure.
•	Business logic shall be separated from UI logic.
________________________________________


NFR-4: Scalability
•	The system shall support future enhancements such as:
o	NLP-based ATS analysis
o	Resume PDF export
o	Authentication
________________________________________
5. Constraints
•	ATS analysis is rule-based (no NLP in Week 2).
•	The system does not support user authentication.
•	Resume export is not included in Week 2.
________________________________________
6. Assumptions
•	Users provide valid resume data.
•	Job Descriptions are provided manually.
•	MongoDB is available and properly configured.
________________________________________


7. Future Scope
•	Advanced ATS using NLP
•	AI-powered resume improvement suggestions
•	Resume export (PDF)
•	User authentication and profile management

