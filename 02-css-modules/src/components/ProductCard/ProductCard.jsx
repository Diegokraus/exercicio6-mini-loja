import styles from "./ProductCard.module.css";
import Button from "../Button/Button";
import Skeleton from "../skeleton/Skeleton";

export default function ProductCard({ product, loading }) {
  if (loading) return <Skeleton />;

  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.media}>
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.tag && <span className={styles.tag}>{product.tag}</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.meta}>
          <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
          <span className={styles.stars}>
            {"★".repeat(Math.round(product.rating))}
          </span>
        </div>
        <div className={styles.actions}>
          <Button variant="solid">Adicionar</Button>
          <Button variant="outline">Wishlist</Button>
          <Button variant="ghost">Detalhes</Button>
        </div>
      </div>
    </div>
  );
}
