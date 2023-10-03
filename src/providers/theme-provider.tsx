"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
