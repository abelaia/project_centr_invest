<script setup>
import { switchOptions } from '@/models/switchOptions.js';

defineProps({
    modelValue: {
        type: String,
        default: 'grid',
    },
    options: {
        type: Array,
        default: () => switchOptions,
    },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="app-switch">
        <div class="app-switch__buttons">
            <button
                v-for="(option, index) in options"
                :key="option.value"
                type="button"
                class="app-switch__button"
                :class="{ 
                    'app-switch__button--active': modelValue === option.value,
                    [`app-switch__button--${index}`]: true 
                }"
                @click="emit('update:modelValue', option.value)"
            >
                <img
                    :src="require(`@/assets/images/${option.icon}`)"
                    :alt="option.value"
                    class="app-switch__icon"
                >
            </button>
            <div
                class="app-switch__indicator"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './AppSwitchButton.scss';
</style>
