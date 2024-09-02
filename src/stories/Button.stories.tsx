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
  args: {},
};

export const Variants: Story = {
  render: () => (
    <>
      <Button variant="solid">Solid</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  ),
};
