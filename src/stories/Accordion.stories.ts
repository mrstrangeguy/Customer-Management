import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "../components/Accordion.vue";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  args: {
    text: "ALL",
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
        <OptionsDropdown v-bind="args">
     <template v-slot:dropdown-items>
      <div class="w-[94.97px] hover:bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
       <div class="w-[94.97px] hover:bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
       <div class="w-[94.97px] hover:bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
       <div class="w-[94.97px] hover:bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
    </template>
        </OptionsDropdown>
        `,
  }),
};

export const Secondary: Story = {
  args: {
   text:"This is text"
  },
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args };
    },
    template: `
    <options-dropdown
    icon="dx-icon dx-icon-export"
    arrow-icon="dx-icon dx-icon-spindown dx-icon-right"
    >
    <template v-slot:dropdown-items>
      <div class="mt-1">
        <div
          class="flex items-center text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
        >
          <div class="w-[29px]">
            <i
              class="default-icon font-medium text-[#0000008a] w-[18px] h-[18px] block dx-icon dx-icon-xlsxfile dx-list-item-icon text-[18px] leading-[18px]"
            ></i>
          </div>
          <div class="leading-[15px] text-nowrap">Export all data to Excel</div>
        </div>
         <div
          class="flex items-center text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px] cursor-pointer hover:bg-[rgba(0,0,0,.08)]"
        >
          <div class="w-[29px]">
            <i
              class="default-icon font-medium text-[#0000008a] w-[18px] h-[18px] block dx-icon dx-icon-xlsxfile dx-list-item-icon text-[18px] leading-[18px]"
            ></i>
          </div>
          <div class="leading-[15px] text-nowrap">Export selected rows to Excel</div>
        </div>
      </div>
    </template>
  </options-dropdown> 
    `,
  }),
};
