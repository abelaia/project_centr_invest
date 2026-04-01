import { ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { INITIAL_FILTERS } from '@/constants/initialFilters';

export const useFilters = () => {
    const appliedFilters = ref(cloneDeep(INITIAL_FILTERS));

    const localFilters = ref(cloneDeep(INITIAL_FILTERS));

    const applyFilters = () => {
        appliedFilters.value = cloneDeep(localFilters.value);
    };

    const resetFilters = () => {
        localFilters.value = cloneDeep(INITIAL_FILTERS);
        appliedFilters.value = cloneDeep(INITIAL_FILTERS);
    };

    const updatePrice = (min, max) => {
        localFilters.value.price.min = min;
        localFilters.value.price.max = max;
    };

    const updateManufacturers = (selectedIds) => {
        localFilters.value.manufacturers = selectedIds;
    };

    return {
        appliedFilters,
        localFilters,
        applyFilters,
        resetFilters,
        updatePrice,
        updateManufacturers,
    };
};
