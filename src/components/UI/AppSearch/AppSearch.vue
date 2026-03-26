<script setup>
import { ref } from 'vue';
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Поиск...',
    },
    icon: {
        type: String,
        required: true,
    },
    iconAlt: {
        type: String,
        default: 'submit',
    },
    type: {
        type: String,
        default: 'text',
    },
});

const emit = defineEmits(['submit']);

const searchValue = ref('');

const handleSubmit = () => {
    emit('submit', searchValue.value);
};
defineExpose({ props });
</script>

<template>
    <div
        class="input-button"
    >
        <input
            v-model="inputValue"
            :type="type"
            :placeholder="placeholder"
            class="input-button__field"
            @keyup.enter="handleSubmit"
        >
        <button
            type="button"
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
        background: $color-white;
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
}
</style>
