<script>
export default {
    name: 'AppSwitch',
    props: {
        modelValue: {
            type: String,
            default: 'grid',
        },
        options: {
            type: Array,
            default: () => [
                { value: 'list', icon: 'list-icon.svg' },
                { value: 'grid', icon: 'grid-icon.svg' },
            ],
        },
    },
    computed: {
        indicatorPosition() {
            const index = this.options.findIndex(opt => opt.value === this.modelValue);
            return index === 0 ? '3px' : '50px';
        },
    },
};
</script>

<template>
    <div class="app-switch">
        <div class="app-switch__buttons">
            <button
                v-for="(option, idx) in options"
                :key="idx"
                class="app-switch__btn"
                :class="{ 'app-switch__btn--active': modelValue === option.value }"
                @click="$emit('update:modelValue', option.value)"
            >
                <img
                    :src="require(`@/assets/images/${option.icon}`)"
                    :alt="option.value"
                    class="app-switch__icon"
                >
            </button>
            <div
                class="app-switch__indicator"
                :style="{ left: indicatorPosition }"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './AppSwitchButton.scss';
</style>
