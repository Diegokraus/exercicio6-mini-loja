import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.tokens.radius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms ease, box-shadow 200ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
  &:focus-within {
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.12);
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.tagBg};
`;
const Img = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;
const Title = styled.h3`
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.2em;
  height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.text};
`;
const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const Price = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;
const Tag = styled.span`
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.tagBg};
  color: ${({ theme }) => theme.colors.tagText};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export default function ProductCard({ product, onAdd, loading }) {
  return (
    <Card tabIndex={0} aria-labelledby={`p-${product.id}-title`}>
      {loading ? (
        <ImgWrap>
          <Skeleton width="100%" height="100%" />
        </ImgWrap>
      ) : (
        <ImgWrap>
          <Img src={product.img} alt={product.title} loading="lazy" />
        </ImgWrap>
      )}
      <Body>
        {loading ? (
          <Skeleton width="70%" height="20px" />
        ) : (
          <Title id={`p-${product.id}-title`}>{product.title}</Title>
        )}
        <Meta>
          {loading ? (
            <Skeleton width="30%" height="18px" />
          ) : (
            <Price>R$ {product.price.toFixed(2)}</Price>
          )}
          {loading ? (
            <Skeleton width="20%" height="24px" />
          ) : (
            <Tag>{product.tag}</Tag>
          )}
        </Meta>

        <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
          <Button
            variant="outline"
            aria-label={`Ver detalhes de ${product.title}`}
          >
            Detalhes
          </Button>
          <Button
            variant="solid"
            onClick={() => onAdd(product)}
            aria-disabled={loading}
            disabled={loading}
          >
            Adicionar
          </Button>
        </div>
      </Body>
    </Card>
  );
}
