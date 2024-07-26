import React from "react";
import JoyButton, { type ButtonProps } from "@mui/joy/Button";

type ButtonBaseProps = Pick<
  ButtonProps,
  "variant" | "size" | "color" | "disabled" | "fullWidth"
>;

export interface CustomButtonProps extends ButtonBaseProps {
  label: string;
}

export const Button = ({ label, ...rest }: CustomButtonProps) => (
  <JoyButton {...rest}>{label}</JoyButton>
);
