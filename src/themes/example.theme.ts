import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  cssVarPrefix: "demo", // using 'demo' as namespace for css vars
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // base colors
          50: undefined,
          100: undefined,
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          // solid
          solidBg: "var(--colorSurfaceBrandBlue4)",
          solidHoverBg: "var(--colorSurfaceBrandBlue3)",
          solidActiveBg: "var(--colorSurfaceBrandBlue5)",
          solidColor: "var(--colorTextInverse)",
          solidDisabledBg: "var(--colorDisabledSurface)",
          solidDisabledColor: "var(--colorDisabledText)",
          solidDisabledBorder: "var(--colorDisabledStroke)",
          // outline
          outlinedBg: "var(--colorSurfaceDefault)",
          outlinedBorder: "var(--colorStrokeBrandBlue2)",
          outlinedHoverBg: "var(--colorSurfaceBrandBlue1)",
          outlinedActiveBg: "var(--colorSurfaceBrandBlue2)",
          outlinedColor: "var(--colorTextBrandBlue2)",
          outlinedDisabledColor: "var(--colorDisabledText)",
          outlinedDisabledBorder: "var(--colorDisabledStroke)",
        },
        danger: {
          // base colors
          50: undefined,
          100: undefined,
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          // solid
          solidBg: "var(--colorSystemColorsDanger500)",
          solidHoverBg: "var(--colorSystemColorsDanger400)",
          solidActiveBg: "var(--colorSystemColorsDanger900)",
          solidColor: "var(--colorTextInverse)",
          solidDisabledBg: "var(--colorDisabledSurface)",
          solidDisabledColor: "var(--colorDisabledText)",
          solidDisabledBorder: "var(--colorDisabledStroke)",
          // outline
          outlinedBg: "var(--colorSurfaceDefault)",
          outlinedBorder: "var(--colorSystemColorsDanger500)",
          outlinedHoverBg: "var(--colorSystemColorsDanger200)",
          outlinedActiveBg: "var(--colorSystemColorsDanger400)",
          outlinedColor: "var(--colorSystemColorsDanger500)",
          outlinedDisabledColor: "var(--colorDisabledText)",
          outlinedDisabledBorder: "var(--colorDisabledStroke)",
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
  // variants: {
  //   solidDisabled: {
  //     primary: {
  //       borderWidth: "1px", // a style property can be added like this, but styleOverrides are often preferred to modify styles
  //     },
  //   },
  // },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.disabled &&
            ownerState.variant === "solid" && {
              border: "1px solid", // styles can be modified like this on specific variants, etc.
              // fontSize: theme.vars.fontSize.lg, // css vars are available in theme.vars.*, like eg. 'var(--joy-fontSize-lg)'
            }),
        }),
      },
    },
  },
});
