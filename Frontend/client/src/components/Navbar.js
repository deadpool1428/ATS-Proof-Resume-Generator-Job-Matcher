import { useAuth } from "../context/AuthContext";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: "#0f172a",
        color: "#ffffff"
      }}
    >
      {/* APP NAME */}
      <h3 style={{ margin: 0 }}>CareerForge</h3>

      {/* USER INFO + LOGOUT */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        {user && (
          <span style={{ fontSize: "14px", opacity: 0.9 }}>
            👤 {user.name}
          </span>
        )}
        <LogoutButton />
      </div>
    </div>
  );
}