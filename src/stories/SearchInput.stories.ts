import type { Meta, StoryObj } from "@storybook/vue3";
import SearchInput from "../components/SearchInput.vue";

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {
    placeholder: "Search",
  },
};
