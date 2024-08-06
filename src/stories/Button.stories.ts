import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../components/Button.vue";

interface buttonArgs {
  text?: string;
  icon?: string;
  variant?: string;
  bgColor?: string;
}

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args: buttonArgs) => ({
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
  },
};

export const Secondary: Story = {
  render: (args: buttonArgs) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"/>',
  }),
  args: {
    text: "details",
    variant: "Secondary",
  },
};

export const Icon: Story = {
  render: (args: buttonArgs) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args"/>',
  }),
  args: {
    icon: "dx-icon dx-icon-moon",
    variant: "Icon",
  },
};
