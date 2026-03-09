<template>
    <div class="products-section">
        <div class="products-grid">
            <ProductCard 
                v-for="product in paginatedProducts" 
                :key="product.id" 
                :product="product"
            />
        </div>
        
        <Pagination 
            :currentPage="currentPage"
            :totalPages="totalPages"
            @update:currentPage="currentPage = $event"
        />
    </div>
</template>

<script>
import { products } from './products.js';
import ProductCard from './ProductCard.vue';
import Pagination from '@/components/Pagination/Pagination.vue';

export default {
    name: 'ProductsGrid',
    components: {
        ProductCard,
        Pagination
    },
    data() {
        return {
            allProducts: products,
            currentPage: 1,
            itemsPerPage: 6
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.allProducts.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.allProducts.slice(start, end);
        }
    }
}
</script>

<style lang="scss" scoped>
.products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;
}
</style>