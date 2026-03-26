<script setup>
import { ref, computed } from 'vue';
import { manufacturers } from '@/constants/manufacturers.js';
import AppSearch from '@/components/UI/AppSearch/AppSearch.vue';
import AppCheckbox from '@/components/UI/AppCheckbox/AppCheckbox.vue';
import AppHideShowButton from '@/components/UI/AppHideShowButton/AppHideShowButton.vue';

const searchQuery = ref('');
const selectedManufacturers = ref([]);
const isExpanded = ref(false);
const allManufacturers = ref(manufacturers);

const filteredManufacturers = computed(() => {
    if (!searchQuery.value) {
        return allManufacturers.value;
    }
    
    return allManufacturers.value.filter(({ name }) => 
        name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
});

const displayedManufacturers = computed(() => {
    if (isExpanded.value) {
        return filteredManufacturers.value;
    }

    return filteredManufacturers.value.slice(0, 4);
});

const handleSearch = (value) => {
    searchQuery.value = value;
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
            buttonAlt="search"
            variant="search"
            @submit="handleSearch"
        />
        <div class="manufacturer__list" :class="{ 'manufacturer__list--expanded': isExpanded }">
            <AppCheckbox
                v-for="item in displayedManufacturers" 
                :key="item.id"
                v-model="selectedManufacturers"
                :value="item.id"
                :label="item.name"
                :count="item.count"
            />
        </div>
        <AppHideShowButton
            class="manufacturer__btn-hide-show"
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

    .manufacturer__btn-hide-show {
        margin-top: 15px;
    }
}
</style>
