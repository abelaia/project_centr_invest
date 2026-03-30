import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { INITIAL_FILTERS } from '@/constants/initialFilters';

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
