<template>
  <div class="bg-white">
    <div class="p-2 pl-4 flex items-center justify-between">
      <div class="pr-4 flex h-10 items-center">
        <div class="text-3.25 font-bold mr-3">Arnie Schwartz</div>
        <icon-text-field
          icon="contact-status bg-wageningen-green"
          text="Salaried"
          icon-style="mr-1.25"
          text-style="text-wageningen-green text-3.25 font-normal"
        />
      </div>
      <div class="pl-3.75 flex items-center">
        <Button
          icon="dx-icon-unpin"
          hover-bg="#00000014"
          button-style="!px-1.5 !shadow-none !text-slate-700"
          is-rounded
        />
        <div class="pl-1.5">
          <Button
            icon="dx-icon-close"
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
          src="../../assets/images/employee_profile.png"
          alt="profile-image"
        />
        <div class="pl-5">
          <div>
            <icon-text-field
              label="Company"
              text="Screen Shop"
              text-style="mt-1 !text-democrat"
              is-column
            />
          </div>
          <div class="mt-5">
            <icon-text-field
              label="Position"
              text="Engineer"
              text-style="mt-1 !text-black"
              is-column
            />
          </div>
          <div class="mt-5">
            <icon-text-field
              label="Assigned to"
              text="John Heart"
              text-style="mt-1 !text-democrat"
              is-column
            />
          </div>
        </div>
      </div>
      <div class="py-4">
        <div>
          <icon-text-field
            icon="dx-icon-tel"
            icon-style="px-1.5"
            text="+1(714)555-8882"
            text-style="pl-4"
          />
        </div>
        <div class="mt-5">
          <icon-text-field
            icon="dx-icon-email"
            icon-style="px-1.5"
            text="arnolds@dx-email.com"
            text-style="pl-4"
          />
        </div>
        <div class="mt-5">
          <icon-text-field
            icon="dx-icon-tel"
            icon-style="px-1.5"
            text="125 W Elm St"
            text-style="pl-4"
          />
        </div>
      </div>
    </div>
    <div class="py-2.5 px-4 flex items-center justify-between border-b mb-6">
      <div class="pr-4 h-10 flex items-center">
        <Dropdown text="ACTIONS" arrow-icon="dx-icon-spindown" />
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
          :text="opportunities.title"
          :variant="AccordionVariants.Secondary"
        >
          <template #dropdown-items>
            <div class="p-2.75">
              <div
                v-for="opportunityItem in opportunities.items"
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
        :text="activities.title"
        :variant="AccordionVariants.Secondary"
      >
        <template #dropdown-items>
          <div class="p-2.5">
            <div v-for="activityItem in activities.items" class="my-2.5">
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
import usersData from "../data/usersData.json";
import { ButtonVariants, AccordionVariants } from "../Constants";

const { opportunities, activities } = usersData.userDetails.users[0];
</script>

<style scoped></style>
