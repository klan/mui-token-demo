import type { Meta, StoryObj } from "@storybook/react";
import { CustomButtonWithIcon } from "../components/ButtonWithIcon";
import { IconNames } from "../utils/IconMapper";

/**
 * A custom button component using Material-UI's Button.
 *
 * Use this component to render a button with various styles and colors.
 */
const meta: Meta<typeof CustomButtonWithIcon> = {
  title: "Button with icon",
  component: CustomButtonWithIcon,
  tags: ["autodocs"], // This tag enables autodocs
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

/**
 * The primary button variant.
 */
export const AddIcon: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
    color: "primary",
    icon: "add",
  },
};

/**
 * The secondary button variant.
 */
export const DeleteIcon: Story = {
  args: {
    label: "Secondary Button",
    variant: "outlined",
    color: "secondary",
    icon: "delete",
  },
};

export const NotifyIcon: Story = {
  args: {
    label: "Notify",
    variant: "contained",
    color: "secondary",
    icon: "notify",
    size: "small"
  }
};
