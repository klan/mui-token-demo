import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Demo: Story = {
  args: {
    children: <p>hej</p>,
  },
};
