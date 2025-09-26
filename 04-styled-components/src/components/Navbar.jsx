import React from "react";
import styled from "styled-components";

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Logo = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Toggle = styled.button`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  background: transparent;
  &:focus {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
  }
`;

export default function Navbar({ themeName, onToggle, cartCount }) {
  return (
    <Bar role="banner">
      <Left>
        <Logo aria-hidden>MiniLoja</Logo>
        <div id="skip-to-content">
          <a href="#grid">Ir para produtos</a>
        </div>
      </Left>
      <Controls>
        <Toggle
          aria-pressed={themeName === "dark"}
          aria-label="Alternar tema"
          onClick={onToggle}
        >
          {themeName === "dark" ? "🌙" : "☀️"}
        </Toggle>
        <div aria-label={`Carrinho com ${cartCount} itens`} role="status">
          🛒<span aria-hidden>{cartCount}</span>
        </div>
      </Controls>
    </Bar>
  );
}
