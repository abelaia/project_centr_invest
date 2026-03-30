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
        default: 'search',
    },
    type: {
        type: String,
        default: 'text',
    },
});

const emit = defineEmits(['search']);
const searchValue = ref('');

const handleSearch = () => {
    emit('search', searchValue.value);
};

const handleKeyup = (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
};

defineExpose({ props });
</script>

<template>
    <div
        class="input-button"
    >
        <input
            v-model="searchValue"
            :type="type"
            :placeholder="placeholder"
            class="input-button__field"
            @keyup.enter="handleKeyup"
        >
        <button
            type="button"
            class="input-button__button"
            @click="handleSearch"
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
        background: $color-gray-search;
        border: 1px solid $color-gray-light;
        border-radius: 36px;

        &:focus {
            outline: none;
            border-color: $color-primary;
        }
    }

    &__button {
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

        &:hover {
            background: $color-yellow-light;
        }

        &:active {
            transform: scale(0.96);
            transition: all 0.05s ease;
        }
    }

    &__icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
}
</style>
