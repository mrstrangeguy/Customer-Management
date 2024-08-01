import { setup, type Meta, type StoryObj } from '@storybook/vue3';
import OptionsDropdown from '../components/OptionsDropdown.vue';

const meta = {
    component:OptionsDropdown,
    tags:['autodocs'],
    args:{
    text: 'ALL',
    arrowIcon:'dx-icon dx-icon-spindown dx-icon-right'
    },
    
} satisfies Meta<typeof OptionsDropdown>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        text:'ALL'
    },
    render:(args) => ({
    components:{OptionsDropdown},
    setup() {
     return {args}
    },
    template:`
    <OptionsDropdown v-bind="args">
    <template v-slot:dropdown-items>
    <p :style="{color:'blue'}">This is content</p>
    </template>
    </OptionsDropdown>
    `
    })
    
}
export const Primary1: Story = {
    args: {
        text:'ALL2'
    },
  
}
