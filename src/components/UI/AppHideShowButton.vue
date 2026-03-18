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
        <span class="toggle-btn__arrow">
            {{ expanded ? '▲' : '▼' }}
        </span>
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
