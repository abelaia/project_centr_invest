<script setup>
import { ref } from 'vue';
import { CATEGORIES } from '@/constants/categories.js';
import { useProductsStore } from '@/stores/productsStore';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppSelectButton from '@/components/UI/AppSelectButton/AppSelectButton.vue';
import AppSwitchButton from '@/components/UI/AppSwitchButton/AppSwitchButton.vue';

const store = useProductsStore();
const viewMode = ref('grid'); 
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
                <div class="main__right-content">
                    <ProductsGrid :viewMode="viewMode" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import './AppMain.scss';
</style>
