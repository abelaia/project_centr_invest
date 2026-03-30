<script setup>
import { ref, computed } from 'vue';
import AppSearch from '@/components/UI/AppSearch/AppSearch.vue';
import AppCheckbox from '@/components/AppFiltersSection/AppCheckbox/AppCheckbox.vue';
import AppHideShowButton from '@/components/UI/AppHideShowButton/AppHideShowButton.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(['update:modelValue']);

const selectedItems = ref([...props.modelValue]);
const searchQuery = ref('');
const isExpanded = ref(false);

const filteredItems = computed(() => {
    if (!searchQuery.value) return props.items;

    return props.items.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const displayedItems = computed(() => {
    if (isExpanded.value) return filteredItems.value;

    return filteredItems.value.slice(0, 4);
});

const handleSearch = (value) => {
    searchQuery.value = value;
    isExpanded.value = false;
};

const toggleItem = (name, isChecked) => {
    if (isChecked) {
        selectedItems.value.push(name);
    } else {
        selectedItems.value = selectedItems.value.filter(n => n !== name);
    }
    
    emit('update:modelValue', selectedItems.value);
};
</script>

<template>
    <div class="filter-group">
        <h3 class="filter-group__title">
            Производитель
        </h3>
        <AppSearch
            class="filter-group__button-input"
            placeholder="Поиск..."
            :icon="require('@/assets/images/search.svg')"
            @search="handleSearch"
        />
        <div class="filter-group__list" :class="{ 'filter-group__list--expanded': isExpanded }">
            <AppCheckbox
                v-for="item in displayedItems" 
                :key="item.id"
                :model-value="selectedItems.includes(item.name)"
                :label="item.name"
                :count="item.count"
                @update:modelValue="toggleItem(item.name, $event)"
            />
        </div>
        <AppHideShowButton
            class="filter-group__button-hide-show"
            v-if="filteredItems.length > 4"
            :expanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
        />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.filter-group {
    margin-top: 30px;
    
    &__title {
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
    }

    &__button-input {
        margin-top: 15px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 15px;
    }

    &__button-hide-show {
        margin-top: 15px;
    }
}
</style>
