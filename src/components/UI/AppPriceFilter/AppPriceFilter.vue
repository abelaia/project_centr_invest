<script>
export default {
    name: 'AppPriceFilter',
    props: {
        minPrice: {
            type: Number,
            default: 0,
        },
        maxPrice: {
            type: Number,
            default: 10000,
        },
    },
    emits: ['update:minPrice', 'update:maxPrice'],
};
</script>

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
            <span class="price-filter__separator">
                -
            </span>
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

<style lang="scss" scoped>
@import './AppPriceFilter.scss';
</style>
