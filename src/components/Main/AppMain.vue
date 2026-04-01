<script setup>
import { ref } from 'vue';
import { CATEGORIES } from '@/constants/categories.js';
import { breadcrumbs } from '@/constants/breadcrumbs.js';
import { useProductsStore } from '@/stores/productsStore';
import { useFilters } from '@/composables/useFilters';
import AppBreadCrumbs from '@/components/UI/AppBreadCrumbs/AppBreadCrumbs.vue';
import AppSelectButton from '@/components/UI/AppSelectButton/AppSelectButton.vue';
import AppSwitchButton from '@/components/AppSwitchButton/AppSwitchButton.vue';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppFilters from '@/components/AppFiltersSection/AppFilters/AppFilters.vue';

const store = useProductsStore();
const viewMode = ref('grid');
const currentBreadCrumbs = breadcrumbs.cosmetics;
const { appliedFilters } = useFilters();
const currentPage = ref(1);

const applyFilters = (newFilters) => {
    appliedFilters.value = newFilters;
    currentPage.value = 1;
};
</script>

<template>
    <main class="main">
        <div class="main__container">
            <AppBreadCrumbs 
                :items="currentBreadCrumbs"
            />
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
                        :filters="appliedFilters"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import './AppMain.scss';
</style>
