<template>
    <header class="main">
        <div class="container">

            <Breadcrumbs />

            <div class="top-section">
                <h1 class="header">КОСМЕТИКА И ГИГИЕНА</h1>
                <div class="sort">
                    <span class="sort-text">Сортировка:</span>
                    <SelectButton />
                    <SwitchButton 
                        :activeTab="activeTab" 
                        @update:activeTab="activeTab = $event"
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
                <aside class="sidebar">
                    <h2 class="sidebar-title">ПОДБОР ПО ПАРАМЕТРАМ</h2>
                    
                    <div class="price-section">
                        <span class="price-label">Цена
                             <span>₸</span>
                        </span>
                        <PriceFilter />
                    </div>
                    
                    <Manufacturer />

                    <div class="sidebar-buttons">
                        <button class="show-btn">Показать</button>
                        <button class="delete-btn">
                            <img src="@/assets/images/delete-basket.svg" alt="search" class="delete-icon">
                        </button>
                    </div>
                </aside>
                
                <div class="right-content">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';
import { CATEGORIES } from '@/constants';
import SwitchButton from '@/components/Buttons/SwitchButton.vue';
import SelectButton from '@/components/Buttons/SelectButton.vue';
import PriceFilter from '@/components/PriceFilter/PriceFilter.vue';
import Manufacturer from '@/components/Manufacturer/Manufacturer.vue';

export default {
    name: 'AppMain',
    components: {
        Breadcrumbs,
        SelectButton,
        SwitchButton,
        PriceFilter,
        Manufacturer,
    },
    data() {
        return {
            selectedSort: 'name',
            activeTab: 'grid',
            categories: CATEGORIES,
        };
    },
}
</script>

<style lang="scss" scoped>
@import './Main.scss';
</style>

