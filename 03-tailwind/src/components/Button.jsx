import React from "react";

export default function Button({ children, className = "", ...props }) {
  const base =
    "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";
  const styles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost:
      "text-blue-600 hover:bg-blue-100 focus:ring-blue-500 dark:hover:bg-gray-700",
  };

  return (
    <button className={`${base} ${styles.solid} ${className}`} {...props}>
      {children}
    </button>
  );
}
