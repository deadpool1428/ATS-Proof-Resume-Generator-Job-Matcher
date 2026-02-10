import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useResume } from "../context/ResumeContext";

export default function LogoutButton() {
  const { logout } = useAuth();
  const { setResume } = useResume();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // clear auth
    setResume({     // reset resume safely
      personal: { name: "", email: "", phone: "", linkedin: "" },
      summary: "",
      skills: "",
      declaration: "",
      courses: [""],
      experience: [{ role: "", company: "", description: "" }],
      education: [{ degree: "", institution: "", year: "" }]
    });
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "6px 16px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#ef4444",
        color: "#ffffff",
        fontWeight: "600",
        cursor: "pointer"
      }}
    >
      Logout
    </button>
  );
}