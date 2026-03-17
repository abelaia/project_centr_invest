<script>
export default {
    name: 'AppSelect',
    props: {
        modelValue: {
            type: String,
            default: 'name'
        },
        options: {
            type: Array,
            default: () => [
                { value: 'name', label: 'Название' },
                { value: 'manufacturer', label: 'Производитель' },
                { value: 'price', label: 'Цена' },
                { value: 'brand', label: 'Бренд' }
            ]
        },
        placeholder: {
            type: String,
            default: 'Сортировка:'
        }
    }
}
</script>

<template>
    <div class="app-select">
        <span v-if="placeholder" class="app-select__label">{{ placeholder }}</span>
        <select 
            class="app-select__field" 
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
        >
            <option 
                v-for="option in options" 
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

    &__label {
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
    }

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
}

::v-deep select option {
    padding: 10px;
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
</style>
