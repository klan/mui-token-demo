import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  // cssVarPrefix: 'demo',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // new base colors
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          // new token mapping
          solidBg: "var(--joy-palette-primary-400)",
          solidHoverBg: "",
          solidActiveBg: "var(--joy-palette-primary-500)",
          outlinedBorder: "var(--joy-palette-primary-500)",
          outlinedColor: "var(--joy-palette-primary-700)",
          outlinedActiveBg: "var(--joy-palette-primary-100)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: "",
          100: "#fffcf0",
          200: "#fdf7df",
          300: "#fbe9ae",
          400: "#f8db7a",
          500: "#f5ce42",
          600: "",
          700: "#f2b800",
          800: "#f3aa00",
          900: "",
        },
      },
    },
  },
  // components: {
  //   JoyButton: {
  //     defaultProps: {
  //       variant: "outlined",
  //     },
  //   },
  // },
});
