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
  render: (args: any) => ({
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
