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
                    <select name="name" id="name-select" class="select">
                        <option value="">Название</option>
                        <option value="dog">Производитель</option>
                        <option value="cat">Цена</option>
                        <option value="hamster">Бренд</option>
                    </select>
                    <div class="switch-container">
                        <div class="switch-buttons">
                            <button 
                                class="switch-btn" 
                                :class="{ active: activeTab === 'grid' }"
                                @click="activeTab = 'grid'"
                            >
                                <img src="@/assets/images/grid-icon.svg" alt="grid" class="icon">
                            </button>
                            <button 
                                class="switch-btn" 
                                :class="{ active: activeTab === 'list' }"
                                @click="activeTab = 'list'"
                            >
                                <img src="@/assets/images/list-icon.svg" alt="list" class="icon">
                            </button>
                            <div class="active-indicator" :style="{ left: indicatorPosition }"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="categories-list">
                <div 
                    v-for="category in categories" 
                    :key="category.id"
                    class="category-item"
                >
                    {{ category.name }}
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { CATEGORIES } from '@/constants'

export default {
    name: 'AppMain',
    data() {
        return {
            activeTab: 'grid',
            categories: CATEGORIES
        }
    },
    computed: {
        indicatorPosition() {
            return this.activeTab === 'grid' ? '3px' : '50px';
        }
    }
}
</script>

<style lang="scss" scoped>
@import './Main.scss';
</style>
