<template>
  <table class="relative w-full table-fixed overflow-auto">
    <thead
      class="border border-b-0 border-table-border outline outline-1 outline-table-border sticky top-0 bg-white z-10"
      role="presentation"
    >
      <tr role="row" class="bg-white relative">
        <th
          class="w-9.5 min-w-9.5 max-w-17.5 text-center p-0 bg-white"
          role="columnheader"
        >
          <i
            @click.stop="
              isAllCheckboxesEnabled
                ? toggleCheckboxesVisibility(false)
                : toggleCheckboxesVisibility(true)
            "
            :class="[
              'inline-block default-icon cursor-pointer icon relative align-middle w-4 h-4 rounded-sm -mt-px',
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
          @click.stop="sortCustomerTable(index)"
          v-for="(userAttribute, index) in userAttributes"
          :class="[
            'table-header-cell group py-3 px-2.75 leading-4 cursor-pointer hover:bg-table-hover-primary text-left',
            getResponsiveTableHeaderStyle(userAttribute),
          ]"
          role="columnheader"
        >
          <div
            :class="[
              'flex items-center pl-px',

              {
                'name-heading-wrapper': !index,
                'text-table-hover-tertiary':
                  selectedAttributeObject.index === index,
              },
            ]"
          >
            <span
              :class="[
                'block z-10 align-top text-label text-3.25 leading-4 font-medium mr-0.75 group-hover:text-table-hover-tertiary -ml-px',
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
                'table-header-icon default-icon dx-sort',
                {
                  'dx-sort-up': !isDownArrowPresent(index),
                  'dx-sort-down': isDownArrowPresent(index),
                },
              ]"
            />
            <i
              class="block default-icon dx-header-filter-empty table-filter-icon"
            />
          </div>
        </th>
        <th class="extra-large:hidden w-10" />
      </tr>
    </thead>
    <tbody class="border-t-0 border border-y z-0">
      <template v-for="(userDetail, index) in userDetails" :key="userDetail.id">
        <tr
          @click.stop="handleRowClick(userDetail, index)"
          :class="[
            'border-b border-tr-border cursor-pointer',
            {
              'border-t': index,
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
            <div class="-mb-px mt-px name-position-wrapper">
              <div class="text-3.25 leading-4">
                {{ userDetail.description.name }}
              </div>
              <div class="text-xs leading-4 text-label">
                {{ userDetail.description.position }}
              </div>
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
            <span class="text-3.25 leading-4">{{ userDetail.assigned }}</span>
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
            @click.stop="openResponsiveContainer(index)"
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
                  {{ userDetail.assigned }}
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
import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue";

import { UserDetail } from "../types/table";
import { getStatusIconStyle } from "../utils/helpers";
import { EmployeeStatuses, StatusTextStyles, removeSpace } from "../Constants";
import IconTextField from "./IconTextField.vue";

type Props = {
  userAttributes: string[];
  usersDetails: UserDetail[];
  userStatus?: string;
  filterText?: string;
};

//props
const props = withDefaults(defineProps<Props>(), {
  userStatus: "ALL",
  filterText: "",
  isAllSelectionCleared: false,
});

//onMounted
onMounted(() => {
  filterCustomersByStatus(props.userStatus);
  filterCustomersBySearchText(props.filterText);
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

//constants
const INITIAL_COLSPAN = 7;
const ASCENDING_ORDER = 1;
const DESCENDING_ORDER = -1;
const INITIAL_INDEX = 0;

//ref
const userAttributes = ref<string[]>(props.userAttributes);
const userDetails = ref<UserDetail[]>(props.usersDetails);
const selectedAttributeObject = ref({
  index: INITIAL_INDEX,
  order: ASCENDING_ORDER,
});
const colspan = ref<number>(INITIAL_COLSPAN);

//computed
const isAllCheckboxesEnabled = computed(
  () =>
    userDetails.value.length &&
    userDetails.value?.every((user: UserDetail) => user.isChecked)
);

const isAnyCheckboxesEnabled = computed(() =>
  userDetails.value?.some((user: UserDetail) => user.isChecked)
);

//functions
const filterCustomersByStatus = (status: string) => {
  if (!status || status.toLowerCase() === "all") return;

  userDetails.value = userDetails.value.filter((userDetail: UserDetail) => {
    return userDetail.status.toLowerCase() === status.toLowerCase();
  });
};

const filterCustomersBySearchText = (searchText: string) => {
  if (!searchText) return;

  userDetails.value = userDetails.value.filter((userDetail: UserDetail) => {
    const { description, company, status, assigned, phone, email } = userDetail;
    const userDetailValues = [
      description.name,
      company,
      status,
      assigned,
      phone,
      email,
    ];

    const result = userDetailValues.find((value: string) => {
      const trimmedValue = value.toLowerCase().trim();
      const trimmedSearchText = searchText.toLowerCase().trim();

      return trimmedValue.includes(trimmedSearchText);
    });

    return result;
  });
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

const removeWhiteSpace = (text: string) => {
  return text.toLowerCase().replace(removeSpace, "");
};

const sortCustomerTable = (index: number) => {
  if (!userAttributes.value || !userDetails.value) return;

  selectedAttributeObject.value.index = index;

  const attribute =
    removeWhiteSpace(userAttributes.value[index]) === "assignedto"
      ? "assigned"
      : removeWhiteSpace(userAttributes.value[index]);

  userDetails.value.sort((a: UserDetail, b: UserDetail) => {
    const value1 =
      a[attribute as keyof typeof a] ||
      a.description[attribute as keyof typeof a.description];
    const value2 =
      b[attribute as keyof typeof b] ||
      b.description[attribute as keyof typeof b.description];

    if (selectedAttributeObject.value.order === ASCENDING_ORDER) {
      return value1 > value2 ? ASCENDING_ORDER : DESCENDING_ORDER;
    }

    return value1 < value2 ? ASCENDING_ORDER : DESCENDING_ORDER;
  });

  if (selectedAttributeObject.value.order === ASCENDING_ORDER) {
    selectedAttributeObject.value.order = DESCENDING_ORDER;
  } else {
    selectedAttributeObject.value.order = ASCENDING_ORDER;
  }
};

const isDownArrowPresent = (index: number) => {
  return (
    selectedAttributeObject.value.index === index &&
    selectedAttributeObject.value.order === 1
  );
};

const toggleCheckboxesVisibility = (value: boolean) => {
  userDetails.value?.forEach((user: UserDetail) => (user.isChecked = value));
};

const addContact = (index: number) => {
  if (!userDetails.value) return;

  userDetails.value[index].isChecked = !userDetails.value[index].isChecked;
};

const clearAllSeclection = () => {
  userDetails.value?.forEach((user) => (user.isSelected = false));
};

const selectContact = (index: number) => {
  if (!userDetails.value) return;

  clearAllSeclection();
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
  const editedAttribute = removeWhiteSpace(attribute);

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

//watchEffect
watchEffect(() => {
  userDetails.value = props.usersDetails;
  filterCustomersByStatus(props.userStatus);
  filterCustomersBySearchText(props.filterText);
  if (props.isAllSelectionCleared) {
    clearAllSeclection();
  }
});
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

.table-header-cell {
  &:hover {
    .table-header-icon {
      color: #00000061;
    }
  }
}

.table-header-icon {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 15px;
  color: black;
  line-height: 15px;
  color: #f2f2f2;
  color: rgba(0, 0, 0, 0.87);
  margin-top: -1px;
  font-weight: 500;
}

.table-filter-icon {
  height: 15px;
  width: 15px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.72);
  margin-top: -1px;
  font-weight: 400;
}

.name-position-wrapper,
.name-heading-wrapper {
  margin-left: 0.5px;
}
</style>
