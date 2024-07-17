"use client";

import { useMemo } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { CustomButton } from "@/components/Button";
import { lightTheme, darkTheme } from "@/themes";
import { overrides } from "@/themes/overrides";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => (prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={{ ...theme, ...overrides }}>
      <CssBaseline />
      <CustomButton label="Hello world!" />
    </ThemeProvider>
  );
}
