<script setup>
import { useFilters } from '@/composables/useFilters';
import { manufacturers } from '@/constants/manufacturers.js';
import AppPriceFilter from '@/components/UI/AppPriceFilter/AppPriceFilter.vue';
import AppManufacturer from '@/components/AppFiltersSection/AppFilterGroup/AppFilterGroup.vue';
import AppButton from '@/components/UI/AppButton/AppButton.vue';
import AppRoundButton from '@/components/UI/AppRoundButton/AppRoundButton.vue';

const { filters, resetFilters, updatePrice } = useFilters();
const emit = defineEmits(['apply']);

const handleReset = () => {
    resetFilters();
    emit('apply', filters.value);
};
</script>

<template>
    <div class="filters">
        <h2 class="filters__title">
            Подбор по параметрам
        </h2>
        <div class="filters__price-section">
            <span class="filters__price-label">
                Цена
                <span>₸</span>
            </span>
            <AppPriceFilter
                :min-price="filters.price.min"
                :max-price="filters.price.max"
                @update:min-price="updatePrice($event, filters.price.max)"
                @update:max-price="updatePrice(filters.price.min, $event)"
            />
        </div>
        <AppManufacturer 
            title="Производитель"
            :items="manufacturers"
            v-model="filters.manufacturers"
        />
        <div class="filters__buttons">
            <AppButton
                text="Показать"
                :icon="null"
                iconPosition="right"
                @click="$emit('apply', filters.value)"
            />
            <AppRoundButton
                :icon="require('@/assets/images/delete-basket.svg')"
                size="medium"
                @click="handleReset"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './AppFilters.scss';
</style>
