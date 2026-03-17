<script>
export default {
    name: 'AppCheckbox',
    props: {
        label: {
            type: String,
            required: true
        },
        count: {
            type: [Number, String],
            default: null
        }
    },
}
</script>

<template>
    <label class="checkbox">
        <input 
            type="checkbox" 
            class="checkbox__input"
            v-model="checked"
        >
        <span class="checkbox__label">
            {{ label }}
        </span>
        <span 
            v-if="count"
            class="checkbox__count"
        >
            ({{ count }})
        </span>
    </label>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: $font-size-sm;
    color: $color-primary;
    cursor: pointer;

    &__input {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }

    &__count {
        font-size: $font-size-xs;
        color: $color-gray-medium;
    }
}
</style>
