<script setup>
/* eslint-disable */
defineProps({
    icon: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'medium'
    }
})

defineEmits(['click'])
</script>

<template>
    <button
        class="app-icon-btn"
        :class="`app-icon-btn--${size}`"
        @click="$emit('click')"
    >
        <img
            :src="icon"
            :alt="alt"
            class="app-icon-btn__icon"
        >
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-secondary;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    &__icon {
        object-fit: contain;
    }

    &--medium {
        width: 60px;
        height: 60px;

        .app-icon-btn__icon {
            width: 18px;
            height: 18px;
        }
    }
}
</style>
