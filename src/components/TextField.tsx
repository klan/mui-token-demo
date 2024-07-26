import React from "react";
import JoyInput, { type InputProps } from "@mui/joy/Input";

type TextFieldBaseProps = Pick<InputProps, "color" | "disabled" | "fullWidth">;

export interface TextFieldProps extends TextFieldBaseProps {
  placeholder?: string;
}

export const TextField = ({ ...rest }: TextFieldProps) => (
  <JoyInput {...rest} />
);
