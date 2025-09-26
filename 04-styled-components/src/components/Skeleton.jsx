import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0% { background-position: -200% 0 }
100% { background-position: 200% 0 }
`;

const Box = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06) 25%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 8px;
`;

export default function Skeleton({ width = "100%", height = "100%" }) {
  return <Box style={{ width, height }} aria-hidden="true" />;
}
