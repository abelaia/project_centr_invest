import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';

export const INITIAL_FILTERS = {
    price: {
        min: 0,
        max: 10000,
    },
    manufacturers: [],
};

export const useFilters = () => {
    const filters = ref(cloneDeep(INITIAL_FILTERS));

    const resetFilters = () => {
        filters.value = cloneDeep(INITIAL_FILTERS);
    };

    const updatePrice = (min, max) => {
        filters.value.price.min = min;
        filters.value.price.max = max;
    };

    const updateManufacturers = (selectedIds) => {
        filters.value.manufacturers = selectedIds;
    };

    return {
        filters,
        resetFilters,
        updatePrice,
        updateManufacturers,
    };
};
