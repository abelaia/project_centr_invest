<script setup>
import { ref, computed, watch } from 'vue';
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/productsStore';

const props = defineProps({
    sortBy: {
        type: String,
        default: 'name',
    },
});

const store = useProductsStore();
const currentPage = ref(1);
const itemsPerPage = 6;

const sortedProducts = computed(() => {
    const sorted = [...store.items].sort((a, b) => {
        switch(props.sortBy) {
            case 'name':
                return a.title.localeCompare(b.title);
            case 'manufacturer':
                return a.manufacturer.localeCompare(b.manufacturer);
            case 'brand':
                return a.brand.localeCompare(b.brand);
            case 'price': {
                return a.price - b.price;
            }
            default:
                return 0;
        }
    });
    return sorted;
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedProducts.value.slice(start, end);
});

watch(() => props.sortBy, () => {
    currentPage.value = 1;
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
