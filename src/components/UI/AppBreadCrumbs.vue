<script>
export default {
    name: 'AppBreadcrumbs',
    props: {
        items: {
            type: Array,
            default: () => [
                { label: 'Главная' },
                { label: 'Косметика и гигиена' }
            ]
        }
    },
}
</script>

<template>
    <div class="breadcrumbs">
        <button
            v-for="(item, index) in items"
            :key="index"
            class="breadcrumbs__btn"
        >
            {{ item.label }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.breadcrumbs {
    display: flex;
    gap: 20px;
    margin-bottom: 42px;

    &__btn {
        padding: 0;
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
        color: $color-primary;
        background: none;
        border: none;
        cursor: pointer;

        &:focus {
            color: $color-black;
        }
    }
}
</style>
