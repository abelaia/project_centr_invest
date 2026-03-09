<template>
    <div class="email-container">
        <input type="email" placeholder="Введите ваш E-mail" class="email-input">
        <button class="email-btn">
            <img src="@/assets/images/arrow-white.svg" alt="arrow" class="email-icon">
        </button>
    </div>
</template>

<script>
export default {
    name: 'EmailButton'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.email-container {
    display: flex;
    align-items: center;
    max-width: 280px;
    width: 100%;
    position: relative;

    .email-input {
        width: 100%;
        height: 59px;
        padding: 0 50px 0 20px;
        border: 1px solid $color-gray-light;
        border-radius: 36px;
        font-size: $font-size-xs;
        font-weight: $font-weight-regular;
        color: $color-gray-dark;
        background: $color-white;  
    }

    .email-btn {
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

        .email-icon {
            width: 18px;
            height: 18px;
            object-fit: contain;
        }
    }
}
</style>
