import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { products } from '@/models/products.js';

export const useProductsStore = defineStore('products', () => {
    const items = ref(products);
    const viewMode = ref('grid');
    const sortBy = ref('name');

    const setSortBy = (sort) => {
        sortBy.value = sort;
    };

    const setViewMode = (mode) => {
        viewMode.value = mode;
    };

    const sortedItems = computed(() => {
        const sorted = [...items.value].sort((a, b) => {
            switch(sortBy.value) {
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'manufacturer':
                    return a.manufacturer.localeCompare(b.manufacturer);
                case 'brand':
                    return a.brand.localeCompare(b.brand);
                case 'price':
                    return a.price - b.price;
                default:
                    return 0;
            }
        });
        return sorted;
    });

    const cartItems = ref([]);

    const cartTotal = computed(() => {
        return cartItems.value.reduce((sum, item) => sum + item.price, 0);
    });

    const cartCount = computed(() => cartItems.value.length);

    const addToCart = (product) => {
        cartItems.value.push(product);
    }

    return {
        items,
        viewMode,
        sortBy,
        setSortBy,
        setViewMode,
        sortedItems,
        cartItems,
        cartTotal,
        cartCount,
        addToCart,
    };
});
