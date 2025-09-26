import { useEffect, useMemo, useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { light, dark } from "./theme";
import { PRODUCTS } from "./data/products";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

import { tokens } from "./tokens";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none; }

  /* foco visível (keyboard) */
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(37,99,235,0.18);
    border-radius: 8px;
  }

  /* helper para a11y */
  .visually-hidden {
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
`;

const Grid = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 16px auto 56px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${(props) => props.theme.tokens.breakpoints.bp1 + 1}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.tokens.breakpoints.bp2 + 1}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.tokens.breakpoints.bp3 + 1}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: block;
  min-height: 320px; /* evita layout shift quando skeleton */
`;

export default function App() {
  const [themeName, setThemeName] = useState(() => {
    try {
      return localStorage.getItem("ml-theme") || "light";
    } catch {
      return "light";
    }
  });
  const theme = useMemo(
    () => (themeName === "dark" ? dark : light),
    [themeName]
  );

  useEffect(() => {
    try {
      localStorage.setItem("ml-theme", themeName);
    } catch {}
  }, [themeName]);

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  function handleAdd(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar
        themeName={themeName}
        onToggle={() => setThemeName((n) => (n === "dark" ? "light" : "dark"))}
        cartCount={cart.length}
      />

      <main aria-labelledby="products-heading">
        <div style={{ padding: 12, maxWidth: 1300, margin: "0 auto" }}>
          <h2 id="products-heading" style={{ marginTop: 8, marginBottom: 8 }}>
            Produtos
          </h2>
        </div>

        <Grid role="list" aria-label="Lista de produtos">
          {PRODUCTS.map((p) => (
            <CardWrapper key={p.id} role="listitem">
              <ProductCard product={p} onAdd={handleAdd} loading={loading} />
            </CardWrapper>
          ))}
        </Grid>
      </main>
    </ThemeProvider>
  );
}
