import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Send",
    variant: "primary",
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Outline: Story = {
  args: { variant: "outline", label: "Outline" },
};
export const Destructive: Story = {
  args: { variant: "destructive", label: "Delete" },
};
export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};
export const WithIconRight: Story = {
  args: {
    label: "Send",
    iconRight: true,
    icon: (
        <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
          <path d="m4.497 20.835l16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202z" />
        </svg>
    ),
  },
};
