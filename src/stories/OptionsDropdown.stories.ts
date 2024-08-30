import type { Meta, StoryObj } from "@storybook/vue3";
import OptionsDropdown from "../components/OptionsDropdown.vue";

const meta: Meta<typeof OptionsDropdown> = {
  component: OptionsDropdown,
  parameters: {
    slots: {
      "dropdown-items": {
        description: "Default slot",
        components: { OptionsDropdown },
        template: `<OptionsDropdown>
            <template v-slot:dropdown-items>
            <div>This is new</div>
            </template>
            </OptionsDropdown>`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OptionsDropdown>;

export const Primary: Story = {
  args: {
    text: "ALL",
    arrowIcon: "dx-icon dx-icon-spindown dx-icon-right",
  },
  render: (args) => ({
    components: { OptionsDropdown },
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
    icon: "dx-icon dx-icon-export",
    arrowIcon: "dx-icon dx-icon-spindown dx-icon-right",
  },
  render: (args) => ({
    components: { OptionsDropdown },
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

export const Profile: Story = {
  args: {
    profileUrl:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png",
  },
  render: (args) => ({
    components: { OptionsDropdown },
    setup() {
      return { args };
    },
    template: `
    <OptionsDropdown v-bind="args" class="ml-[80px]">
    <template v-slot:dropdown-items>
    <div class="py-2.5 px-[11px] border-b border-[#e0e0e0]">
    <span class="block font-normal text-nowrap font-sm leading-[17.9998px] text-[14px] text-center">John Heart</span>
    </div>
    <div class="my-1">
    <div class="px-[11px] pt-2.5 pb-[9px] flex items-center">
    <div class="w-[29px] h-[18px]">
    <i class="default-icon dx-icon dx-icon-runner dx-list-item-icon leading-[18px] w-[18px] h-[18px] text-[18px] mr-4"/>
    </div>
    <span class="block leading-4 text-[13px]">Logout</span>
    </div>
    </div>
    </template>
    </OptionsDropdown>
    `,
  }),
};
