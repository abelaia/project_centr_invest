<script setup>
defineProps({
    modelValue: {
        type: String,
        default: 'grid',
    },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="app-switch">
        <div class="app-switch__buttons">
            <button
                type="button"
                class="app-switch__button app-switch__button-list"
                :class="{ 'app-switch__button--active': modelValue === 'list' }"
                @click="emit('update:modelValue', 'list')"
            >
                <img
                    src="@/assets/images/list-icon.svg"
                    alt="list"
                    class="app-switch__icon"
                >
            </button>
            <button
                type="button"
                class="app-switch__button app-switch__button-grid"
                :class="{ 'app-switch__button--active': modelValue === 'grid' }"
                @click="emit('update:modelValue', 'grid')"
            >
                <img
                    src="@/assets/images/grid-icon.svg"
                    alt="grid"
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
