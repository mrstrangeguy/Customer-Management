import type { Meta, StoryObj } from "@storybook/vue3";

import { ButtonsProps } from "../types/ButtonProps";
import Button from "../components/Button.vue";
import { ButtonVariants } from "../Constants";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: "select" },
    },
  },
  render: (args: ButtonsProps) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: "Add Contact",
    icon: "dx-icon dx-icon-plus",
    bgColor: "#03a9f4",
    isRounded: false,
    buttonStyle: "!px-1.5 text-white",
  },
};

export const Outlined: Story = {
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: "select" },
    },
  },
  render: (args: ButtonsProps) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"/>',
  }),
  args: {
    text: "details",
    variant: ButtonVariants.Outlined,
    isRounded: false,
    hoverBg: "#f2f2f2",
    buttonStyle: "text-black",
  },
};
