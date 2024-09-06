import type { Meta, StoryObj } from "@storybook/vue3";
import Search from "../components/SearchInput.vue";

const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {
    placeholderText: "Search",
  },
};
