import React from "react";
import styles from "../styles/Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ cartCount = 0 }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.navbar} role="banner">
      <div className={styles.brand}>
        <span className={styles.title}>Mini Loja</span>
      </div>

      <nav className={styles.controls} aria-label="Controles">
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-pressed={theme === "dark"}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button
          className={styles.cart}
          aria-label={`Carrinho com ${cartCount} itens`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44A2 2 0 0 0 9 20h10v-2H9.42a.25.25 0 0 1-.24-.15L9.1 17h7.45a2 2 0 0 0 1.8-1.1L21 6H6.21l-.2-1H3V4h4z"
            />
          </svg>
          {cartCount > 0 && (
            <span className={styles.badge} aria-hidden>
              {cartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
