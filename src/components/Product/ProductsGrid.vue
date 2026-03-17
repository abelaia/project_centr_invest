<script>
import { products } from './products.js';
import ProductCard from './ProductCard.vue';
import Pagination from '@/components/UI/Pagination.vue';

export default {
    name: 'ProductsGrid',
    components: {
        ProductCard,
        Pagination,
    },
    props: {
        sortBy: {
            type: String,
            default: 'name'
        },
        viewMode: { 
            type: String,
            default: 'grid'
        }
    },
    data() {
        return {
            allProducts: products,
            currentPage: 1,
            itemsPerPage: 6
        };
    },
    computed: {
        sortedProducts() {
            const sorted = [...this.allProducts].sort((a, b) => {
                switch(this.sortBy) {
                    case 'name':
                        return a.title.localeCompare(b.title);
                    case 'manufacturer':
                        return a.manufacturer.localeCompare(b.manufacturer);
                    case 'brand':
                        return a.brand.localeCompare(b.brand);
                    case 'price': {
                        const priceA = parseFloat(a.price.replace(',', '.').replace('₸', '').trim());
                        const priceB = parseFloat(b.price.replace(',', '.').replace('₸', '').trim());
                        return priceA - priceB;
                    }
                    default:
                        return 0;
                }
            });
            return sorted;
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedProducts.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.allProducts.length / this.itemsPerPage);
        }
    },
    watch: {
        sortBy() {
            this.currentPage = 1;
        }
    },
    emits: ['add-to-cart'], 
}
</script>

<template>
    <div class="products-section">
        <div class="products-grid" :class="{ 'products-grid--list': viewMode === 'list' }">
            <ProductCard 
                v-for="product in paginatedProducts" 
                :key="product.id" 
                :product="product"
                :viewMode="viewMode"
                @add-to-cart="$emit('add-to-cart', $event)"
            />
        </div>
        <Pagination 
            :currentPage="currentPage"
            :totalPages="totalPages"
            @update:currentPage="currentPage = $event"
        />
    </div>
</template>

<style lang="scss" scoped>
.products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 30px;

    &--list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>
