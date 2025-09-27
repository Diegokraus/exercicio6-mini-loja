import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import { PRODUCTS } from "./data/products";
import styles from "./App.module.css";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("ml-theme") || "light"
  );
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    localStorage.setItem("ml-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div
      className={`${styles.app} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} cartCount={cart.length} />
      <main
        className={styles.grid}
        aria-live="polite"
        aria-label="Lista de produtos"
      >
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            loading={loading}
            onAdd={() => handleAddToCart(p)}
          />
        ))}
      </main>
    </div>
  );
}
