import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        zIndex: 10,
      }}
    >
      <div style={{ fontWeight: "bold" }}>Mini Loja</div>
      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "var(--radius-md)",
          border: "none",
          cursor: "pointer",
          background: dark ? "#555" : "#ddd",
          color: dark ? "#fff" : "#000",
        }}
      >
        {dark ? "☀️ Claro" : "🌙 Escuro"}
      </button>
    </nav>
  );
}
