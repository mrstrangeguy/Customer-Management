<template>
  <table class="relative w-full table-fixed h-[100vh] overflow-auto">
    <thead
      class="border border-b-0 border-[#e0e0e0] outline outline-1 outline-[#e0e0e0] sticky top-0 bg-[#fff] z-40"
      role="presentation"
    >
      <tr role="row" class="bg-[#fff] relative">
        <th
          class="w-[38px] min-w-[38px] max-w-[70px] text-center p-0 bg-[#fff]"
          role="columnheader"
        >
          <i
            @click="
              isAllCheckboxesEnabled
                ? disableAllCheckboxes()
                : enableAllCheckboxes()
            "
            :class="{
              'inline-block default-icon cursor-pointer relative after:block after:transition-all after:scale-50 after:absolute after:w-8 after:h-8 after:left-[50%] after:top-[50%] after:mt-[-16px] after:ml-[-16px] after:rounded-full align-middle w-4 h-4 border-2 border-[#0000008a] rounded-sm': true,
              [`after:bg-[#03a6ef1a] after:scale-100`]: isAllCheckboxesEnabled,
              [`before:relative befoe:z-50 before:content-[''] before:block before:h-[14px] before:w-[14px]  bg-[#03a9f4] border-0 before:block before:relative before:top-[50%] before:mt-[-7px] before:ml-[-7px] before:right-[-50%] before:h-[14px] before:w-[14px] before:text-[14px] before:leading-[14px] before:text-[#fff] before:content-[''] text-center`]:
                isAllCheckboxesEnabled,
              [`before:relative before:block  bg-[#03a9f4] border-0 before:block before:relative  before:text-[#fff] before:content-[''] before:text-base before:w-2.5 before:h-[2px] before:bg-[#fff] before:top-[50%] before:left-[50%] before:ml-[-5px] before:mt-[-1px] leading-[0px]  text-center`]:
                (!isAllCheckboxesEnabled && isAnyCheckboxesEnabled),
            }"
          />
        </th>
        <th
          @click="sortCustomerTable(index)"
          v-for="(userAttribute, index) in userAttributes"
          class="group py-3 px-[11px] leading-[16px] cursor-pointer hover:bg-[#f2f2f2] text-left"
          role="columnheader"
        >
          <span
            :class="{
              'inline-block z-10 align-top text-[#00000099] text-[13px] leading-4 font-medium mr-[3px] group-hover:text-[#000000de]': true,
              'text-[#000000de]': selectedAttributeObject.index === index,
            }"
            >{{ userAttribute }}</span
          >
          <i
            v-if="isArrowIconPresent(index)"
            :class="{
              'inline-block w-[15px] align-top text-[15px] text-[#000000de] group-hover:text-[#00000061] font-normal h-[15px] leading-[15px] default-icon dx-sort': true,
              'dx-sort-up': isDownArrowPresent(index),
              'dx-sort-down': !isDownArrowPresent(index),
            }"
          />
          <i
            class="inline-block align-top default-icon dx-header-filter-empty text-[15px] w-[15px] h-[15px]"
          />
        </th>
      </tr>
    </thead>

    <tbody class="border-t-0 border border-t-0">
      <tr
        v-for="(userDetail, index) in userDetails"
        @click="selectContact(index)"
        :class="{
          'border-b border-b-transparent bg-[#fff]': true,
          'bg-[#03a9f40a]': userDetail.isChecked,
          'bg-[#cdeefd]': userDetail.isSelected,
        }"
      >
        <td
          @click="addContact(index)"
          class="w-[38px] text-center border-b border-b-[#e0e0e0]"
          role="columnheader"
        >
          <i
            :class="{
              'inline-block default-icon cursor-pointer relative after:block after:transition-all after:scale-50 after:absolute after:w-8 after:h-8 after:left-[50%] after:top-[50%] after:mt-[-16px] after:ml-[-16px] after:rounded-full align-middle w-4 h-4 border-2 border-[#0000008a] rounded-sm': true,
              [`after:bg-[#03a6ef1a] after:scale-100`]: false,
              [`before:relative before:content-[''] before:block before:h-[14px] before:w-[14px]  bg-[#03a9f4] border-0 before:block before:relative before:top-[50%] before:mt-[-7px] before:ml-[-7px] before:right-[-50%] before:h-[14px] before:w-[14px] before:text-[14px] before:leading-[14px] before:text-[#fff] before:content-[''] text-center`]:
                userDetail.isChecked,
            }"
          />
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <div class="text-[13px] leading-4">
            {{ userDetail.description.name }}
          </div>
          <div class="text-xs leading-4 text-[#00000099]">
            {{ userDetail.description.position }}
          </div>
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <span class="text-[13px] leading-4">{{ userDetail.company }}</span>
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <span
            :class="{
              'before:w-2.5 before:h-2.5 before:mr-[5px] before:rounded-full before:inline-block text-[13px] leading-4': true,
              [getStatusTextColor(userDetail.status)]: true,
            }"
            >{{ userDetail.status }}</span
          >
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <span class="text-[13px] leading-4">{{ userDetail.assignedto }}</span>
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <span class="text-[13px] leading-4">{{ userDetail.phone }}</span>
        </td>
        <td class="py-2.5 px-[11px] border-b border-b-[#e0e0e0]">
          <span class="text-[13px] leading-4">{{ userDetail.email }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

type UserOpportunityItem = {
  text: string;
  price: string;
};
type UserOpportunities = {
  title: string;
  items: UserOpportunityItem[];
};

type ActivityItemDetail = {
  date: string;
  name: string;
};

type ActivityItem = {
  status: string;
  details: ActivityItemDetail;
};

type Activities = {
  title: string;
  items: ActivityItem[];
};

type UserDetail = {
  isChecked: boolean;
  isSelected: boolean;
  description: {
    name: string;
    position: string;
  };
  company: string;
  status: string;
  assignedto: string;
  phone: string;
  email: string;
  opportunities: UserOpportunities;
  activities: Activities;
};

type usersData = {
  userAttributes: string[];
  usersDetails: UserDetail[];
};

//props
const props = defineProps<usersData>();

//ref
const userAttributes = ref<string[]>();
const userDetails = ref<UserDetail[]>();
const selectedAttributeObject = ref({ index: 0, order: 1 });

onMounted(() => {
  userAttributes.value = props.userAttributes;
  userDetails.value = props.usersDetails;
  sortCustomerTable(0)
});

//computed
const isAllCheckboxesEnabled = computed(() =>
  userDetails.value?.every((elem: UserDetail) => elem.isChecked)
);

const isAnyCheckboxesEnabled = computed(() =>
  userDetails.value?.some((elem: UserDetail) => elem.isChecked)
);

//functions
const isArrowIconPresent = (index: number) => {
  return selectedAttributeObject.value.index === index;
};

const sortCustomerTable = (index: number) => {
  if (!userAttributes.value || !userDetails.value) return;

  selectedAttributeObject.value.index = index;

  const attribute = userAttributes.value[index]
    .toLowerCase()
    .replace(/\s/g, "");

  userDetails.value.sort((a: UserDetail, b: UserDetail) => {
    const value1 =
      a[attribute as keyof typeof a] ||
      a.description[attribute as keyof typeof a.description];
    const value2 =
      b[attribute as keyof typeof b] ||
      b.description[attribute as keyof typeof b.description];

    if (selectedAttributeObject.value.order === 1)
      return value1 > value2 ? 1 : -1;
    return value1 < value2 ? 1 : -1;
  });
  //    console.log(userDetails.value)

  if (selectedAttributeObject.value.order === 1)
    selectedAttributeObject.value.order = -1;
  else selectedAttributeObject.value.order = 1;

  //    console.log(selectedAttributeObject.value)
};

const isDownArrowPresent = (index: number) => {
  return (
    selectedAttributeObject.value.index === index &&
    selectedAttributeObject.value.order === 1
  );
};

const enableAllCheckboxes = () => {
  userDetails.value?.forEach((elem: UserDetail) => (elem.isChecked = true));
};

const disableAllCheckboxes = () => {
  userDetails.value?.forEach((elem: UserDetail) => (elem.isChecked = false));
};

const addContact = (index: number) => {
  if (!userDetails.value) return;
  userDetails.value[index].isChecked = !userDetails.value[index].isChecked;
};

const selectContact = (index: number) => {
  if (!userDetails.value) return;

  userDetails.value?.forEach((elem) => (elem.isSelected = false));
  userDetails.value[index].isSelected = true;
};

const getStatusTextColor = (text: string) => {
  if (text.toLocaleLowerCase() === "commission") {
    return "before:bg-[#03a9f4] text-[#03a9f4]";
  } else if (text.toLocaleLowerCase() === "terminated") {
    return "before:bg-[#de8e8c] text-[#de8e8c]";
  }
  return "before:bg-[#2eb52c] text-[#2eb52c]";
};
</script>

<style scoped></style>
