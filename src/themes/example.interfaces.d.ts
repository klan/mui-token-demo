// import type { PaletteRange } from "@mui/joy/styles";

export declare module "@mui/joy/styles" {
  // overriding global types from https://github.com/mui/material-ui/tree/master/packages/mui-joy/src/styles/types
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
  interface VariantPropOverrides {
    solid: false;
    outlined: true;
    soft: false;
    plain: false;
  }
}

export declare module "@mui/joy/Button" {
  // overriding component types from https://github.com/mui/material-ui/blob/master/packages/mui-material/src/Button/Button.d.ts
  interface ButtonPropsVariantOverrides {
    solid: true;
    outlined: true;
    soft: false;
    plain: false;
  }
}

export declare module "@mui/joy/Input" {
  interface InputPropsSizeOverrides {
    sm: false;
    md: true;
    lg: false;
  }
}

export declare module "@mui/joy/Checkbox" {
  interface InputPropsSizeOverrides {
    sm: false;
    md: true;
    lg: false;
  }
}

export declare module "@mui/joy/Radio" {
  interface InputPropsSizeOverrides {
    sm: false;
    md: true;
    lg: false;
  }
}
