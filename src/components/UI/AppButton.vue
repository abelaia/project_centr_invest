<script setup>
/* eslint-disable */
defineProps({
    text: {
        type: String,
        default: 'Прайс-лист'
    },
    icon: {
        type: String,
        default: '/src/assets/images/save-icon.svg'
    },
    iconPosition: {
        type: String,
        default: 'right',
        validator: (value) => ['right', 'left'].includes(value)
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
})

defineEmits(['click']) 
</script>

<template>
    <button
        class="app-btn"
        :class="`app-btn--${size}`"
        @click="$emit('click')"
    >
        <img
            v-if="icon && iconPosition === 'left'"
            :src="icon"
            alt=""
            class="app-btn__icon"
        >
        <span 
            v-if="text"
            class="app-btn__text"
        >
            {{ text }}
        </span>
        <img
            v-if="icon && iconPosition === 'right'"
            :src="icon"
            alt=""
            class="app-btn__icon"
        >
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    white-space: nowrap;
    color: $color-white; 
    background: $color-secondary;
    border: none;
    border-radius: 40px;
    transition: all 0.2s ease;
    cursor: pointer;

    &--small {
        padding: 12px 24px;
        gap: 8px;
        font-size: $font-size-xs;
    }

    &--medium {
        padding: 20px 44px;
        gap: 12px;
    }

    &--large {
        padding: 24px 54px;
        gap: 16px;
    }

    &__icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }

    &__text {
        line-height: 1;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}
</style>
