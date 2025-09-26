import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./data/products";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);

    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleAdd = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <Navbar toggleTheme={toggleTheme} theme={theme} cartCount={cart.length} />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            loading={loading}
            onAdd={() => handleAdd(p)}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
