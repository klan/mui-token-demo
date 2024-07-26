import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  args: {
    label: "Hello",
  },
};

export const Variants: Story = {
  render: () => (
    <>
      <Button label="Solid" variant="solid" />
      <Button label="Outlined" variant="outlined" />
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Button label="Primary" color="primary" />
      <Button label="Danger" color="danger" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </>
  ),
};
