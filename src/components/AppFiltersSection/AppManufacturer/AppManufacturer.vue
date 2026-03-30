<script setup>
import { ref, computed } from 'vue';
import { manufacturers } from '@/constants/manufacturers.js';
import AppSearch from '@/components/UI/AppSearch/AppSearch.vue';
import AppCheckbox from '@/components/AppFiltersSection/AppCheckbox/AppCheckbox.vue';
import AppHideShowButton from '@/components/UI/AppHideShowButton/AppHideShowButton.vue';

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(['update:modelValue']);

const searchQuery = ref('');
const isExpanded = ref(false);

const filteredManufacturers = computed(() => {
    if (!searchQuery.value) return manufacturers;
    return manufacturers.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const displayedManufacturers = computed(() => {
    if (isExpanded.value) return filteredManufacturers.value;
    return filteredManufacturers.value.slice(0, 4);
});

const handleSearch = (value) => {
    searchQuery.value = value;
    isExpanded.value = false;
};

const updateSelected = (selected) => {
    emit('update:modelValue', selected);
};
</script>

<template>
    <div class="manufacturer">
        <h3 class="manufacturer__title">
            Производитель
        </h3>
        <AppSearch
            class="manufacturer__btn-input"
            placeholder="Поиск..."
            :icon="require('@/assets/images/search.svg')"
            @search="handleSearch"
        />
        <div class="manufacturer__list" :class="{ 'manufacturer__list--expanded': isExpanded }">
            <AppCheckbox
                v-for="item in displayedManufacturers" 
                :key="item.id"
                :model-value="props.modelValue"
                :value="item.name"
                :label="item.name"
                :count="item.count"
                @update:model-value="updateSelected"
            />
        </div>
        <AppHideShowButton
            class="manufacturer__button-hide-show"
            v-if="manufacturers.length > 4"
            :expanded="isExpanded"
            @toggle="isExpanded = !isExpanded"
        />
    </div>    
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.manufacturer {
    margin-top: 30px;
    
    .manufacturer__title {
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
    }

    .manufacturer__btn-input {
        margin-top: 15px;
    }

    .manufacturer__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 15px;
    }

    .manufacturer__button-hide-show {
        margin-top: 15px;
    }
}
</style>
