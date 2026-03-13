<script>
import AppButton from '@/components/UI/AppButton.vue'

export default {
    name: 'ProductCard',
    components: {
        AppButton,
    },
    props: {
        product: {
            type: Object,
            required: true
        },
        viewMode: {
            type: String,
            default: 'grid'
        }
    },
    emits: ['add-to-cart'],
}
</script>

<template>
    <div class="product-card" :class="{ 'product-card--list': viewMode === 'list' }">
        <div class="product-card__image-wrapper">
            <img :src="product.image" :alt="product.title" class="product-card__image">
        </div>
        
        <div class="product-card__content">
            <span class="product-card__weight">{{ product.weight }}</span>
            <h3 class="product-card__title">{{ product.title }}</h3>
            <div class="product-card__info">
                <p>
                    Штрихкод:
                    <span class="product-card__info-value">{{ product.barcode }}</span>
                </p>
                <p>
                    Производитель:
                    <span class="product-card__info-value">{{ product.manufacturer }}</span>
                </p>
                <p>
                    Бренд:
                    <span class="product-card__info-value">{{ product.brand }}</span>
                </p>
            </div>
            <div class="product-card__bottom">
                <span class="product-card__price">{{ product.price }}</span>
                <AppButton
                    text="В КОРЗИНУ"
                    :icon="require('@/assets/images/white-basket.svg')"
                    iconPosition="right"
                    size="small"
                    @click="$emit('add-to-cart', product)"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.product-card {
    width: 290px;
    height: 430px;
    background: $color-white;
    border-radius: 10px;
    padding: 20px 15px;
    box-shadow: 0 4px 20px $color-shadow;
    display: flex;
    flex-direction: column;

    &--list {
        width: 100%;
        height: auto;
        flex-direction: row;
        gap: 30px;
        padding: 20px;

        .product-card__image-wrapper {
            width: 200px;
            flex-shrink: 0;
        }

        .product-card__image {
            height: 200px;
        }

        .product-card__content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .product-card__title {
            margin-top: 10px;
        }

        .product-card__info {
            margin-top: 15px;
        }

        .product-card__bottom {
            margin-top: 20px;
        }
    }

    &__image-wrapper {
        width: 100%;
    }

    &__image {
        width: 100%;
        height: 194px;
        object-fit: contain;
        margin-bottom: 4px;
    }
    
    &__weight {
        font-size: $font-size-xs;
        font-weight: $font-weight-regular;
        color: $color-primary;
        margin-bottom: 10px;
        text-align: left;
    }

    &__title {
        margin: 0px;
        max-width: 280px;
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
        line-height: 1.3;
        text-align: left;
    } 

    &__info {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;

        p {
            margin: 0;
            font-size: $font-size-sm;
            font-weight: $font-weight-light;
            color: $color-primary;
            text-align: left;
        }

        &-value {
            font-size: $font-size-sm;
            font-weight: $font-weight-semibold;
            color: $color-black;
        }
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;

        .product-card__price {
            font-size: $font-size-md;
            font-weight: $font-weight-extra-bold;
            color: $color-black;
        }
    }
}
</style>

