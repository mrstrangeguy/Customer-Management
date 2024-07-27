<template>
    <div :class="{'cursor-pointer':true,[containerStyle]:true}" style="width: 250px;">
    <div :class="{'dropdown-header':true,[headerStyle]:true}" @click="toggleContentVisibility">
    <div class="dropdown-header__content">
    <i :class="{'default-icon':true,[mainIcon]:true}"/>
    <span :class="{[textStyle]:true}">{{ text }}</span>
    </div>
     <i :class="{'default-icon dx-treeview-toggle-item-visibility':true,[arrowIcon]:true,'dx-treeview-toggle-item-visibility-opened':isHeaderClicked}"/>
    </div>
    <div :class="{'dropdown__content transition-[height] transition-opacity duration-500 ease-linear':true,'visible':isHeaderClicked,'opacity-0':!isHeaderClicked,'opacity-100':isHeaderClicked,'invisible':!isHeaderClicked,'h-fit':isHeaderClicked,'h-0':!isHeaderClicked}">
      <slot name="dropdown-items" ></slot>
    </div>
    </div>
   <!--'max-h-fit':isHeaderClicked,'max-h-0':!isHeaderClicked-->
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isHeaderClicked = ref(false);

const toggleContentVisibility = () => {
  isHeaderClicked.value = !isHeaderClicked.value;
}
 
const props = defineProps({
  headerStyle: {
   type:String,
   required:true
  },
  mainIcon: {
    type:String,
    default:''
  },
  text: {
    type:String,
    default:''
  },
  textStyle: {
    type:String,
    default:''
  },
  arrowIcon: {
    type:String,
    default:''
  },
  containerStyle: {
    type:String,
    default:''
  }
})
</script>

<style lang="scss" scoped>

.dropdown-header {
  display: flex;
  align-items: center;
  gap:12px;

  &__content {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

}

</style>