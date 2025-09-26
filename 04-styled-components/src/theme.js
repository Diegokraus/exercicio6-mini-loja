import { tokens } from "./tokens";

export const light = {
  name: "light",
  colors: {
    bg: "#F7F7FB",
    surface: "#FFFFFF",
    text: "#0B1220",
    muted: "#5B6770",
    border: "#E6E9EE",
    primary: "#2563EB",
    success: "#16A34A",
    danger: "#DC2626",
    tagBg: "#EEF2FF",
    tagText: "#3730A3",
  },
  shadow: tokens.shadows.light,
  tokens,
};

export const dark = {
  name: "dark",
  colors: {
    bg: "#0B1020",
    surface: "#0F1724",
    text: "#ECF0F6",
    muted: "#A6B0BB",
    border: "#1F2937",
    primary: "#60A5FA",
    success: "#34D399",
    danger: "#F87171",
    tagBg: "#07103A",
    tagText: "#93C5FD",
  },
  shadow: "0 6px 18px rgba(2,6,23,0.7)",
  tokens,
};
