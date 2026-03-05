<template>
    <header class="main">
        <div class="container">
            <div class="button-section">
                <button class="main-btn">
                    Главная
                </button>
                <button class="main-btn">
                    Косметика и гигиена
                </button>
            </div>
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
        </div>
    </header>
</template>

<script>
import { CATEGORIES } from '@/constants';
import SwitchButton from '@/components/Buttons/SwitchButton.vue'
import SelectButton from '../Buttons/SelectButton.vue';

export default {
    name: 'AppMain',
    components: {
        SelectButton,
        SwitchButton
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

