<script>
export default {
    name: 'AppPriceFilter',
    props: {
        minPrice: {
            type: Number,
            default: 0
        },
        maxPrice: {
            type: Number,
            default: 10000
        },
        inputWidth: {
            type: String,
            default: '100px'
        }
    },
}
</script>

<template>
    <div class="price-filter">
        <div class="price-filter__inputs">
            <input 
                type="number" 
                placeholder="0" 
                class="price-filter__input"
                :style="{ width: inputWidth }"
                :value="minPrice"
                @input="$emit('update:minPrice', +$event.target.value)"
            >
            <span class="price-filter__separator">
                -
            </span>
            <input 
                type="number" 
                placeholder="10000" 
                class="price-filter__input"
                :style="{ width: inputWidth }"
                :value="maxPrice"
                @input="$emit('update:maxPrice', +$event.target.value)"
            >
        </div>
    </div>
</template>

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
        height: 24px;
        padding: 0 10px;
        font-size: $font-size-xs;
        font-weight: $font-weight-light;
        text-align: center;
        color: $color-primary;
        background: rgba(255, 198, 80, 0.3);
        border: none;
        border-radius: 20px;

        &:focus {
            outline: none;
            border-color: $color-primary;
        }

        &::placeholder {
            color: $color-gray-medium;
        }
    }

    &__separator {
        font-weight: $font-weight-medium;
        color: $color-primary;
    }
}
</style>
