<script setup>
import { CATEGORIES } from '@/constants/categories.js';
import { useProductsStore } from '@/stores/productsStore';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppSwitchButton from '@/components/UI/AppSwitchButton/AppSwitchButton.vue';

const store = useProductsStore();
const categories = CATEGORIES;
</script>

<template>
    <main class="main">
        <div class="main__container">
            <div class="main__top-section">
                <h1 class="main__title">
                    КОСМЕТИКА И ГИГИЕНА
                </h1>
                <div class="main__sort">
                    <AppSwitchButton v-model="store.viewMode" />
                </div>
            </div>
            <ul class="main__categories-list">
                <li 
                    v-for="category in categories" 
                    :key="category.id"
                    class="category-item"
                >
                    {{ category.name }}
                </li>
            </ul>
            <div class="main__layout">
                <div class="main__right-content">
                    <ProductsGrid
                        :viewMode="store.viewMode"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@import './AppMain.scss';
</style>
