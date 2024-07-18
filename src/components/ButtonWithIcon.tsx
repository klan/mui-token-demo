import React from "react";
import Button, { type ButtonProps } from "@mui/joy/Button"; // TODO use IconButton?
import { getIconByName, IconNames } from "../utils/IconMapper";

type ButtonBaseProps = Pick<
  ButtonProps,
  "variant" | "size" | "color" | "disabled" | "fullWidth"
>;

export interface CustomButtonProps extends ButtonBaseProps {
  label: string;
  icon?: IconNames;
}

/**
 * CustomButtonWithIcon component using Material-UI's Button.
 *
 * Use this component to render a button with an optional icon.
 */
export const CustomButtonWithIcon = ({
  label,
  icon,
  ...rest
}: CustomButtonProps) => {
  const IconComponent = icon ? getIconByName(icon) : null;

  return (
    <Button {...rest} startDecorator={IconComponent ? <IconComponent /> : null}>
      {label}
    </Button>
  );
};
