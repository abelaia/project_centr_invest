<script setup>
import { useFilters } from '@/composables/useFilters';
import AppPriceFilter from '@/components/UI/AppPriceFilter/AppPriceFilter.vue';
import AppManufacturer from '@/components/AppFiltersSection/AppManufacturer/AppManufacturer.vue';
import AppButton from '@/components/UI/AppButton/AppButton.vue';
import AppRoundButton from '@/components/UI/AppRoundButton/AppRoundButton.vue';

const { filters, resetFilters, updatePrice } = useFilters();
const emit = defineEmits(['apply']);
const applyFilters = () => {
    emit('apply', filters.value);
};
</script>

<template>
    <div class="filters">
        <h2 class="filters__title">
            ПОДБОР ПО ПАРАМЕТРАМ
        </h2>
        <div class="filters__price-section">
            <span class="filters__price-label">
                Цена
                <span>₸</span>
            </span>
            <AppPriceFilter 
                :minPrice="filters.price.min"
                :maxPrice="filters.price.max"
                @update:minPrice="updatePrice($event, filters.price.max)"
                @update:maxPrice="updatePrice(filters.price.min, $event)"
            />
        </div>
        <AppManufacturer v-model="filters.manufacturers" />
        <div class="filters__buttons">
            <AppButton
                text="Показать"
                :icon="null"
                iconPosition="right"
                @click="applyFilters"
            />
            <AppRoundButton
                :icon="require('@/assets/images/delete-basket.svg')"
                size="medium"
                @click="resetFilters"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './AppFilters.scss';
</style>
