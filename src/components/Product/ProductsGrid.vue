<script setup>
import { ref, computed, watch } from 'vue';
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/productsStore';
import Pagination from '@/components/UI/Pagination/Pagination.vue';

const props = defineProps({
    viewMode: {
        type: String,
        default: 'grid',
    },
    filters: {
        type: Object,
        default: null,
    },
});

const ITEMS_PER_PAGE = 6;
const store = useProductsStore();
const currentPage = ref(1);

const filteredProducts = computed(() => {
    let products = [...store.items];
    
    if (props.filters) {
        products = products.filter(p => 
            p.price >= props.filters.price.min && 
            p.price <= props.filters.price.max
        );
        
        if (props.filters.manufacturers?.length) {
            products = products.filter(p => 
                props.filters.manufacturers.includes(p.manufacturer)
            );
        }
    }
    
    return products.sort((a, b) => {
        switch(store.sortBy) {
            case 'name': return a.title.localeCompare(b.title);
            case 'price': return a.price - b.price;
            default: return 0;
        }
    });
});

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    
    return filteredProducts.value.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / ITEMS_PER_PAGE);
});

watch(() => props.filters, () => {
    currentPage.value = 1;
}, { deep: true });
</script>

<template>
    <div class="products-section">
        <div 
            v-if="filteredProducts.length === 0"
            class="products-section__empty"
        >
            <p>Ничего не найдено</p>
        </div>
        <template v-else>
            <div
                class="products-section__grid"
                :class="[
                    'products-section__grid',
                    `products-section__grid--${props.viewMode}`,
                ]"
            >
                <ProductCard 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    :product="product"
                    :viewMode="props.viewMode"
                />
            </div>
            <Pagination 
                class="products-section__pagination"
                v-if="totalPages > 1"
                :currentPage="currentPage"
                :totalPages="totalPages"
                @update:currentPage="currentPage = $event"
            />
        </template>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.products-section {
    &__empty {
        text-align: center;
        margin-top: 100px;
        margin-left: 300px;

        p {
            margin-bottom: 10px;
            font-size: $font-size-heading;
            font-weight: $font-weight-semibold;
            color: $color-primary;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        &--list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    &__pagination {
        margin-top: 50px;
    }
}
</style>
