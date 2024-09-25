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
        v-if="shouldShowArrowIcon"
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
        role="button"
        @click="handleOptionClick(dropDownItem.text)"
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
            'block text-3.25 leading-4 px-2.75 py-2.5 text-nowrap',
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
import { computed, onMounted, onUnmounted, Ref, ref } from "vue";
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
  shouldShowArrowIcon?: boolean;
  icon?: string;
  imageURL?: string;
  dropDownItems?: dropDownItem[];
  contentPosition?: string;
};

const props = withDefaults(defineProps<DropdownProps>(), {
  shouldShowArrowIcon: true,
  headerStyle: "",
  icon: "",
  imageURL: "",
  text: "",
  contentPosition: DropdownPositions.Right,
});

const isHeaderClicked = ref(false);
const dropdownRef = ref<Ref | null>(null);

const emit = defineEmits<{
  (event: "button-click", value: string): void;
}>();

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

const handleOptionClick = (value = "") => {
  isHeaderClicked.value = false;
  emit("button-click", value);
};

//computed
const isContentPositionLeft = computed(
  () => props.contentPosition === DropdownPositions.Left
);
</script>
