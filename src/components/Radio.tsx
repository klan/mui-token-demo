import React from "react";
import JoyRadio, { type RadioProps } from "@mui/joy/Radio";

type RadioBaseProps = Pick<RadioProps, "label" | "color" | "disabled">;

export interface CustomRadioProps extends RadioBaseProps {}

export const Radio = ({ ...rest }: CustomRadioProps) => <JoyRadio {...rest} />;
