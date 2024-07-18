"use client";

import { CustomButton } from "@/components/Button";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { theme } from "@/themes";

export default function App() {
  return (
    <CssVarsProvider
      defaultMode="system"
      theme={theme}
      modeStorageKey="example_color-scheme"
    >
      <CssBaseline />
      <CustomButton label="Hello world!" />
      <Typography fontSize="sm">Hello World</Typography>
    </CssVarsProvider>
  );
}
