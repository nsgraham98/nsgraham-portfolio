// theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D0D0D",
      paper: "#111111",
    },
    primary: {
      main: "#3B82F6", // blue
    },
    secondary: {
      main: "#8B5CF6", // purple accent
    },
    text: {
      primary: "#E1E1E1",
      secondary: "#A3A3A3",
    },
    divider: "#3D3D3D",
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
    h1: { fontSize: "2.75rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 500 },
    body1: { fontSize: "0.95rem" },
    body2: { fontSize: "0.875rem" },
  },
});

export default theme;
