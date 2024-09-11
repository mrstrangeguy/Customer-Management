import type { Meta, StoryObj } from "@storybook/vue3";
import IconTextField from "../components/IconTextField.vue";

const meta: Meta<typeof IconTextField> = {
  component: IconTextField,
};

export default meta;
type Story = StoryObj<typeof IconTextField>;

export const Primary: Story = {
  args: {
    label: "Position",
    text: "ACME",
    textStyle: "text-blue-200",
  },
};

export const Secondary: Story = {
  args: {
    icon: "dx-icon dx-icon-tel",
    label: "sample5@gmail.com",
  },
};
