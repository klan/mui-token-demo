import React, { useMemo } from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../src/themes";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      title: "Theme",
      description: "Theme for your components",
      defaultValue: "dark",
      toolbar: {
        icon: "paintbrush",
        dynamicTitle: true,
        items: [
          { value: "dark", left: "🌙", title: "Dark mode" },
          { value: "light", left: "☀️", title: "Light mode" },
        ],
      },
    },
  },
};

export default preview;
