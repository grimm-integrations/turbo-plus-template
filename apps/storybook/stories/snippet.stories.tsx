import { Snippet } from "@turboplus/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Snippet> = {
  title: "Snippet",
  tags: ["autodocs"],
  component: Snippet,
};

export default meta;

type Story = StoryObj<typeof Snippet>;

export const Normal: Story = {
  args: {
    children: "yarn add turbo",
  },
};
