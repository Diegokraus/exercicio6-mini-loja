import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeletonWrap} aria-hidden="true">
      <div className={styles.avatar}></div>
      <div className={styles.row}></div>
      <div className={styles.rowShort}></div>
    </div>
  );
}
