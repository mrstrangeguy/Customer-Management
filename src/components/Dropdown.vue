<template>
  <div ref="dropdownRef" class="relative z-100 cursor-pointer w-full">
    <div
      :class="[
        'relative overflow-hidden flex items-center z-50 rounded-sm transition-all cursor-pointer w-fit',
        headerStyle,
        {
          'pl-2': icon,
        },
      ]"
      @click.stop="toggleContentVisibility"
      role="button"
    >
      <i
        v-if="icon"
        :class="[
          'default-icon block font-normal block w-4.5 text-base leading-4 text-center -mt-0.5',
          icon,
        ]"
      />
      <img
        v-if="imageURL"
        class="block w-7 h-7 object-cover object-top aspect-square border rounded-full"
        :src="imageURL"
        alt="dropdown-image"
        @click.stop="toggleContentVisibility"
      />
      <span
        id="heading-text"
        class="block text-3.25 leading-4 text-black font-medium tracking-title"
      >
        {{ text }}
      </span>
      <i
        v-if="shouldArrowIconPresent"
        class="default-icon ml-1 block w-4 text-base leading-4 dx-icon-spindown dx-icon-right text-center -mt-0.5"
      />
    </div>
    <div
      :class="[
        'absolute cursor-pointer bg-white transition-all duration-200 border-b w-auto p-px shadow-options-dropdown',
        {
          'opacity-100 z-150': isHeaderClicked,
          'opacity-0 z-behind': !isHeaderClicked,
          'right-0': isContentPositionLeft,
        },
      ]"
    >
      <div
        v-for="(dropDownItem, index) in dropDownItems"
        :class="[
          'flex items-center',
          {
            'hover:bg-zinc-100': dropDownItem.isHoverable,
            'mt-1': index === 0,
          },
        ]"
      >
        <i
          v-if="dropDownItem.prependIcon"
          :class="[
            'default-icon dx-icon text-4.5',
            dropDownItem.prependIcon,
            {
              'ml-2.5 text-zinc-500': dropDownItem.prependIcon,
            },
          ]"
        />
        <span
          :class="[
            'block text-3.25 leading-4 px-2.75 pt-2.5 pb-2.5 text-nowrap',
            {
              'text-sm': imageURL,
            },
          ]"
        >
          {{ dropDownItem.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref, computed } from "vue";
import { DropdownPositions } from "../Constants";

//onMounted
onMounted(() => {
  document.addEventListener("click", onOutSideClick);
});

//onUnMounted
onUnmounted(() => {
  document.removeEventListener("click", onOutSideClick);
});

//types
type dropDownItem = {
  appendIcon?: string;
  text?: string;
  prependIcon?: string;
  isHoverable?: boolean;
};

type DropdownProps = {
  text?: string;
  headerStyle?: string;
  shouldArrowIconPresent?: boolean;
  icon?: string;
  imageURL?: string;
  dropDownItems?: dropDownItem[];
  contentPosition?: string;
};

const props = withDefaults(defineProps<DropdownProps>(), {
  shouldArrowIconPresent: true,
  headerStyle: "",
  icon: "",
  imageURL: "",
  text: "",
  contentPosition: DropdownPositions.Right,
});

const isHeaderClicked = ref(false);
const dropdownRef = ref<Ref | null>(null);

const toggleContentVisibility = () =>
  (isHeaderClicked.value = !isHeaderClicked.value);

const onOutSideClick = (event: Event) => {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    document.body.contains(dropdownRef.value)
  ) {
    isHeaderClicked.value = false;
  }
};

//computed
const isContentPositionLeft = computed(
  () => props.contentPosition === DropdownPositions.Left
);
</script>

<style lang="scss" scoped></style>

<!-- <options-dropdown
    text="ALL"
    arrow-icon="dx-icon dx-icon-spindown dx-icon-right"
  >
    <template v-slot:dropdown-items>
      <div class="w-[94.97px] bg-[rgba(0,0,0,.12)] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
      <div class="w-[94.97px] mt-1">
        <span
          class="block text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
          >All</span
        >
      </div>
    </template>
  </options-dropdown>

  <options-dropdown
    icon="dx-icon dx-icon-export"
    arrow-icon="dx-icon dx-icon-spindown dx-icon-right"
  >
    <template v-slot:dropdown-items>
      <div class="w-[94.97px] mt-1 flex w-[220.53px]">
        <div
          class="flex items-center text-[13px] leading-[16px] px-[11px] pt-[10px] pb-[9px]"
        >
          <div class="w-[29px]">
            <i
              class="default-icon font-medium text-[#0000008a] w-[18px] h-[18px] block dx-icon dx-icon-xlsxfile dx-list-item-icon text-[18px] leading-[18px]"
            ></i>
          </div>
          <div class="leading-[15px]">Export all data to Excel</div>
        </div>
      </div>
    </template>
  </options-dropdown> -->
