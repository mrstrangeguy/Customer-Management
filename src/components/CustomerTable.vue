<template>
  <table class="relative w-full table-fixed overflow-auto">
    <thead
      class="z-100 border border-b-0 border-[#e0e0e0] outline outline-1 outline-[#e0e0e0] sticky top-0 bg-[#fff] z-40"
      role="presentation"
    >
      <tr role="row" class="bg-white relative">
        <th
          class="w-[38px] min-w-[38px] max-w-[70px] text-center p-0 bg-[#fff]"
          role="columnheader"
        >
          <i
            @click="
              isAllCheckboxesEnabled
                ? toggleCheckboxesVisibility(false)
                : toggleCheckboxesVisibility(true)
            "
            :class="{
              'inline-block default-icon cursor-pointer relative after:block after:transition-all after:duration-300 after:absolute after:w-8 after:h-8 after:left-2 after:top-2 after:-mt-4 after:-ml-4 after:rounded-full align-middle w-4 h-4 rounded-sm': true,
              'border-2 border-default-color':
                !isAllCheckboxesEnabled && !isAnyCheckboxesEnabled,
              'after:scale-50': !isAllCheckboxesEnabled,
              [`after:bg-checkbox-after-selected after:scale-100 before:relative before:z-50 before:content-[''] before:block before:h-3.5 before:w-3.5 bg-checkbox-selected-bg border-0 before:block before:relative before:top-2 before:mt-[-7px] before:ml-[-7px] before:-right-2 before:h-3.5 before:w-3.5 before:text-sm before:leading-[14px] before:text-white before:content-[''] text-center`]:
                isAllCheckboxesEnabled,
              [`before:relative before:block bg-checkbox-selected-bg border-0 before:block before:relative before:text-white before:content-[''] before:text-base before:w-2.5 before:h-0.5 before:bg-white before:top-2 before:left-2 before:ml-[-5px] before:-mt-px leading-zero text-center`]:
                !isAllCheckboxesEnabled && isAnyCheckboxesEnabled,
            }"
          />
        </th>
        <th
          @click="sortCustomerTable(index)"
          v-for="(userAttribute, index) in userAttributes"
          :class="{
            'group py-3 px-[11px] leading-4 cursor-pointer hover:bg-th-hover-color text-left': true,
            [getResponsiveThStyle(userAttribute)]: true,
          }"
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
        <th class="min-[1372px]:hidden w-10"></th>
      </tr>
    </thead>

    <tbody class="border-t-0 border border-y">
      <template v-for="(userDetail, index) in userDetails" :key="userDetail.id">
        <tr
          @click="selectContact(index)"
          :class="{
            'border-b border-b-tr-border cursor-pointer': true,
            'bg-[#03a9f40a]': userDetail.isChecked,
            'bg-[#cdeefd]': userDetail.isSelected,
          }"
        >
          <td
            @click="addContact(index)"
            class="w-[38px] text-center border-b border-b-tr-border"
            role="columnheader"
          >
            <i
              :class="{
                'inline-block default-icon cursor-pointer relative after:block after:transition-all after:absolute after:w-8 after:h-8 after:left-2 after:top-2 after:-mt-4 after:-ml-4 after:rounded-full align-middle w-4 h-4 rounded-sm': true,
                'border-2 border-default-color after:scale-50':
                  !userDetail.isChecked,
                [`after:bg-checkbox-after-selected after:scale-100 before:relative before:content-[''] before:block before:h-3.5 before:w-3.5  bg-checkbox-selected-bg border-0 before:block before:relative before:top-2 before:mt-[-7px] before:ml-[-7px] before:-right-2 before:h-3.5 before:w-3.5 before:text-sm before:leading-[14px] before:text-white before:content-[''] text-center`]:
                  userDetail.isChecked,
              }"
            />
          </td>
          <td class="py-2.5 px-[11px] border-b border-b-tr-border">
            <div class="text-[13px] leading-4">
              {{ userDetail.description.name }}
            </div>
            <div class="text-xs leading-4 text-[#00000099]">
              {{ userDetail.description.position }}
            </div>
          </td>
          <td
            class="max-[448px]:hidden py-2.5 px-[11px] border-b border-b-tr-border"
          >
            <span class="text-[13px] leading-4">{{ userDetail.company }}</span>
          </td>
          <td
            class="max-[750px]:hidden py-2.5 px-[11px] border-b border-b-tr-border"
          >
            <span
              :class="{
                'before:w-2.5 before:h-2.5 before:mr-[5px] before:rounded-full before:inline-block text-[13px] leading-4': true,
                [getStatusTextColor(userDetail.status)]: true,
              }"
              >{{ userDetail.status }}</span
            >
          </td>
          <td
            class="max-[620px]:hidden py-2.5 px-[11px] border-b border-b-tr-border"
          >
            <span class="text-[13px] leading-4">{{
              userDetail.assignedto
            }}</span>
          </td>
          <td
            class="max-[850px]:hidden py-2.5 px-[11px] border-b border-b-tr-border"
          >
            <span class="text-[13px] leading-4">{{ userDetail.phone }}</span>
          </td>
          <td
            class="max-[1372px]:hidden py-2.5 px-[11px] border-b border-b-tr-border"
          >
            <span class="text-[13px] leading-4">{{ userDetail.email }}</span>
          </td>
          <td
            class="min-[1372px]:hidden min-w-10 w-10 text-center"
            @click="openResponsiveContainer(index)"
          >
            <span
              class="default-icon dx-datagrid-adaptive-more text-[18px] text-[#0000008a] text-center align-middle"
            ></span>
          </td>
        </tr>
        <tr v-if="userDetail.isResponsiveSelected" class="min-[1372px]:hidden">
          <td class="bg-[#fafafa] p-4 leading-4 border-y" :colspan="colspan">
            <div class="flex max-[850px]:flex-row-reverse max-[768px]:block">
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[448px]:pl-0 max-[448px]:pr-0 max-[448px]:pl-0 min-[448px]:hidden"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Company</label
                >
                <div class="text-[13px] leading-[26px] px-3">
                  {{ userDetail.company }}
                </div>
              </div>
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[750px]:pl-0 max-[750px]:pr-0 max-[750px]:pl-0 min-[750px]:hidden"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Status</label
                >
                <div class="leading-[26px]">
                  <span
                    :class="{
                      'before:w-2.5 before:h-2.5 before:mr-[5px] before:rounded-full before:inline-block text-[13px] leading-4': true,
                      [getStatusTextColor(userDetail.status)]: true,
                    }"
                    >{{ userDetail.status }}</span
                  >
                </div>
              </div>
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[850px]:pl-0 max-[850px]:pr-0 max-[850px]:pl-0 min-[620px]:hidden"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Assigned to</label
                >
                <div class="text-[13px] leading-[26px] px-3">
                  {{ userDetail.assignedto }}
                </div>
              </div>
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[850px]:pl-0 max-[850px]:pr-0 max-[850px]:pl-0"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Email</label
                >
                <div class="text-[13px] leading-[26px] px-3">
                  {{ userDetail.email }}
                </div>
              </div>
              <div
                class="pl-5 pb-2.5 grow shrink basis-0 min-[850px]:hidden max-[850px]:pr-5 max-[850px]:pl-0"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Phone</label
                >
                <div class="text-[13px] leading-[26px] px-3">
                  {{ userDetail.phone }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

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

type Description = {
  name: string;
  position: string;
};

type UserDetail = {
  id: number;
  isChecked: boolean;
  isSelected: boolean;
  isResponsiveSelected: boolean;
  description: Description;
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

//onMounted
onMounted(() => {
  window.addEventListener("resize", () => {
    getResponsiveColsSpan();
  });
  getResponsiveColsSpan();
  userAttributes.value = props.userAttributes;
  userDetails.value = props.usersDetails;
  sortCustomerTable(0);
});

//onUnMount
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    getResponsiveColsSpan();
  });
});

//ref
const userAttributes = ref<string[]>();
const userDetails = ref<UserDetail[]>();
const selectedAttributeObject = ref({ index: 0, order: 1 });
const colspan = ref<number>(7);

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

  if (selectedAttributeObject.value.order === 1) {
    selectedAttributeObject.value.order = -1;
  } else {
    selectedAttributeObject.value.order = 1;
  }
};

const isDownArrowPresent = (index: number) => {
  return (
    selectedAttributeObject.value.index === index &&
    selectedAttributeObject.value.order === 1
  );
};

const toggleCheckboxesVisibility = (value: boolean) => {
  userDetails.value?.forEach((elem: UserDetail) => (elem.isChecked = value));
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

const openResponsiveContainer = (index: number) => {
  if (!userDetails.value) return;
  userDetails.value.forEach((userDetail, userDetailIndex) => {
    if (userDetail.isResponsiveSelected && index !== userDetailIndex)
      userDetail.isResponsiveSelected = false;
  });
  userDetails.value[index].isResponsiveSelected =
    !userDetails.value[index].isResponsiveSelected;
};

const getStatusTextColor = (text: string) => {
  if (text.toLocaleLowerCase() === "commission") {
    return "before:bg-[#03a9f4] text-[#03a9f4]";
  } else if (text.toLocaleLowerCase() === "terminated") {
    return "before:bg-[#de8e8c] text-[#de8e8c]";
  }
  return "before:bg-[#2eb52c] text-[#2eb52c]";
};

const getResponsiveThStyle = (attribute: string) => {
  const editedAttribute = attribute.toLowerCase().replace(/\s/g, "");

  switch (editedAttribute) {
    case "email":
      return "max-[1372px]:hidden";
    case "phone":
      return "max-[850px]:hidden";
    case "status":
      return "max-[750px]:hidden";
    case "assignedto":
      return "max-[620px]:hidden";
    case "company":
      return "max-[448px]:hidden";
    default:
      return "";
  }
};

const getResponsiveColsSpan = () => {
  if (window.innerWidth <= 1372 && window.innerWidth > 850) {
    colspan.value = 7;
  } else if (window.innerWidth <= 850 && window.innerWidth > 750) {
    colspan.value = 6;
  } else if (window.innerWidth <= 750 && window.innerWidth > 620) {
    colspan.value = 5;
  } else if (window.innerWidth <= 620 && window.innerWidth > 448) {
    colspan.value = 4;
  } else if (window.innerWidth <= 448) {
    colspan.value = 3;
  }
};
</script>

<style scoped></style>
