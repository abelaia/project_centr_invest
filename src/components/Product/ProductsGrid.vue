<template>
    <div class="products-grid">
        <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product"
        />
    </div>
</template>

<script>
import { products } from './products.js';
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductsGrid',
    components: {
        ProductCard
    },
    data() {
        return {
            products
        };
    }
}
</script>

<style lang="scss" scoped>
.products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
