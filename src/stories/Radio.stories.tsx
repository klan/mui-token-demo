import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@/components/Radio";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Demo: Story = {
  args: {
    label: "Hello",
  },
};

export const Colors: Story = {
  render: () => (
    <>
      <Radio label="Primary" color="primary" />
      <Radio label="Danger" color="danger" />
    </>
  ),
};
