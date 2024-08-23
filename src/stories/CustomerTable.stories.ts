import type { Meta, StoryObj } from "@storybook/vue3";
import CustomerTable from "../components/CustomerTable.vue";
import uiData from "../data/uiData.json"
import usersData from "../data/usersData.json"

const {userAttributes} = uiData.usersPageData
const {users} = usersData.userDetails

const meta: Meta<typeof CustomerTable> = {
  component: CustomerTable,
};

export default meta;
type Story = StoryObj<typeof CustomerTable>;

export const Primary: Story = {
  args: {
    userAttributes,
    usersDetails:users
  },
};
