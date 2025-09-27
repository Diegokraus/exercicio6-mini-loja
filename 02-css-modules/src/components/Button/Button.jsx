import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
export default function Button({
  variant = "solid",
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={clsx(
        styles.btn,
        variant === "solid" && styles.solid,
        variant === "outline" && styles.outline,
        variant === "ghost" && styles.ghost,
        className
      )}
    >
      {children}
    </button>
  );
}
