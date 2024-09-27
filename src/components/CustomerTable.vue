<template>
  <table class="relative w-full table-fixed overflow-auto">
    <thead
      class="z-100 border border-b-0 border-table-border outline outline-1 outline-table-border sticky top-0 bg-white z-40"
      role="presentation"
    >
      <tr role="row" class="bg-white relative">
        <th
          class="w-9.5 min-w-9.5 max-w-17.5 text-center p-0 bg-white"
          role="columnheader"
        >
          <i
            @click="
              isAllCheckboxesEnabled
                ? toggleCheckboxesVisibility(false)
                : toggleCheckboxesVisibility(true)
            "
            :class="[
              'inline-block default-icon cursor-pointer icon relative align-middle w-4 h-4 rounded-sm',
              {
                'border-2 border-default-color':
                  !isAllCheckboxesEnabled && !isAnyCheckboxesEnabled,
                'after:scale-50': !isAllCheckboxesEnabled,
                'bg-checkbox-selected-bg border-0 checkbox-icon text-center':
                  isAllCheckboxesEnabled,
                'dash-icon before:relative bg-checkbox-selected-bg border-0 leading-zero text-center':
                  !isAllCheckboxesEnabled && isAnyCheckboxesEnabled,
              },
            ]"
          />
        </th>
        <th
          @click="sortCustomerTable(index)"
          v-for="(userAttribute, index) in userAttributes"
          :class="[
            'group py-3 px-2.75 leading-4 cursor-pointer hover:bg-table-hover-primary text-left',
            getResponsiveTableHeaderStyle(userAttribute),
          ]"
          role="columnheader"
        >
          <span
            :class="[
              'inline-block z-10 align-top text-label text-3.25 leading-4 font-medium mr-0.75 group-hover:text-table-hover-tertiary',
              {
                'text-table-hover-tertiary':
                  selectedAttributeObject.index === index,
              },
            ]"
          >
            {{ userAttribute }}
          </span>
          <i
            v-if="isArrowIconPresent(index)"
            :class="[
              'inline-block w-3.75 align-top text-sm text-table-hover-primary group-hover:text-table-hover-secondary font-normal h-3.75 leading-l3 default-icon dx-sort',
              {
                'dx-sort-up': isDownArrowPresent(index),
                'dx-sort-down': !isDownArrowPresent(index),
              },
            ]"
          />
          <i
            class="inline-block align-top default-icon dx-header-filter-empty text-sm w-3.75 h-3.75 -mt-0.5"
          />
        </th>
        <th class="extra-large:hidden w-10" />
      </tr>
    </thead>
    <tbody class="border-t-0 border border-y">
      <template v-for="(userDetail, index) in userDetails" :key="userDetail.id">
        <tr
          @click="handleRowClick(userDetail, index)"
          :class="[
            'border-b border-b-tr-border cursor-pointer',
            {
              'bg-checked': userDetail.isChecked,
              'bg-selected': userDetail.isSelected,
            },
          ]"
        >
          <td
            @click.stop="addContact(index)"
            class="w-9.5 text-center border-b border-b-tr-border"
            role="columnheader"
          >
            <i
              :class="[
                'inline-block default-icon cursor-pointer relative icon align-middle w-4 h-4 rounded-sm',
                {
                  'checkbox-icon text-center bg-checkbox-selected-bg':
                    userDetail.isChecked,
                  'border-2 border-default-color after:scale-50':
                    !userDetail.isChecked,
                },
              ]"
            />
          </td>
          <td class="py-2.5 px-2.75 border-b border-b-tr-border">
            <div class="text-3.25 leading-4">
              {{ userDetail.description.name }}
            </div>
            <div class="text-xs leading-4 text-label">
              {{ userDetail.description.position }}
            </div>
          </td>
          <td
            class="extra-small:table-cell hidden py-2.5 px-2.75 border-b border-b-tr-border"
          >
            <span class="text-3.25 leading-4">{{ userDetail.company }}</span>
          </td>
          <td
            class="medium:table-cell hidden py-2.5 px-2.75 border-b border-b-tr-border"
          >
            <icon-text-field
              icon="contact-status"
              :text="userDetail.status"
              :icon-style="getStatusIconStyle(userDetail.status)"
              :text-style="getTextStyle(userDetail.status)"
            />
          </td>
          <td
            class="small:table-cell hidden py-2.5 px-2.75 border-b border-b-tr-border"
          >
            <span class="text-3.25 leading-4">{{ userDetail.assignedTo }}</span>
          </td>
          <td
            class="large:table-cell hidden py-2.5 px-2.75 border-b border-b-tr-border"
          >
            <span class="text-3.25 leading-4">{{ userDetail.phone }}</span>
          </td>
          <td
            class="extra-large:table-cell hidden py-2.5 px-2.75 border-b border-b-tr-border"
          >
            <span class="text-3.25 leading-4">{{ userDetail.email }}</span>
          </td>
          <td
            class="extra-large:hidden table-cell min-w-10 w-10 text-center"
            @click="openResponsiveContainer(index)"
          >
            <span
              class="default-icon dx-datagrid-adaptive-more text-4.25 text-default-color text-center align-middle"
            />
          </td>
        </tr>
        <tr
          v-if="userDetail.isResponsiveSelected"
          class="extra-large:hidden table-row"
        >
          <td class="bg-td-bg p-4 leading-4 border-y" :colspan="colspan">
            <div class="large:flex medium:flex-row-reverse block">
              <div class="pr-5 pb-2.5 extra-small:hidden grow shrink basis-0">
                <label class="block text-xs leading-l1 text-label px-3 pb-0.5">
                  Company
                </label>
                <div class="text-3.25 leading-l2 px-3">
                  {{ userDetail.company }}
                </div>
              </div>
              <div class="pr-5 pb-2.5 grow shrink basis-0 medium:hidden">
                <label class="block text-xs leading-l1 text-label px-3 pb-0.5">
                  Status
                </label>
                <div class="leading-l2">
                  <icon-text-field
                    icon="contact-status"
                    :text="userDetail.status"
                    :icon-style="getStatusIconStyle(userDetail.status)"
                    :text-style="getTextStyle(userDetail.status)"
                  />
                </div>
              </div>
              <div class="pr-5 pb-2.5 grow shrink basis-0 small:hidden">
                <label class="block text-xs leading-l1 text-label px-3 pb-0.5">
                  Assigned to
                </label>
                <div class="text-3.25 leading-l2 px-3">
                  {{ userDetail.assignedTo }}
                </div>
              </div>
              <div class="pr-5 pb-2.5 grow shrink basis-0 extra-large:hidden">
                <label class="block text-xs leading-l1 text-label px-3 pb-0.5">
                  Email
                </label>
                <div class="text-3.25 leading-l2 px-3">
                  {{ userDetail.email }}
                </div>
              </div>
              <div class="pr-5 pb-2.5 grow shrink basis-0 large:hidden">
                <label class="block text-xs leading-l1 text-label px-3 pb-0.5">
                  Phone
                </label>
                <div class="text-3.25 leading-l2 px-3">
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

import { UsersData, UserDetail } from "../types/table";
import {
  EmployeeStatuses,
  StatusIconStyles,
  StatusTextStyles,
} from "../Constants";
import IconTextField from "./IconTextField.vue";

//props
const props = defineProps<UsersData>();

//onMounted
onMounted(() => {
  window.addEventListener("resize", () => {
    getResponsiveColsSpan();
  });
  getResponsiveColsSpan();
  sortCustomerTable(0);
});

//onUnMount
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    getResponsiveColsSpan();
  });
});

//emit
const emit = defineEmits<{
  (e: "select-data", data: UserDetail): void;
}>();

//ref
const userAttributes = ref<string[]>(props.userAttributes);
const userDetails = ref<UserDetail[]>(props.usersDetails);
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
const getStatusIconStyle = (status: string) => {
  if (status.toLowerCase() === EmployeeStatuses.Commission) {
    return StatusIconStyles.Commission;
  } else if (status.toLowerCase() === EmployeeStatuses.Terminated) {
    return StatusIconStyles.Terminated;
  }

  return StatusIconStyles.Salaried;
};

const getTextStyle = (status: string) => {
  const basicStyle = "text-3.25 font-normal";

  if (status.toLowerCase() === EmployeeStatuses.Commission) {
    return `${basicStyle} ${StatusTextStyles.Commission}`;
  } else if (status.toLowerCase() === EmployeeStatuses.Terminated) {
    return `${basicStyle} ${StatusTextStyles.Terminated}`;
  }

  return `${basicStyle} ${StatusTextStyles.Salaried}`;
};

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

const handleRowClick = (data: UserDetail, index: number) => {
  selectContact(index);

  emit("select-data", data);
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

const getResponsiveTableHeaderStyle = (attribute: string) => {
  const editedAttribute = attribute.toLowerCase().replace(/\s/g, "");

  switch (editedAttribute) {
    case "email":
      return "extra-large:table-cell hidden";
    case "phone":
      return "large:table-cell hidden";
    case "status":
      return "medium:table-cell hidden";
    case "assignedto":
      return "small:table-cell hidden";
    case "company":
      return "extra-small:table-cell hidden";
    default:
      return "";
  }
};

const getResponsiveColsSpan = () => {
  if (window.innerWidth <= 1372 && window.innerWidth > 850) {
    colspan.value = 6;
  } else if (window.innerWidth <= 850 && window.innerWidth > 620) {
    colspan.value = 5;
  } else if (window.innerWidth <= 620 && window.innerWidth > 448) {
    colspan.value = 4;
  } else if (window.innerWidth <= 448) {
    colspan.value = 3;
  }
};
</script>

<style lang="scss" scoped>
.icon {
  &::after {
    content: "";
    display: block;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    width: 32px;
    height: 32px;
    left: 8px;
    top: 8px;
    margin-top: -16px;
    margin-left: -16px;
    border-radius: 50%;
  }
}

.checkbox-icon {
  &::after {
    background-color: #03a6ef1a;
  }

  &::before {
    display: block;
    position: relative;
    z-index: 50;
    content: "";
    display: block;
    height: 14px;
    width: 14px;
    top: 8px;
    margin-top: -7px;
    margin-left: -7px;
    right: -8px;
    height: 14px;
    width: 14px;
    font-size: 14px;
    line-height: 14px;
    color: white;
  }
}

.dash-icon {
  &::before {
    content: "";
    position: relative;
    display: block;
    color: white;
    font-size: 16px;
    line-height: 24px;
    width: 10px;
    height: 2px;
    background-color: white;
    top: 8px;
    left: 8px;
    margin-left: -5px;
    margin-top: -1px;
  }
}
</style>
