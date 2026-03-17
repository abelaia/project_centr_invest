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
            ></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.app-switch {
    display: flex;
    justify-content: flex-end;

    &__buttons {
        position: relative;
        display: flex;
        width: 100px;
        height: 45px;
        padding: 3px;
        background: $color-switch-bg;
        border-radius: 30px;
        opacity: 0.2;
    }

    &__btn {
        position: relative;
        z-index: 2;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
    }

    &__icon {
        width: 16px;
        height: 16px;
        padding: 10px 16px;
        object-fit: contain;
    }

    &__indicator {
        position: absolute;
        top: 4px;
        left: 3px;
        bottom: 4px;
        z-index: 1;
        width: 49px;
        height: 42px;
        background: $color-white;
        border-radius: 27px;
        box-shadow: 0 2px 4px $color-indicator-shadow;
        transition: left 0.3s ease;
    }
}
</style>
