import React, { type HTMLAttributes } from "react";
import JoyButton, { type ButtonProps } from "@mui/joy/Button";

type ButtonBaseProps = Pick<
  ButtonProps,
  "variant" | "size" | "color" | "disabled" | "fullWidth"
> &
  HTMLAttributes<HTMLButtonElement>;

export interface CustomButtonProps extends ButtonBaseProps {}

export const Button = ({ children, ...rest }: CustomButtonProps) => (
  <JoyButton {...rest}>{children}</JoyButton>
);
