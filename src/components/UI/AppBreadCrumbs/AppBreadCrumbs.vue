<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="breadcrumbs">
        <a
            v-for="(item, index) in items"
            :key="index"
            class="breadcrumbs__link"
        >
            {{ item.label }}
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.breadcrumbs {
    display: flex;
    gap: 20px;

    &__link {
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
        color: $color-primary;
        background: none;
        border: none;
        transition: all 0.05s ease;
        cursor: pointer;

        &:hover {
            color: $color-black;
        }

        &:active {
            color: $color-black;
        }
    }
}
</style>
