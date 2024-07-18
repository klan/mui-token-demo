import React from "react";
import Button, { type ButtonProps } from "@mui/joy/Button";

type ButtonBaseProps = Pick<
  ButtonProps,
  "variant" | "size" | "color" | "disabled" | "fullWidth"
>;

export interface CustomButtonProps extends ButtonBaseProps {
  label: string;
}

export const CustomButton = ({ label, ...rest }: CustomButtonProps) => (
  <Button {...rest}>{label}</Button>
);
