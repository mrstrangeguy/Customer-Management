import type { Meta, StoryObj } from "@storybook/vue3";

import SearchInput from "../components/SearchInput.vue";
import { SearchTypes } from "../Constants";

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  argTypes: {
    type: {
      options: Object.values(SearchTypes),
      control: "select",
    },
  },
  args: {
    placeholder: "Search",
  },
};
