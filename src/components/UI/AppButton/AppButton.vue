<script setup>
import { validateIconPosition, validateButtonSize } from '@/utils/validators';

defineProps({
    text: {
        type: String,
        default: '',
    },
    icon: {
        type: String,
        default: '',
    },
    iconPosition: {
        type: String,
        default: 'right',
        validator: validateIconPosition,
    },
    size: {
        type: String,
        default: 'medium',
        validator: validateButtonSize,
    },
});

defineEmits(['click']);
</script>

<template>
    <button
        type="button"
        class="app-button"
        :class="`app-button--${size}`"
        @click="$emit('click')"
    >
        <img
            v-if="icon && iconPosition === 'left'"
            :src="icon"
            alt=""
            class="app-button__icon"
        >
        <span 
            v-if="text"
            class="app-button__text"
        >
            {{ text }}
        </span>
        <img
            v-if="icon && iconPosition === 'right'"
            :src="icon"
            alt=""
            class="app-button__icon"
        >
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
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

    &:hover {
        background: $color-yellow-light;
    }

    &:active {
        transform: scale(0.96);
        transition: all 0.05s ease;
    }
}
</style>
