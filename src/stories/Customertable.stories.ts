import type { Meta, StoryObj } from "@storybook/vue3";
import Customertable from "../components/Customertable.vue";
import uiData from "../data/uiData.json"
import usersData from "../data/usersData.json"

const {userAttributes} = uiData.usersPageData
const {users} = usersData.userDetails

const meta: Meta<typeof Customertable> = {
  component: Customertable,
};

export default meta;
type Story = StoryObj<typeof Customertable>;

export const Primary: Story = {
  args: {
    userAttributes,
    usersDetails:users
  },
};
