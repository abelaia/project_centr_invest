<script setup>
/* eslint-disable */
defineProps({
    items: {
        type: Array,
        required: true,
    },
    isColumn: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <nav 
        class="nav-menu"
        :class="{ 'nav-menu--column': isColumn }"
    >
        <a
            v-for="(item, index) in items"
            :key="index"
            :href="item.link || '#'"
            class="nav-menu__link"
        >
            {{ item.label }}
        </a>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.nav-menu {
    display: flex;
    gap: 25px;

    &--column {
        flex-direction: column;
        gap: 20px;
    }

    &__link {
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
        text-decoration: none;
        color: $color-primary;
        transition: color 0.2s;

        &:hover {
            color: $color-secondary;
        }
    }
}
</style>