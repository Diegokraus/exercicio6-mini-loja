import styles from "./skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.media}></div>
      <div className={styles.title}></div>
      <div className={styles.meta}></div>
      <div className={styles.actions}></div>
    </div>
  );
}
