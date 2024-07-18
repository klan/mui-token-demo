import React from "react";
import type { Preview } from "@storybook/react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { theme } from "../src/themes";

export const withJoyTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  return (
    <CssVarsProvider
      defaultMode={themeKey}
      theme={theme}
      colorSchemeSelector="#storybook_color-scheme"
    >
      <CssBaseline />
      <div id="storybook_color-scheme">
        <Story />
      </div>
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
      defaultValue: "system",
      toolbar: {
        dynamicTitle: true,
        items: [
          { value: "system", right: "🌓", title: "System color scheme" },
          { value: "light", right: "☀️", title: "Light mode" },
          { value: "dark", right: "🌙", title: "Dark mode" },
        ],
      },
    },
  },
};

export default preview;
