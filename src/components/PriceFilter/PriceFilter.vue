<template>
    <div class="price-filter">
        <div class="price-filter__inputs">
            <input 
                type="number" 
                placeholder="0" 
                class="price-filter__input"
                :value="minPrice"
                @input="$emit('update:minPrice', +$event.target.value)"
            >
            <span class="price-filter__separator">-</span>
            <input 
                type="number" 
                placeholder="10000" 
                class="price-filter__input"
                :value="maxPrice"
                @input="$emit('update:maxPrice', +$event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'PriceFilter',
    props: {
        minPrice: {
            type: Number,
            default: 0
        },
        maxPrice: {
            type: Number,
            default: 10000
        }
    },
    emits: ['update:minPrice', 'update:maxPrice']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.price-filter {
    margin-top: 16px;

    &__inputs {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__input {
        width: 100px;
        height: 24px;
        padding: 0 10px;
        border: none;
        border-radius: 20px;
        font-size: $font-size-xs;
        font-weight: $font-weight-light;
        background: rgba(255, 198, 80, 0.3);
        color: $color-primary;
        text-align: center;

        &:focus {
            outline: none;
            border-color: $color-primary;
        }

        &::placeholder {
            color: $color-gray-medium;
        }
    }

    &__separator {
        color: $color-primary;
        font-weight: $font-weight-medium;
    }
}
</style>