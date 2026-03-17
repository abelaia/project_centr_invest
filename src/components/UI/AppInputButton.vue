<script setup>
/* eslint-disable */
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Поиск...'
    },
    icon: {
        type: String,
        required: true
    },
    buttonAlt: {
        type: String,
        default: 'submit'
    },
    type: {
        type: String,
        default: 'text'
    },
    variant: {
        type: String,
        default: 'search'
    },
    maxWidth: {
        type: String,
        default: '260px'
    }
})

</script>

<template>
    <div
        class="input-button"
        :class="`input-button--${variant}`"
        :style="{ maxWidth }"
    >
        <input
            v-model="inputValue"
            :type="type"
            :placeholder="placeholder"
            class="input-button__field"
            @keyup.enter="handleSubmit"
        >
        <button
            class="input-button__btn"
            @click="handleSubmit"
        >
            <img
                :src="icon"
                :alt="buttonAlt"
                class="input-button__icon"
            >
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.input-button {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    &__field {
        width: 100%;
        height: 59px;
        padding: 0 50px 0 20px;
        font-size: $font-size-xs;
        color: $color-gray-dark;
        border: 1px solid $color-gray-light;
        border-radius: 36px;

        &:focus {
            outline: none;
            border-color: $color-primary;
        }
    }

    &__btn {
        position: absolute;
        right: 10px;
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: $color-secondary;
        border: none;
        border-radius: 50%;
        cursor: pointer;
    }

    &__icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }

    &--search &__field {
        background: $color-gray-search;
    }

    &--email &__field {
        background: $color-white;
    }
}
</style>
