import React from "react";
import Button from "../Button/Button";
import Skeleton from "../skeleton/Skeleton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, loading, onAdd }) {
  if (loading)
    return (
      <div className={styles.wrapper}>
        <Skeleton />
      </div>
    );

  return (
    <article
      className={styles.card}
      tabIndex="0"
      aria-labelledby={`title-${product.id}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className={styles.img}
        />
        <span className={styles.tag}>{product.tag}</span>
      </div>

      <div className={styles.info}>
        <h3 id={`title-${product.id}`} className={styles.title}>
          {product.title}
        </h3>
        <div className={styles.meta}>
          <div className={styles.price}>R$ {product.price.toFixed(2)}</div>
          <div className={styles.rating} aria-hidden>
            {"★".repeat(Math.round(product.rating))}
          </div>
        </div>
        <div className={styles.actions}>
          <Button variant="solid" onClick={onAdd}>
            Adicionar
          </Button>
          <Button
            variant="outline"
            onClick={() => {}}
            aria-label={`Detalhes de ${product.title}`}
          >
            Detalhes
          </Button>
        </div>
      </div>
    </article>
  );
}
