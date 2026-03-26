<script>
export default {
    name: 'AppToggleButton',
    props: {
        expanded: {
            type: Boolean,
            default: false,
        },
        showText: {
            type: String,
            default: 'Показать все',
        },
        hideText: {
            type: String,
            default: 'Скрыть',
        },
        iconShow: {
            type: String,
            default: require('@/assets/images/arrow-down.svg'),
        },
        iconHide: {
            type: String,
            default: require('@/assets/images/arrow-up.svg'),
        },
    },
    emits: ['toggle'],
};
</script>

<template>
    <button 
        class="toggle-btn"
        @click="$emit('toggle')"
    >
        {{ expanded ? hideText : showText }}
        <img 
            :src="expanded ? iconHide : iconShow"
            alt="arrow"
            class="toggle-btn__icon"
        >
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.toggle-btn {
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-primary;
    background: none;
    border: none;
    cursor: pointer;
}
</style>
