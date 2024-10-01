<template>
  <div ref="dropdownRef" class="relative cursor-pointer w-full">
    <div
      :class="[
        'relative overflow-hidden flex items-center rounded-sm transition-all cursor-pointer w-fit',
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
        v-if="!shouldHideArrowIcon"
        class="default-icon ml-1 block w-4 text-base leading-4 dx-icon-spindown dx-icon-right text-center -mt-0.5"
      />
    </div>
    <div
      ref="contentRef"
      :style="{ top: contentTopPosition }"
      :class="[
        'absolute z-20 cursor-pointer bg-white transition-all duration-200 border-b w-auto p-px shadow-options-dropdown',
        {
          'opacity-100 z-20': isHeaderClicked,
          'opacity-0 z-behind': !isHeaderClicked,
          'right-0': isContentRight,
        },
      ]"
    >
      <div
        v-for="(dropDownItem, index) in dropDownItems"
        :key="`${dropDownItem.text}${index}`"
        role="button"
        @click="() => handleOptionClick(dropDownItem.text)"
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
import { onMounted, onUnmounted, Ref, ref } from "vue";

//onMounted
onMounted(() => {
  document.addEventListener("click", onOutSideClick);
  contentTopPosition.value = `${dropdownRef.value.getBoundingClientRect().height}px`;

  if (window.innerWidth - dropdownRef.value.getBoundingClientRect().left > 0) {
    handleWindowResize();
  }

  window.addEventListener("resize", handleWindowResize);
});

//onUnMounted
onUnmounted(() => {
  document.removeEventListener("click", onOutSideClick);
});

//onUnmounted
onUnmounted(() => {
  document.removeEventListener("resize", handleWindowResize);
});

const handleWindowResize = () => {
  if (contentRef.value) {
    const positionRight =
      window.innerWidth -
      (dropdownRef.value.getBoundingClientRect().left +
        contentRef.value.getBoundingClientRect().width);

    const positionBottom =
      window.innerHeight -
      (dropdownRef.value.getBoundingClientRect().bottom +
        contentRef.value.getBoundingClientRect().height);

    if (positionRight <= 0) {
      isContentRight.value = true;
    } else {
      isContentRight.value = false;
    }

    if (positionBottom <= 0) {
      contentTopPosition.value = `-${contentRef.value.getBoundingClientRect().height}px`;
    } else {
      contentTopPosition.value = `${dropdownRef.value.getBoundingClientRect().height}px`;
    }
  }
};

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
  shouldHideArrowIcon?: boolean;
  icon?: string;
  imageURL?: string;
  dropDownItems?: dropDownItem[];
};

withDefaults(defineProps<DropdownProps>(), {
  shouldHideArrowIcon: false,
  headerStyle: "",
  icon: "",
  imageURL: "",
  text: "",
});

const isHeaderClicked = ref(false);
const dropdownRef = ref<Ref | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);
const isContentRight = ref<boolean>(false);
const contentTopPosition = ref<string>(`inherit`);

const emit = defineEmits<{
  (event: "click", value: string): void;
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
  isHeaderClicked.value = false;
};

const handleOptionClick = (value = "") => {
  isHeaderClicked.value = false;
  emit("click", value);
};
</script>
