import React from "react";
import JoyCard, { type CardProps } from "@mui/joy/Card";

type CardBaseProps = Pick<
  CardProps,
  "color" | "invertedColors" | "size" | "variant" | "children"
>;

export interface CustomCardProps extends CardBaseProps {}

export const Card = ({ children, ...rest }: CustomCardProps) => (
  <JoyCard {...rest}>{children}</JoyCard>
);
