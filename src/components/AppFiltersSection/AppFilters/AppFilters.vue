<script setup>
import { useFilters } from '@/composables/useFilters';
import { manufacturers } from '@/constants/manufacturers.js';
import AppPriceFilter from '@/components/UI/AppPriceFilter/AppPriceFilter.vue';
import AppFilterGroup from '@/components/AppFiltersSection/AppFilterGroup/AppFilterGroup.vue';
import AppButton from '@/components/UI/AppButton/AppButton.vue';

const { localFilters, resetFilters, updatePrice } = useFilters();

const emit = defineEmits(['apply']);

const handleReset = () => {
    resetFilters();
    emit('apply', localFilters.value);
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
                :min-price="localFilters.price.min"
                :max-price="localFilters.price.max"
                @update:min-price="updatePrice($event, localFilters.price.max)"
                @update:max-price="updatePrice(localFilters.price.min, $event)"
            />
        </div>
        <AppFilterGroup 
            v-model="localFilters.manufacturers"
            title="Производитель"
            :items="manufacturers"
        />
        <div class="filters__buttons">
            <AppButton
                text="Показать"
                :icon="null"
                iconPosition="right"
                @click="$emit('apply', localFilters.value)"
            />
            <AppButton
                :icon="require('@/assets/images/delete-basket.svg')"
                size="medium"
                :rounded="true"
                @click="handleReset"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './AppFilters.scss';
</style>
