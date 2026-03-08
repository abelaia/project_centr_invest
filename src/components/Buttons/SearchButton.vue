<template>
    <div class="search-container">
        <input type="text" placeholder="Поиск..." class="search-input">
        <button class="search-btn">
            <img src="@/assets/images/search.svg" alt="search" class="search-icon">
        </button>
    </div>
</template>

<script>
export default {
    name: 'SearchButton'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.search-container {
    display: flex;
    align-items: center;
    max-width: 260px;
    width: 100%;
    position: relative;

    .search-input {
        width: 100%;
        height: 59px;
        padding: 0 50px 0 20px;
        border: 1px solid $color-gray-light;
        border-radius: 36px;
        font-size: $font-size-xs;
        color: $color-gray-dark;
        background: $color-gray-search;  
    }

    .search-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 39px;
        height: 39px;
        position: absolute;
        right: 10px;
        top: 10px;
        background: $color-secondary;
        border: none;
        border-radius: 50%;
        cursor: pointer;

        .search-icon {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }
    }
}
</style>
