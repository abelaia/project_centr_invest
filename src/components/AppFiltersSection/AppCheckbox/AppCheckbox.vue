<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
    value: {
        type: [String, Number],
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    count: {
        type: [Number, String],
        default: null,
    },
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed({
    get: () => props.modelValue.includes(props.value),
    set: (val) => {
        if (val) {
            emit('update:modelValue', [...props.modelValue, props.value]);
        } else {
            emit('update:modelValue', props.modelValue.filter(v => v !== props.value));
        }
    },
});
</script>

<template>
    <label class="checkbox">
        <input 
            type="checkbox" 
            class="checkbox__input"
            v-model="isChecked"
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
