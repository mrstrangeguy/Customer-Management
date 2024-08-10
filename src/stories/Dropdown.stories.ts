import type { Meta, StoryObj } from "@storybook/vue3";
import Dropdown from "../components/Dropdown.vue";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    headerStyle: "py-[9px] pr-4 bg-[#0000000a]",
    mainIcon:
      "dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center",
    textStyle: "text-[13px] font-bold leading-[15px]",
    text: "CRM",
    arrowIcon: "text-[18px] block h-[18px] leading-[18px]",
  },
};

export const Secondary: Story = {
  args: {
    containerStyle: "shadow-[0_2px_4px_0_rgba(0,0,0,.2)]",
    headerStyle: "py-1.5 pl-[11px] pr-2.5 text-[13px] min-h-10",
    arrowIcon: "text-base text-[rgba(0, 0, 0, 0.87)] font-normal leading-4",
    text: "Opportunities",
  },
};
