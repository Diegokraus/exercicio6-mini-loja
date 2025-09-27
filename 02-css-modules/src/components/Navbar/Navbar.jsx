import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ theme, toggleTheme, cartCount = 0 }) {
  return (
    <header className={styles.nav} role="banner">
      <div className={styles.left}>
        <a href="#grid" className={styles.logo} aria-label="Ir para produtos">
          Mini Loja
        </a>
      </div>

      <div className={styles.right}>
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          aria-pressed={theme === "dark"}
          className={styles.themeBtn}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <div
          className={styles.cartWrap}
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          <button
            className={styles.cartBtn}
            aria-label={`Carrinho com ${cartCount} itens`}
          >
            🛒
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
