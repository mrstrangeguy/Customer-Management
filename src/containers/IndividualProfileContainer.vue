<template>
  <div class="bg-white">
    <div class="p-2 pl-4 flex items-center justify-between">
      <div class="pr-4 flex h-10 items-center">
        <div class="text-3.25 font-bold mr-3">
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
          button-style="!px-1.5 !shadow-none !text-slate-700"
          is-rounded
        />
        <div class="pl-1.5">
          <Button
            :icon="closeButton.icon"
            hover-bg="#00000014"
            button-style="!px-1.5 !shadow-none !text-slate-700"
            is-rounded
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
        <div class="pl-5">
          <div
            v-for="(statusDetail, index) in userDetail.statusDetails"
            :class="index !== 0 && 'mt-5'"
          >
            <icon-text-field
              :label="statusDetail.label"
              :text="statusDetail.text"
              text-style="mt-1 !text-democrat"
              is-column
            />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div
          v-for="(contactDetail, index) in userDetail.contactDetails"
          :class="index !== 0 && 'mt-5'"
        >
          <icon-text-field
            :icon="contactDetail.icon"
            icon-style="px-1.5 text-slate-300"
            :text="contactDetail.text"
            text-style="pl-4"
          />
        </div>
      </div>
    </div>
    <div class="py-2.5 px-4 flex items-center justify-between border-b mb-6">
      <div class="pr-4 h-10 flex items-center">
        <Dropdown
          :text="actionsDropdown.title"
          arrow-icon="dx-icon-spindown"
          header-style="py-1.5 pl-2 pr-3 hover:bg-slate-200"
          :drop-down-items="actionsDropdown.details"
        />
      </div>
      <div class="ml-4 flex items-center">
        <div class="w-22.5">
          <Button
            text="Edit"
            icon="dx-icon-edit"
            button-style="!pl-2 !pr-3 !flex !justify-center !text-white"
            bg-color="#03a9f4"
          />
        </div>
        <div class="ml-1.25 min-w-22.5">
          <Button
            text="details"
            :variant="ButtonVariants.Outlined"
            button-style="!pl-2 !pr-3 !flex !justify-center"
            bg-color="#fff"
            hover-bg="rgba(0,0,0,.08)"
          />
        </div>
      </div>
    </div>
    <div class="px-4">
      <div class="mb-2">
        <Accordion
          :text="userDetail.opportunities.title"
          :variant="AccordionVariants.Secondary"
        >
          <template #dropdown-items>
            <div class="p-2.75">
              <div
                v-for="opportunityItem in userDetail.opportunities.items"
                class="pb-2.5"
              >
                <span class="block text-3.25 leading-4">
                  {{ opportunityItem.text }}
                </span>
                <span class="block text-3.25 leading-4">{{
                  opportunityItem.price
                }}</span>
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
              v-for="activityItem in userDetail.activities.items"
              class="my-2.5"
            >
              <UserActivityCard
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
import { ButtonVariants, AccordionVariants } from "../Constants";

const { pinButton, closeButton, actionsDropdown } = individualProfileData;

type Props = {
  userDetail: UserDetail;
};

defineProps<Props>();

const getStatusIconStyle = (status: string) => {
  if (status.toLocaleLowerCase() === "commission") {
    return "mr-1.25 bg-democrat";
  } else if (status.toLowerCase() === "terminated") {
    return "mr-1.25 bg-tuscan-image";
  }

  return "mr-1.25 bg-wageningen-green";
};

const getTextStyle = (status: string) => {
  const basicStyle = "text-3.25 font-normal";

  if (status.toLowerCase() === "commission") {
    return basicStyle + " text-democrat";
  } else if (status.toLowerCase() === "terminated") {
    return basicStyle + " text-tuscan-image";
  }

  return basicStyle + " text-wageningen-green";
};
</script>

<style scoped></style>
