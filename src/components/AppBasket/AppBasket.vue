<script setup>
import { useProductsStore } from '@/stores/productsStore';

const store = useProductsStore();
</script>

<template>
    <div class="basket">
        <button
            type="button"
            class="basket__button"
        >
            <div class="basket__icon-wrapper">
                <img 
                    src="@/assets/images/basket.svg"
                    alt="basket"
                    class="basket__icon"
                >
                <span 
                    v-if="store.cartCount > 0"
                    class="basket__badge"
                >
                    {{ store.cartCount }}
                </span>
            </div>
            <div class="basket__info">
                <span class="basket__text">
                    Корзина
                </span>
                <span class="basket__total">
                    {{ store.cartTotal.toFixed(2).replace('.', ',') }} ₸
                </span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.basket {
    display: flex;
    align-items: center;

    &__button {
        display: flex;
        align-items: center;
        gap: 15px;
        background: none;
        border: none;
        cursor: pointer;
    }

    &__icon-wrapper {
        position: relative;
        display: flex;
    }

    &__icon {
        width: 40px;
        height: 30px;
        object-fit: contain;
    }

    &__badge {
        position: absolute;
        top: -8px;
        right: -8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        padding: 0 4px;
        font-weight: $font-weight-bold;
        font-size: $font-size-sm;
        color: $color-white;
        background: $color-secondary;
        border-radius: 50%;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }

    &__text {
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
        color: $color-primary;
        cursor: default;
    }

    &__total {
        font-size: $font-size-sm;
        font-weight: $font-weight-semibold;
        color: $color-black;
        cursor: default;
    }
}
</style>
