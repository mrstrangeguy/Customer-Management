import type { Meta, StoryObj } from "@storybook/vue3";

import Dropdown from "../components/Dropdown.vue";
import uiData from "../data/uiData.json";

const { userStatuses } = uiData.usersPageData.filterDropDown;

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DropdownComponent: Story = {
  args: {
    text: "ALL",
    headerStyle: "hover:bg-slate-200 py-1.5 pl-3 pr-2",
    dropDownItems: userStatuses,
  },
  render: (args) => ({
    components: { Dropdown },
    setup() {
      return { args };
    },
    template: `
        <Dropdown v-bind="args" />
        `,
  }),
};
