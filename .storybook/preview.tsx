import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { theme } from "../src/themes";

export const withJoyTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  useEffect(() => {
    // forcing change to attribute on html tag
    document.documentElement.setAttribute("data-joy-color-scheme", themeKey);
  }, [themeKey]);

  return (
    <CssVarsProvider defaultMode="system" theme={theme}>
      <CssBaseline />
      <Story />
    </CssVarsProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withJoyTheme],
  globalTypes: {
    theme: {
      name: "Theme",
      title: "Theme",
      description: "Theme for your components",
      defaultValue: "light",
      toolbar: {
        dynamicTitle: true,
        items: [
          { value: "light", right: "☀️", title: "Light mode" },
          { value: "dark", right: "🌙", title: "Dark mode" },
        ],
      },
    },
  },
};

export default preview;
