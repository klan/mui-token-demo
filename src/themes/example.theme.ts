import {
  extendTheme,
  // type PaletteRange
} from "@mui/joy/styles";

/*
 * Adding to palette: https://mui.com/joy-ui/customization/theme-colors/#adding-color-tokens
 * Removing from palette: https://mui.com/joy-ui/customization/theme-colors/#removing-the-default-tokens
 */

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    primary: true;
    // secondary: true;
    danger: true;
    neutral: false;
    success: false;
    warning: false;
  }
  // interface Palette {
  //   // this will make the node `secondary` configurable in `extendTheme` and add `secondary` to the theme's palette.
  //   secondary: PaletteRange;
  // }
}

declare module "@mui/joy/Button" {
  interface ButtonPropsVariantOverrides {
    solid: true;
    outlined: true;
    soft: false;
    plain: false;
  }
}


export const theme = extendTheme({
  cssVarPrefix: "demo", // using 'demo' as namespace for css vars
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: "var(--colorSurfaceDefault)",
        },
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
          // soft
          softBg: undefined,
          softColor: undefined,
          softHoverBg: undefined,
          softActiveBg: undefined,
          softActiveColor: undefined,
          softDisabledBg: undefined,
          softDisabledColor: undefined,
          // plain
          plainColor: undefined,
          plainHoverBg: undefined,
          plainActiveBg: undefined,
          plainDisabledColor: undefined,
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
          // soft
          softBg: undefined,
          softColor: undefined,
          softHoverBg: undefined,
          softActiveBg: undefined,
          softActiveColor: undefined,
          softDisabledBg: undefined,
          softDisabledColor: undefined,
          // plain
          plainColor: undefined,
          plainHoverBg: undefined,
          plainActiveBg: undefined,
          plainDisabledColor: undefined,
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: "var(--colorSurfaceInverse)",
        },
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
          solidBg: "var(--colorBrandColorsYellow500)",
          solidHoverBg: "var(--colorBrandColorsYellow400)",
          solidActiveBg: "var(--colorBrandColorsYellow500)",
          solidColor: "var(--colorTextInverse)",
          solidDisabledBg: "var(--colorDisabledSurface)",
          solidDisabledColor: "var(--colorDisabledText)",
          solidDisabledBorder: "var(--colorDisabledStroke)",
          // outline
          outlinedBg: "var(--colorSurfaceDefault)",
          outlinedBorder: "var(--colorBrandColorsYellow400)",
          outlinedHoverBg: "var(--colorBrandColorsYellow100)",
          outlinedActiveBg: "var(--colorBrandColorsYellow400)",
          outlinedColor: "var(--colorBrandColorsYellow400)",
          outlinedDisabledColor: "var(--colorDisabledText)",
          outlinedDisabledBorder: "var(--colorDisabledStroke)",
          // soft
          softBg: undefined,
          softColor: undefined,
          softHoverBg: undefined,
          softActiveBg: undefined,
          softActiveColor: undefined,
          softDisabledBg: undefined,
          softDisabledColor: undefined,
          // plain
          plainColor: undefined,
          plainHoverBg: undefined,
          plainActiveBg: undefined,
          plainDisabledColor: undefined,
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
          // soft
          softBg: undefined,
          softColor: undefined,
          softHoverBg: undefined,
          softActiveBg: undefined,
          softActiveColor: undefined,
          softDisabledBg: undefined,
          softDisabledColor: undefined,
          // plain
          plainColor: undefined,
          plainHoverBg: undefined,
          plainActiveBg: undefined,
          plainDisabledColor: undefined,
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
