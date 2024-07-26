import React from "react";
import JoyCheckbox, { type CheckboxProps } from "@mui/joy/Checkbox";

type CheckboxBaseProps = Pick<CheckboxProps, "label" | "color" | "disabled">;

export interface CustomCheckboxProps extends CheckboxBaseProps {}

export const Checkbox = ({ ...rest }: CustomCheckboxProps) => (
  <JoyCheckbox {...rest} />
);
