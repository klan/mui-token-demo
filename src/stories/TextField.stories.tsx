import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@/components/TextField";

const meta: Meta<typeof TextField> = {
  title: "TextField",
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Demo: Story = {
  args: {
    placeholder: "Hello",
  },
};

export const Colors: Story = {
  render: () => (
    <>
      <TextField placeholder="Primary" color="primary" />
      <TextField placeholder="Danger" color="danger" />
    </>
  ),
};
