<script>
export default {
    name: 'AppBasket',
    data() {
        return {
            items: [],
            totalPrice: 0
        }
    },
    computed: {
        itemCount() {
            return this.items.length
        }
    },
    methods: {
        addItem(product) {
            this.items.push(product)
            this.calculateTotal()
        },
        calculateTotal() {
            this.totalPrice = this.items.reduce((sum, item) => {
                const price = parseFloat(item.price.replace(',', '.').replace('₸', '').trim())
                return sum + price
            }, 0)
        }
    }
}
</script>

<template>
    <div class="basket">
        <button class="basket__btn">
            <div class="basket__icon-wrapper">
                <img src="@/assets/images/basket.svg" alt="basket" class="basket__icon">
                <span v-if="itemCount > 0" class="basket__badge">{{ itemCount }}</span>
            </div>
            <div class="basket__info">
                <span class="basket__text">Корзина</span>
                <span class="basket__total">{{ totalPrice.toFixed(2).replace('.', ',') }} ₸</span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.basket {
    display: flex;
    align-items: center;

    &__btn {
        display: flex;
        align-items: center;
        gap: 15px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
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
        width: 18px;
        height: 18px;
        background: $color-secondary;
        color: $color-white;
        font-weight: $font-weight-bold;
        font-size: $font-size-sm;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
    }

    &__text {
        color: $color-primary;
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
    }

    &__total {
        color: $color-black;
        font-size: $font-size-sm;
        font-weight: $font-weight-semibold;
    }
}
</style>
