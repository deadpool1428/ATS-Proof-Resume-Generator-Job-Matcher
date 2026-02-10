import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/auth.css";

export default function Login() {
  const { login } = useAuth();
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      login(data.user, data.token);
      navigate("/builder");
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </div>

      <div className="auth-card">
        <div className="auth-brand">
          <h1>CareerForge</h1>
          <p>Build ATS-friendly resumes</p>
        </div>

        {error && <div className="auth-message auth-error">{error}</div>}

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            className="auth-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="auth-footer">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}