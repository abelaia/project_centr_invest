<script setup>
import { ref } from 'vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Поиск...',
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
        class="search"
    >
        <input
            v-model="searchValue"
            :type="type"
            :placeholder="placeholder"
            class="search__field"
            @keyup.enter="handleKeyup"
        >
        <button
            type="button"
            class="search__button"
            @click="handleSearch"
        >
            <img
                src="@/assets/images/search.svg"
                alt="Поиск"
                class="search__icon"
            />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search {
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
            opacity: 1;
        }

        &:active {
            opacity: 1;
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
