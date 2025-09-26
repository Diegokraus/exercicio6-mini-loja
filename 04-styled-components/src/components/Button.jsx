import styled, { css } from "styled-components";

const variantStyles = {
  solid: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: 1px solid transparent;
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid transparent;
  `,
};

const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  &:hover:not(:disabled) {
    transform: translateY(-3px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
  }
  ${({ variant = "solid" }) => variantStyles[variant]}
`;

export default function Button({ children, variant = "solid", ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
