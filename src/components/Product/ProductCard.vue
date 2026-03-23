<script setup>
import AppButton from '@/components/UI/AppButton.vue';
import { useProductsStore } from '@/stores/productsStore';

defineProps({
    product: {
        type: Object,
        required: true,
    },
    viewMode: {
        type: String,
        default: 'grid',
    },
});

const store = useProductsStore();
</script>

<template>
    <div :class="`product-card product-card--${viewMode}`">
        <div class="product-card__image-wrapper">
            <img 
                :src="product.image"
                :alt="product.title"
                class="product-card__image"
            >
        </div>
        <div class="product-card__content">
            <span class="product-card__weight">
                {{ product.weight }}
            </span>
            <h3 class="product-card__title">
                {{ product.title }}
            </h3>
            <div class="product-card__info">
                <p>
                    Штрихкод:
                    <span class="product-card__info-value">
                        {{ product.barcode }}
                    </span>
                </p>
                <p>
                    Производитель:
                    <span class="product-card__info-value">
                        {{ product.manufacturer }}
                    </span>
                </p>
                <p>
                    Бренд:
                    <span class="product-card__info-value">
                        {{ product.brand }}
                    </span>
                </p>
            </div>
            <div class="product-card__bottom">
                <span class="product-card__price">
                    {{ product.price }}
                </span>
                <AppButton
                    text="В КОРЗИНУ"
                    :icon="require('@/assets/images/white-basket.svg')"
                    iconPosition="right"
                    size="small"
                    @click="store.addToCart(product)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './ProductCard.scss';
</style>
