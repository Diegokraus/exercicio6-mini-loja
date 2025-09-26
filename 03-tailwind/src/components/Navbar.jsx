import React from "react";

export default function Navbar({ toggleTheme, theme, cartCount }) {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-3 shadow-md bg-white dark:bg-gray-900 dark:text-white z-10">
      <div className="font-bold text-lg">Mini Loja</div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          aria-label="Alternar tema"
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>
        <div className="relative">
          <span className="material-icons cursor-pointer">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
