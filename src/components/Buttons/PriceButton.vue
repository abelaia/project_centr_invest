<template>
    <button class="price-btn">
        Прайс-лист
        <img src="@/assets/images/save-icon.svg" alt="save" class="price-icon">
    </button>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.price-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 44px;
    background: $color-secondary;
    border: none;
    border-radius: 40px;
    color: $color-white; 
    font-size: $font-size-sm;
    font-weight: $font-weight-bold;
    cursor: pointer;
    white-space: nowrap;

    .price-icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
}
</style>
