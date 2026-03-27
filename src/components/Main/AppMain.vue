<script setup>
import { ref } from 'vue';
import { CATEGORIES } from '@/constants/categories.js';
import { useProductsStore } from '@/stores/productsStore';
import AppSelectButton from '@/components/UI/AppSelectButton/AppSelectButton.vue';
import AppSwitchButton from '@/components/AppSwitchButton/AppSwitchButton.vue';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppFilters from '@/components/AppFiltersSection/AppFilters/AppFilters.vue';

const store = useProductsStore();
const viewMode = ref('grid');
const currentFilters = ref(null);

const applyFilters = (filters) => {
    currentFilters.value = filters;
};
</script>

<template>
    <main class="main">
        <div class="main__container">
            <div class="main__top-section">
                <h1 class="main__title">
                    КОСМЕТИКА И ГИГИЕНА
                </h1>
                <div class="main__sort">
                    <span class="main__sort-label">Сортировка: </span>
                    <AppSelectButton v-model="store.sortBy" />
                    <AppSwitchButton v-model="viewMode" />
                </div>
            </div>
            <ul class="main__categories-list">
                <li 
                    v-for="category in CATEGORIES" 
                    :key="category.id"
                    class="main__categories-item"
                >
                    {{ category.name }}
                </li>
            </ul>
            <div class="main__layout">
                <AppFilters @apply="applyFilters" />
                <div class="main__right-content">
                    <ProductsGrid                         
                        :viewMode="viewMode" 
                        :filters="currentFilters"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import './AppMain.scss';
</style>
