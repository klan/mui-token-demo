import React from "react";
import { Button, ButtonProps } from "@mui/material";

type ButtonBaseProps = Pick<
  ButtonProps,
  | "variant"
  | "size"
  | "color"
  | "disabled"
  | "disableRipple"
  | "disableElevation"
  | "centerRipple"
  | "fullWidth"
>;

export interface CustomButtonProps extends ButtonBaseProps {
  label: string;
}

export const CustomButton = ({ label, ...rest }: CustomButtonProps) => (
  <Button {...rest}>{label}</Button>
);
