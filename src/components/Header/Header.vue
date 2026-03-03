<template>
    <header class="header">
        <div class="container">
            <div class="top-bar">
                <div class="top-bar-left">
                    <img src="@/assets/images/location.svg" alt="location" class="icon">
                    <div class="address-info">
                        <span class="address-main">г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                        <span class="address-market">(Рынок Восточный)</span>
                    </div>
                    <img src="@/assets/images/mail-icon.svg" alt="mail" class="icon">
                    <div class="mail-text">
                        <a href="#">opt.sultan@mail.ru</a>
                        <span>На связи в любое время</span>
                    </div>
                </div>
                <div class="top-bar-right">
                    <nav>
                        <a href="#">О компании</a>
                        <a href="#">Доставка и оплата</a>
                        <a href="#">Возврат</a>
                        <a href="#">Контакты</a>
                    </nav>
                </div>
            </div>

            <div class="main-bar">
                <div class="logo">
                    <img src="@/assets/images/sultan.svg" alt="sultan" class="logo-image">
                    <span class="logo-text">
                        СУЛТАН
                    </span>
                </div>
                <button class="catalog-btn">
                    Каталог
                    <img src="@/assets/images/catalog.svg" alt="catalog" class="catalog-button">
                </button>
                <div class="search-container">
                    <input type="text" placeholder="Поиск..." class="search-input">
                    <button class="search-btn">
                        <img src="@/assets/images/search.svg" alt="search" class="search-icon">
                    </button>
                </div>
                <div class="phone-info">
                    <div class="phone-text">
                        <a href="#" class="number">+7 (777) 490-00-91</a>
                        <span>время работы: 9:00-20:00</span>
                        <a href="#" class="order-call">Заказать звонок</a>
                    </div>
                    <div class="cart-image">
                        <img src="@/assets/images/women.png" alt="women" class="women-image">
                    </div>
                </div>
                <button class="price-btn">
                    Прайс-лист
                    <img src="@/assets/images/save-icon.svg" alt="save" class="price-icon">
                </button>
                <div class="basket-container">
                    <button class="basket-btn">
                        <img src="@/assets/images/basket.svg" alt="basket" class="basket-icon">
                    </button>
                    <span class="basket-text">Корзина</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>
