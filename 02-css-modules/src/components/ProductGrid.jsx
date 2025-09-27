import React, { useEffect, useState } from "react";
import styles from "../styles/ProductGrid.module.css";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductGrid({ products = [], onAdd }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.grid} aria-live="polite">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <ProductCard key={i} loading />
          ))
        : products.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => onAdd(p)} />
          ))}
    </section>
  );
}
