<script setup>
import { ref } from 'vue';
import { CATEGORIES } from '@/constants/categories.js';
import { useProductsStore } from '@/stores/productsStore';
import AppSelectButton from '@/components/UI/AppSelectButton/AppSelectButton.vue';
import AppSwitchButton from '@/components/AppSwitchButton/AppSwitchButton.vue';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppManufacturer from '@/components/AppManufacturer/AppManufacturer.vue';
import AppButton from '@/components/UI/AppButton/AppButton.vue';
import AppRoundButton from '@/components/UI/AppRoundButton/AppRoundButton.vue';
import AppPriceFilter from '@/components/UI/AppPriceFilter/AppPriceFilter.vue';

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
                <div class="main__filter">
                    <h2 class="main__filter-title">
                        ПОДБОР ПО ПАРАМЕТРАМ
                    </h2>
                    <div class="main__price-section">
                        <span class="main__price-label">
                            Цена
                            <span>₸</span>
                        </span>
                        <AppPriceFilter 
                            minPrice="minPrice"
                            maxPrice="maxPrice"
                        />
                    </div>
                    <AppManufacturer />
                    <div class="main__filter-buttons">
                        <AppButton
                            text="Каталог"
                            :icon="null"
                            iconPosition="right"
                        />
                        <AppRoundButton
                            :icon="require('@/assets/images/delete-basket.svg')"
                            size="medium"
                         />
                    </div>
                </div>
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
