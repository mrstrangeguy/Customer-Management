import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "../components/Accordion.vue";
import { AccordionVariants } from "../Constants";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  argTypes: {
    variant: {
      options: Object.values(AccordionVariants),
      control: "select",
    },
  },
  args: {
    mainIcon: "dx-icon dx-icon-user",
    text: "ALL",
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
  <Accordion v-bind="args">
<template v-slot:dropdown-items>
  <div class="py-2.25 pr-4 flex items-center bg-zinc-100 hover:bg-zinc-200">
    <span class="block pl-12 text-3.25 leading-4.5">
    Contact List
    </span>
  </div>
  <div class="py-2.25 pr-4 flex items-center bg-zinc-100 hover:bg-zinc-200">
    <span class="block pl-12 text-3.25 leading-4.5">
    Contact List
    </span>
  </div>
</template>
</Accordion>
  `,
  }),
};

export const Secondary: Story = {
  argTypes: {
    variant: {
      options: Object.values(AccordionVariants),
      control: "select",
    },
  },
  args: {
    text: "Opportunities",
    variant: AccordionVariants.Secondary,
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
<Accordion
v-bind="args"
>
<template v-slot:dropdown-items>
  <div class="p-2.75">
    <div class="pb-2.5">
      <span class="block text-3.25 leading-4">
      Incoming Request for Conference Room
      </span>
      <span class="block text-3.25 leading-4">$2,115</span>
    </div>
    <div class="pb-2.5">
      <span class="block text-3.25 leading-4">
      Incoming Request for Conference Room
      </span>
      <span class="block text-3.25 leading-4">$2,115</span>
    </div>
  </div>
</template>
</Accordion>
    `,
  }),
};
