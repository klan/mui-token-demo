import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components/Button";

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
      <CustomButton label="Contained" variant="contained" />
      <CustomButton label="Outlined" variant="outlined" />
      <CustomButton label="Text" variant="text" />
    </>
  ),
};

export const Colors: Story = {
  render: () => (
    <>
      <CustomButton label="Primary" color="primary" />
      <CustomButton label="Secondary" color="secondary" />
      <CustomButton label="Success" color="success" />
      <CustomButton label="Info" color="info" />
      <CustomButton label="Warning" color="warning" />
      <CustomButton label="Error" color="error" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <CustomButton label="Small" size="small" />
      <CustomButton label="Medium" size="medium" />
      <CustomButton label="Large" size="large" />
    </>
  ),
};
