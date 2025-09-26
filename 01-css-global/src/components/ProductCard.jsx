import { useState, useEffect } from "react";

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  // Simula atraso do carregamento (Skeleton)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "var(--radius-md)",
          background: "var(--shadow-sm)",
          marginBottom: "1rem",
        }}
      />
    );
  }

  return (
    <div
      className="product-card"
      style={{
        border: "1px solid var(--shadow-sm)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "transform var(--transition), box-shadow var(--transition)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      {/* Imagem 1:1 */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          borderRadius: "var(--radius-md) var(--radius-md) 0 0",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          loading="lazy"
          onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/300x300?text=Imagem+não+disponível")
          }
        />
      </div>

      {/* Conteúdo do card */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem 1rem",
          flex: 1, // faz o botão ficar na base
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              lineHeight: "1.2",
              height: "2.4rem", // 2 linhas
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            title={product.title}
          >
            {product.title}
          </h3>

          <p style={{ margin: "0.25rem 0", fontWeight: "bold" }}>
            ${product.price.toFixed(2)}
          </p>

          <p style={{ margin: "0.25rem 0", color: "orange" }}>
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </p>

          {product.tag && (
            <span
              style={{
                display: "inline-block",
                padding: "0.1rem 0.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-primary)",
                color: "white",
                fontSize: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              {product.tag}
            </span>
          )}
        </div>

        {/* Botão sempre na base */}
        <button
          aria-label={`Adicionar ${product.title} ao carrinho`}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            borderRadius: "var(--radius-md)",
            border: "none",
            background: "var(--color-primary)",
            color: "#fff",
            cursor: "pointer",
            transition: "var(--transition)",
            marginTop: "0.5rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
