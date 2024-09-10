import type { Meta, StoryObj } from "@storybook/vue3";
import IconTextField from "../components/IconTextField.vue";

const meta: Meta<typeof Text> = {
  component: IconTextField,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Position",
    description: "ACME",
    descriptionColor: "#03a9f4",
  },
};

export const Secondary: Story = {
  args: {
    icon: "dx-icon dx-icon-tel",
    description: "sample5@gmail.com",
  },
};
