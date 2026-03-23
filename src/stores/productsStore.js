import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { products } from '@/components/Product/products.js';

export const useProductsStore = defineStore('products', () => {
    const items = ref(products);
    const viewMode = ref('grid');

    const setViewMode = (mode) => {
        viewMode.value = mode;
    };

    const cartItems = ref([]);

    const cartTotal = computed(() => {
        return cartItems.value.reduce((sum, item) => {
            const price = parseFloat(item.price.replace(',', '.').replace('₸', '').trim());
            return sum + price;
        }, 0);
    });

    const cartCount = computed(() => cartItems.value.length);

    const addToCart = (product) => {
        cartItems.value.push(product);
    }

    return {
        items,
        viewMode,
        setViewMode,
        cartItems,
        cartTotal,
        cartCount,
        addToCart,
    };
});
