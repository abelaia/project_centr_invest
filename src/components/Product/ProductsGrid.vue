<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/productsStore';

const store = useProductsStore();
const currentPage = ref(1);
const itemsPerPage = 6;

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return store.sortedItems.slice(start, end);
});
</script>

<template>
    <div class="products-section">
        <div class="products-grid" :class="`products-grid--${store.viewMode}`"> 
            <ProductCard 
                v-for="product in paginatedProducts" 
                :key="product.id" 
                :product="product"
                :viewMode="store.viewMode"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.products-section {
    .products-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        &--list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
}
</style>
