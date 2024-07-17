import type { ThemeOptions } from "@mui/material";

export const overrides: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
};
