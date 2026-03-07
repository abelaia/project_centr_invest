<template>
    <div class="breadcrumbs">
        <button class="breadcrumbs__btn">
            Главная
        </button>
        <button class="breadcrumbs__btn">
            Косметика и гигиена
        </button>
    </div>
</template>

<script>
export default {
    name: 'AppBreadcrumbs'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.breadcrumbs {
    display: flex;
    gap: 20px;
    margin-bottom: 42px;

    &__btn {
        padding: 0;
        color: $color-primary;
        background: none;
        border: none;
        font-size: $font-size-sm;
        font-weight: $font-weight-light;
        cursor: pointer;

        &:focus {
            color: $color-black;
        }
    }
}
</style>
