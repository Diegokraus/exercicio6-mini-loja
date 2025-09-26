import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import productsData from "../src/data/products";
import { useTheme } from "./context/ThemeContext";
import styles from "./App.module.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  // Simula carregamento (skeleton)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.navbar}>
        <h1 className={styles.logo}>Mini Loja</h1>
        <div>
          <button onClick={toggleTheme} className={styles.themeBtn}>
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          <span className={styles.cartBadge} aria-label="Carrinho de compras">
            🛒 3
          </span>
        </div>
      </header>

      <main className={styles.grid}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} loading={loading} />
        ))}
      </main>
    </div>
  );
}
