<script>
import { CATEGORIES } from '@/constants';
import Manufacturer from '@/components/Manufacturer/Manufacturer.vue';
import ProductsGrid from '@/components/Product/ProductsGrid.vue';
import AppButton from '@/components/UI/AppButton.vue'
import AppRoundButton from '@/components/UI/AppRoundButton.vue'
import AppBreadCrumbs from '@/components/UI/AppBreadCrumbs.vue'
import AppSelectButton from '@/components/UI/AppSelectButton.vue';
import AppSwitchButton from '@/components/UI/AppSwitchButton.vue';
import AppPriceFilter from '@/components/UI/AppPriceFilter.vue';

export default {
    name: 'AppMain',
    components: {
        AppPriceFilter,
        AppBreadCrumbs,
        Manufacturer,
        ProductsGrid,
        AppButton,
        AppRoundButton,
        AppSelectButton,
        AppSwitchButton,
    },
    data() {
        return {
            selectedSort: 'name',
            activeTab: 'grid',
            categories: CATEGORIES,
        };
    },
    emits: ['add-to-cart'],
}
</script>

<template>
    <header class="main">
        <div class="container">

            <AppBreadCrumbs 
                :items="breadcrumbs"
            />

            <div class="top-section">
                <h1 class="header">КОСМЕТИКА И ГИГИЕНА</h1>
                <div class="sort">
                    <AppSelectButton 
                        v-model="selectedSort" 
                    />
                    <AppSwitchButton 
                        v-model="activeTab"
                    />
                </div>
            </div>
            <ul class="categories-list">
                <li 
                    v-for="category in categories" 
                    :key="category.id"
                    class="category-item"
                >
                    {{ category.name }}
                </li>
            </ul>

            <div class="main-layout">
                <div class="filter">
                    <h2 class="filter-title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
                    
                    <div class="price-section">
                        <span class="price-label">Цена
                             <span>₸</span>
                        </span>
                        <AppPriceFilter 
                            minPrice="minPrice"
                            maxPrice="maxPrice"
                        />
                    </div>
                    
                    <Manufacturer />

                    <div class="filter-buttons">
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
                
                <div class="right-content">
                    <ProductsGrid @add-to-cart="$emit('add-to-cart', $event)" />
                    <div class="bottom-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam interdum ut justo, vestibulum sagittis lacus iaculis. 
                            Quis mattis vulputate feugiat massa vestibulum duis. 
                            Faucibus consectetur aliquet sed pellentesque consequat 
                            consectetur congue mauris venenatis. Nunc elit, dignissim 
                            sed nulla ullamcorper enim, malesuada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import './Main.scss';
</style>
