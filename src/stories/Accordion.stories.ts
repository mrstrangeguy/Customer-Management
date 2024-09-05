import type { Meta, StoryObj } from "@storybook/vue3";

import Accordion from "../components/Accordion.vue";
import { DropdownVariants } from "../Constants";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  argTypes: {
    variant: {
      options: Object.values(DropdownVariants),
      control: { type: "select" },
    },
  },
  args: {
    mainIcon:
      "dx-icon dx-icon-user block text-black w-12 h-[18px] leading-[18px] text-[18px] text-center",
    text: "CRM",
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
  <Dropdown v-bind="args">
<template v-slot:dropdown-items>
  <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
    <span class="block pl-12 text-[13px] leading-[16.7141px]"
      >Contact List</span
    >
  </div>
  <div class="py-[9px] pr-4 flex items-center bg-[#0000000a]">
    <span class="block pl-12 text-[13px] leading-[16.7141px]"
      >Contact List</span
    >
  </div>
</template>
</Dropdown>
  `,
  }),
};

export const Secondary: Story = {
  argTypes: {
    variant: {
      options: Object.values(DropdownVariants),
      control: { type: "select" },
    },
  },
  args: {
    variant: DropdownVariants.Secondary,
    text: "Opportunities",
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
<Dropdown
v-bind="args"
>
<template v-slot:dropdown-items>
  <div class="p-[11px]">
    <div class="pb-2.5">
      <span class="block text-[13px] leading-[16.7141px]"
        >Incoming Request for Conference Room</span
      >
      <span class="block text-[13px] leading-[16.7141px]">$2,115</span>
    </div>
    <div class="pb-[10px]">
      <span class="block text-[13px] leading-[16.7141px]"
        >Incoming Request for Conference Room</span
      >
      <span class="block text-[13px] leading-[16.7141px]">$2,115</span>
    </div>
  </div>
</template>
</Dropdown>
    `,
  }),
};
