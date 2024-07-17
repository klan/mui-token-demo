import type { Meta, StoryObj } from "@storybook/react";
import { CustomButtonWithIcon } from "../components/ButtonWithIcon";

const meta: Meta<typeof CustomButtonWithIcon> = {
  title: "Button with icon",
  component: CustomButtonWithIcon,
  parameters: {
    docs: {
      description: {
        component:
          "A custom button component using Material-UI's Button. Use this component to render a button with various styles and colors.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomButtonWithIcon>;

export const Demo: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
    color: "primary",
    icon: "add",
  },
};
