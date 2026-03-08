<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.title" class="product-card__image">
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
            <button class="product-card__cart-btn">
                В КОРЗИНУ
                <img src="@/assets/images/white-basket.svg" alt="save" class="basket-icon">
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

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
        
        .product-card__cart-btn {
            margin-right: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 16px 24px;
            background: $color-secondary;
            border: none;
            border-radius: 40px;
            color: $color-white; 
            font-size: $font-size-xxs;
            font-weight: $font-weight-bold;
            cursor: pointer;
            white-space: nowrap;

            .price-icon {
                width: 18px;
                height: 18px;
                object-fit: contain;
            }
        }
    }
}
</style>
