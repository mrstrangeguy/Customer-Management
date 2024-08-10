import type {Meta,StoryObj} from "@storybook/vue3"
import OptionsDropdown from "../components/OptionsDropdown.vue"

const meta: Meta<typeof OptionsDropdown> = {
    component: OptionsDropdown,
    parameters:{
    }
};
  
export default meta;
type Story = StoryObj<typeof OptionsDropdown>;

export const Primary:Story = {
    args: {
    text:"ALL",
    arrowIcon:"dx-icon dx-icon-spindown dx-icon-right",
    },
}