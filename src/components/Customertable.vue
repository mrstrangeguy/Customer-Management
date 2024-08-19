<template>
  <table class="relative w-full table-fixed overflow-auto">
    <thead
      class="z-100 border border-b-0 border-[#e0e0e0] outline outline-1 outline-[#e0e0e0] sticky top-0 bg-[#fff] z-40"
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
              'inline-block default-icon cursor-pointer relative after:block after:transition-all after:duration-300 after:absolute after:w-8 after:h-8 after:left-[50%] after:top-[50%] after:mt-[-16px] after:ml-[-16px] after:rounded-full align-middle w-4 h-4 rounded-sm': true,
              'border-2 border-[#0000008a]':
                !isAllCheckboxesEnabled && !isAnyCheckboxesEnabled,
              'after:scale-50': !isAllCheckboxesEnabled,
              [`after:bg-[#03a6ef1a] after:scale-100 before:relative befoe:z-50 before:content-[''] before:block before:h-[14px] before:w-[14px]  bg-[#03a9f4] border-0 before:block before:relative before:top-[50%] before:mt-[-7px] before:ml-[-7px] before:right-[-50%] before:h-[14px] before:w-[14px] before:text-[14px] before:leading-[14px] before:text-[#fff] before:content-[''] text-center`]:
                isAllCheckboxesEnabled,
              [`before:relative before:block  bg-[#03a9f4] border-0 before:block before:relative  before:text-[#fff] before:content-[''] before:text-base before:w-2.5 before:h-[2px] before:bg-[#fff] before:top-[50%] before:left-[50%] before:ml-[-5px] before:mt-[-1px] leading-[0px]  text-center`]:
                !isAllCheckboxesEnabled && isAnyCheckboxesEnabled,
            }"
          />
        </th>
        <th
          @click="sortCustomerTable(index)"
          v-for="(userAttribute, index) in userAttributes"
          :class="{
            'group py-3 px-[11px] leading-[16px] cursor-pointer hover:bg-[#f2f2f2] text-left': true,
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
      <template v-for="(userDetail, index) in userDetails">
        <tr
          @click="selectContact(index)"
          :class="{
            'border-b border-b-[#e0e0e0] cursor-pointer': true,
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
                'inline-block default-icon cursor-pointer relative after:block after:transition-all after:absolute after:w-8 after:h-8 after:left-[50%] after:top-[50%] after:mt-[-16px] after:ml-[-16px] after:rounded-full align-middle w-4 h-4 rounded-sm': true,
                'border-2 border-[#0000008a] after:scale-50':
                  !userDetail.isChecked,
                [`after:bg-[#03a6ef1a] after:scale-100 before:relative before:content-[''] before:block before:h-[14px] before:w-[14px]  bg-[#03a9f4] border-0 before:block before:relative before:top-[50%] before:mt-[-7px] before:ml-[-7px] before:right-[-50%] before:h-[14px] before:w-[14px] before:text-[14px] before:leading-[14px] before:text-[#fff] before:content-[''] text-center`]:
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
          <td
            class="max-[448px]:hidden py-2.5 px-[11px] border-b border-b-[#e0e0e0]"
          >
            <span class="text-[13px] leading-4">{{ userDetail.company }}</span>
          </td>
          <td
            class="max-[750px]:hidden py-2.5 px-[11px] border-b border-b-[#e0e0e0]"
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
            class="max-[620px]:hidden py-2.5 px-[11px] border-b border-b-[#e0e0e0]"
          >
            <span class="text-[13px] leading-4">{{
              userDetail.assignedto
            }}</span>
          </td>
          <td
            class="max-[850px]:hidden py-2.5 px-[11px] border-b border-b-[#e0e0e0]"
          >
            <span class="text-[13px] leading-4">{{ userDetail.phone }}</span>
          </td>
          <td
            class="max-[1372px]:hidden py-2.5 px-[11px] border-b border-b-[#e0e0e0]"
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
                <div class="text-[13px] leading-[26px] px-3">ACME</div>
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
                    class="before:w-2.5 before:h-2.5 before:mr-[5px] before:rounded-full before:inline-block text-[13px] leading-4 before:bg-[#2eb52c] text-[#2eb52c]"
                    >Salaried</span
                  >
                </div>
              </div>
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[850px]:pl-5 max-[850px]:pr-0 max-[850px]:pl-0 min-[620px]:hidden"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Assigned to</label
                >
                <div class="text-[13px] leading-[26px] px-3">John Heart</div>
              </div>
              <div
                class="pr-5 pb-2.5 grow shrink basis-0 max-[850px]:pl-5 max-[850px]:pr-0 max-[850px]:pl-0"
              >
                <label
                  class="block text-xs leading-[15.4284px] text-[#00000099] px-3 pb-0.5"
                  >Email</label
                >
                <div class="text-[13px] leading-[26px] px-3">
                  arthurm@dx-email.com
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
                  +1(310)555-8583
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

type UserDetail = {
  isChecked: boolean;
  isSelected: boolean;
  isResponsiveSelected: boolean;
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

  if (selectedAttributeObject.value.order === 1)
    selectedAttributeObject.value.order = -1;
  else selectedAttributeObject.value.order = 1;
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

//"Name","Company","Status","Assigned to","Phone","Email"
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

<style scoped>
.hey {
  color: #0000008a;
  color: #fafafa;
  color: #00000099;
}
</style>
