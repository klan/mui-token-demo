import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Demo: Story = {
  args: {
    label: "Hello",
  },
};

export const Colors: Story = {
  render: () => (
    <>
      <Checkbox label="Primary" color="primary" />
      <Checkbox label="Danger" color="danger" />
    </>
  ),
};
