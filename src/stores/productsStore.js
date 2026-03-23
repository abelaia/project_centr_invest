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
        cartItems,
        cartTotal,
        cartCount,
        addToCart,
    };
});
