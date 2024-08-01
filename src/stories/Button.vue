<template>
  <button type="button" :class="classes" @click="changeText" :style="style">{{ isClicked ? label : 'sample' }} </button>
</template>

<script lang="ts" setup>
import './button.css';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: string,

}>(), { primary: false });

const isClicked = ref(false);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor
}));

const changeText = () => {
  isClicked.value = !isClicked.value
}

</script>