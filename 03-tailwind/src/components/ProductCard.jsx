import React from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, loading, onAdd }) {
  if (loading) return <Skeleton />;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition 
      focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden"
      tabIndex="0"
    >
      <div className="relative aspect-square">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="absolute w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
        <p className="text-lg font-bold mt-2">R$ {product.price.toFixed(2)}</p>
        <p className="text-yellow-500">
          {"★".repeat(Math.round(product.rating))}
        </p>
        <Button variant="solid" className="mt-2 w-full" onClick={onAdd}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}
