import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components/Button";

const meta: Meta<typeof CustomButton> = {
  title: "Button",
  component: CustomButton,
  tags: ["autodocs"],
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
    variant: "contained",
    color: "primary",
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
      <CustomButton label="Primary" variant="contained" color="primary" />
      <CustomButton label="Secondary" variant="contained" color="secondary" />
      <CustomButton label="Success" variant="contained" color="success" />
      <CustomButton label="Info" variant="contained" color="info" />
      <CustomButton label="Warning" variant="contained" color="warning" />
      <CustomButton label="Error" variant="contained" color="error" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <CustomButton label="Small" variant="contained" size="small" />
      <CustomButton label="Medium" variant="contained" size="medium" />
      <CustomButton label="Large" variant="contained" size="large" />
    </>
  ),
};
