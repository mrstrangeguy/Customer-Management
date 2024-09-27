<template>
  <div class="bg-white">
    <div class="p-2 pl-4 flex items-center justify-between">
      <div class="name-status-wrapper pr-4 flex items-center">
        <div class="text-3.25 font-bold profile-title">
          {{ userDetail.description.name }}
        </div>
        <icon-text-field
          icon="contact-status"
          :text="userDetail.status"
          :icon-style="getStatusIconStyle(userDetail.status)"
          :text-style="getTextStyle(userDetail.status)"
        />
      </div>
      <div class="pl-3.75 flex items-center">
        <Button
          :icon="pinButton.icon"
          hover-bg="#00000014"
          button-style="custom-button--primary"
          is-rounded
        />
        <div class="pl-1.25">
          <Button
            :icon="closeButton.icon"
            hover-bg="#00000014"
            button-style="custom-button--primary"
            is-rounded
            @button-click="handleCloseButtonClick"
          />
        </div>
      </div>
    </div>
    <div class="px-4 border-b">
      <div class="flex">
        <img
          class="block w-31 h-31 max-h-31 object-cover object-top border rounded-lg mr-5"
          :src="userDetail.image"
          alt="profile-image"
        />
        <div class="pl-3">
          <div
            v-for="(statusDetail, index) in userDetail.statusDetails"
            :key="`${statusDetail.label}${index}`"
            :class="{ 'mt-5': index !== 0 }"
          >
            <icon-text-field
              :label="statusDetail.label"
              :text="statusDetail.text"
              :text-style="`mt-1 ${getUserDetailColor(statusDetail.label)} text-xs`"
              is-column
            />
          </div>
        </div>
      </div>
      <div class="user-contact-details">
        <div
          v-for="(contactDetail, index) in userDetail.contactDetails"
          :key="`${contactDetail.text}${index}`"
          :class="{ 'mt-5': index !== 0 }"
        >
          <icon-text-field
            :icon="contactDetail.icon"
            icon-style="px-1.5 text-zinc-200"
            :text="contactDetail.text"
            text-style="pl-3 text-xs"
          />
        </div>
      </div>
    </div>
    <div class="py-2.5 px-4 flex items-center justify-between border-b mb-6">
      <div class="actions-dropdown-wrapper h-10 flex items-center">
        <Dropdown
          :text="actionsDropdown.title"
          arrow-icon="dx-icon-spindown"
          header-style="py-1.5 pl-3 pr-2 hover:bg-slate-200"
          :drop-down-items="actionsDropdown.details"
        />
      </div>
      <div class="ml-4 flex items-center">
        <div class="w-22.5">
          <Button
            :text="editButton.text"
            :icon="editButton.icon"
            button-style="custom-button--normal custom-button--text-white"
            bg-color="#03a9f4"
          />
        </div>
        <div class="ml-1.25 min-w-22.5">
          <Button
            :text="detailsButton.text"
            :variant="ButtonVariants.Outlined"
            button-style="custom-button--outlined"
            bg-color="#fff"
            hover-bg="rgba(0,0,0,.08)"
          />
        </div>
      </div>
    </div>
    <div class="accordions-wrapper">
      <div class="mb-2 w-full">
        <Accordion
          :text="userDetail.opportunities.title"
          :variant="AccordionVariants.Secondary"
        >
          <template #dropdown-items>
            <div class="p-2.75">
              <div
                v-for="(opportunityItem, index) in userDetail.opportunities
                  .items"
                :key="`${opportunityItem.text}${index}`"
                class="pb-2.5"
              >
                <span class="block text-3.25 leading-4">
                  {{ opportunityItem.text }}
                </span>
                <span class="block text-3.25 leading-4">
                  {{ opportunityItem.price }}
                </span>
              </div>
            </div>
          </template>
        </Accordion>
      </div>
      <Accordion
        :text="userDetail.activities.title"
        :variant="AccordionVariants.Secondary"
      >
        <template #dropdown-items>
          <div class="p-2.5">
            <div
              v-for="(activityItem, index) in userDetail.activities.items"
              :key="`${activityItem.status}${index}`"
              class="my-2.5"
            >
              <user-activity-card
                :status="activityItem.status"
                :date="activityItem.details.date"
                :assigned-to="activityItem.details.name"
              />
            </div>
          </div>
        </template>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconTextField from "../components/IconTextField.vue";
import Accordion from "../components/Accordion.vue";
import Button from "../components/Button.vue";
import Dropdown from "../components/Dropdown.vue";
import UserActivityCard from "../components/UserActivityCard.vue";
import { UserDetail } from "../types/table";
import { individualProfileData } from "../data/uiData.json";
import {
  AccordionVariants,
  ButtonVariants,
  EmployeeStatuses,
  StatusIconStyles,
  StatusTextStyles,
} from "../Constants";

const { pinButton, closeButton, actionsDropdown, editButton, detailsButton } =
  individualProfileData;

type Props = {
  userDetail: UserDetail;
};

defineProps<Props>();

const emit = defineEmits<{
  (event: "close-button-click", clickEvent: Event): void;
}>();

const handleCloseButtonClick = (event: Event) => {
  emit("close-button-click", event);
};

const getStatusIconStyle = (status: string) => {
  if (status.toLocaleLowerCase() === EmployeeStatuses.Commission) {
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

const getUserDetailColor = (status: string) => {
  if (status.toLowerCase() === "position") {
    return "text-black";
  }

  return "text-democrat";
};
</script>

<style lang="scss" scoped>
.name-status-wrapper,
.actions-dropdown-wrapper {
  height: 38px;
}

.custom-button {
  &--primary {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    padding: 0px 6px;
  }

  &--normal,
  &--outlined {
    justify-content: center;
    letter-spacing: 0.52px;
    font-size: 13px;
  }

  &--normal {
    padding: 0px 12px 0px 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 3px 0px;
  }

  &--outlined {
    box-shadow: none;
    padding: 5px 12px;
    border: 1px solid rgba(0, 0, 0, 0.24);
    height: 26px;
  }

  &--text-white {
    color: white;
  }
}

.profile-title {
  margin-right: 13px;
}

.user-contact-details {
  padding: 15px 0px;
}

.actions-dropdown-wrapper {
  padding-right: 15px;
}

.accordions-wrapper {
  padding: 0px 19px;
}
</style>
