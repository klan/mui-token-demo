import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "@/components/Button";

const meta: Meta<typeof CustomButton> = {
  title: "Button",
  component: CustomButton,
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

type Story = StoryObj<typeof CustomButton>;

export const Demo: Story = {
  args: {
    label: "Hello",
  },
};

export const Variants: Story = {
  render: () => (
    <>
      <CustomButton label="Solid" variant="solid" />
      <CustomButton label="Outlined" variant="outlined" />
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <CustomButton label="Primary" color="primary" />
      <CustomButton label="Danger" color="danger" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <CustomButton label="Small" size="sm" />
      <CustomButton label="Medium" size="md" />
      <CustomButton label="Large" size="lg" />
    </>
  ),
};
