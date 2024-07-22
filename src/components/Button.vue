<template>
    <button :class="{ 'button-default': true, [buttonType]: true,[variant]:true }">
        <i :class="{ 'default-icon': true, [icon]: true, [`${getIconType()}`]: true }"></i>
        <span :class="{ 'text-type': true }">{{ text }}</span>
    </button>
</template>

<script setup lang="ts">
import {ButtonTypes} from '../types/buttonTypes'

const props = defineProps({
    version: String,
    buttonType: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    },
    variant: {
        type:String,
        default:''
    }
})

//functions
const getIconType = () => {
    if (!props.buttonType) return

    if (props.variant === ButtonTypes.common.variant.primary) {
        return 'button-icon-type-1'
    }
    else if(props.variant === ButtonTypes.icon.variant.primary){
        return 'button-icon-type-2'
    }
}

</script>

<style lang="scss" scoped>
.button-default {
    cursor: pointer;
    background-color: transparent;
}

.default-icon {
    font-size: 16px;
}

.button-icon-type-1,
.button-icon-type-2 {
    color: rgba(0, 0, 0, 0.87);

    &::before {
        display: block;
    }
}

.common-button {
    border-radius: 2px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;

    &--primary {
        padding: 5px 12px 5px 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
        background-color: #03a9f4;
        height: 28px;
        color: white;
    }

    &--secondary {
        padding: 5px 12px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        color: rgba(0, 0, 0, 0.87);
        min-width: 90px;
        justify-content: center;
        height: 26px;
    }
}

.button-icon-type-1 {
    margin-right: 4px;
    color: white;
}

.text-type {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    display: block;
    letter-spacing: 0.52px;
}

.button-icon-type-2 {
    font-size: 18px;
}

</style>