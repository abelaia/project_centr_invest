<template>
    <div class="sort">
        <select 
            class="sort__select" 
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

<script>
export default {
    name: 'SelectButton',
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.sort {
    display: flex;
    align-items: center;
    gap: 5px;

    &__label {
        font-size: $font-size-md;
        color: $color-primary;
    }

    &__select {
        border: none;
        background: none;
        font-size: $font-size-md;
        font-weight: $font-weight-medium;
        color: $color-black;
        appearance: none;
        padding-right: 20px;
        background-image: url('@/assets/images/arrow.svg');
        background-repeat: no-repeat;
        background-position: right center;
        background-size: 12px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
}
</style>
