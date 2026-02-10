import { useResume } from "../context/ResumeContext";
import axios from "axios";

export default function ResumeForm() {
  const { resume, setResume } = useResume();

  /* ---------- ADD FUNCTIONS ---------- */
  const addExperience = () => {
    setResume({
      ...resume,
      experience: [...resume.experience, { role: "", company: "", description: "" }]
    });
  };

  const addEducation = () => {
    setResume({
      ...resume,
      education: [...resume.education, { degree: "", institution: "", year: "" }]
    });
  };

  const addCourse = () => {
    setResume({
      ...resume,
      courses: [...resume.courses, ""]
    });
  };

  /* ---------- SAVE RESUME (FIXED) ---------- */
  const saveResume = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/resume",
        resume,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Resume saved successfully");
    } catch (err) {
      console.error(err);
      alert("Error saving resume");
    }
  };

  return (
    <div className="resume-form">
      <h2>Resume Builder</h2>

      {/* PERSONAL INFO */}
      <h3>Personal Information</h3>
      <input
        placeholder="Full Name"
        value={resume.personal.name}
        onChange={e =>
          setResume({
            ...resume,
            personal: { ...resume.personal, name: e.target.value }
          })
        }
      />
      <input
        placeholder="Email"
        value={resume.personal.email}
        onChange={e =>
          setResume({
            ...resume,
            personal: { ...resume.personal, email: e.target.value }
          })
        }
      />
      <input
        placeholder="Phone"
        value={resume.personal.phone}
        onChange={e =>
          setResume({
            ...resume,
            personal: { ...resume.personal, phone: e.target.value }
          })
        }
      />
      <input
        placeholder="LinkedIn"
        value={resume.personal.linkedin}
        onChange={e =>
          setResume({
            ...resume,
            personal: { ...resume.personal, linkedin: e.target.value }
          })
        }
      />

      {/* SUMMARY */}
      <h3>Professional Summary</h3>
      <textarea
        rows="4"
        value={resume.summary}
        onChange={e => setResume({ ...resume, summary: e.target.value })}
      />

      {/* SKILLS */}
      <h3>Skills</h3>
      <input
        placeholder="React, Node, MongoDB"
        value={resume.skills}
        onChange={e => setResume({ ...resume, skills: e.target.value })}
      />

      {/* EXPERIENCE */}
      <h3>Experience</h3>
      {resume.experience.map((exp, i) => (
        <div key={i} className="block">
          <input
            placeholder="Role"
            value={exp.role}
            onChange={e => {
              const arr = [...resume.experience];
              arr[i].role = e.target.value;
              setResume({ ...resume, experience: arr });
            }}
          />
          <input
            placeholder="Company"
            value={exp.company}
            onChange={e => {
              const arr = [...resume.experience];
              arr[i].company = e.target.value;
              setResume({ ...resume, experience: arr });
            }}
          />
          <textarea
            rows="3"
            placeholder="Description"
            value={exp.description}
            onChange={e => {
              const arr = [...resume.experience];
              arr[i].description = e.target.value;
              setResume({ ...resume, experience: arr });
            }}
          />
        </div>
      ))}
      <button className="secondary-btn" onClick={addExperience}>
        + Add Experience
      </button>

      {/* EDUCATION */}
      <h3>Education</h3>
      {resume.education.map((edu, i) => (
        <div key={i} className="block">
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={e => {
              const arr = [...resume.education];
              arr[i].degree = e.target.value;
              setResume({ ...resume, education: arr });
            }}
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={e => {
              const arr = [...resume.education];
              arr[i].institution = e.target.value;
              setResume({ ...resume, education: arr });
            }}
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={e => {
              const arr = [...resume.education];
              arr[i].year = e.target.value;
              setResume({ ...resume, education: arr });
            }}
          />
        </div>
      ))}
      <button className="secondary-btn" onClick={addEducation}>
        + Add Education
      </button>

      {/* COURSES */}
      <h3>Courses / Certifications</h3>
      {resume.courses.map((c, i) => (
        <input
          key={i}
          placeholder="Course / Certification"
          value={c}
          onChange={e => {
            const arr = [...resume.courses];
            arr[i] = e.target.value;
            setResume({ ...resume, courses: arr });
          }}
        />
      ))}
      <button className="secondary-btn" onClick={addCourse}>
        + Add Course
      </button>

      {/* DECLARATION */}
      <h3>Declaration</h3>
      <textarea
        rows="3"
        value={resume.declaration}
        onChange={e => setResume({ ...resume, declaration: e.target.value })}
      />

      {/* SAVE */}
      <button className="primary-btn" onClick={saveResume}>
        Save Resume
      </button>
    </div>
  );
}
