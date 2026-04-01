<script setup>
import { sortOptions } from '@/models/sortOptions.js';

defineProps({
    modelValue: {
        type: String,
        default: 'name',
    },
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="app-select">
        <select 
            class="app-select__field" 
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option 
                class="app-select__field-option"
                v-for="option in sortOptions" 
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-select {
    display: flex;
    align-items: center;
    gap: 5px;

    &__field {
        padding-right: 20px;
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-primary;
        background: none;
        background-image: url('@/assets/images/arrow.svg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 12px;
        border: none;
        cursor: pointer;
        appearance: none;
    }

    &__field-option {
        padding: 10px;
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-primary;
        background: $color-white;
        border: none;

        &:hover {
            background: $color-secondary-light;
        }

        &:checked {
            background: $color-secondary;
            color: $color-white;
        }
    }
}
</style>
