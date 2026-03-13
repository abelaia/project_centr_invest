<script>
import AppButton from '@/components/UI/AppButton.vue';
import AppInputButton from '@/components/UI/AppInputButton.vue';
import AppBasket from '@/components/UI/AppBasket.vue';

export default {
    name: 'AppHeader',
    components: {
        AppInputButton,
        AppButton,
        AppBasket,
    },
}
</script>

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

                <AppButton
                    text="Каталог"
                    :icon="require('@/assets/images/catalog.svg')"
                    iconPosition="right"
                />

                <AppInputButton
                    placeholder="Поиск..."
                    :icon="require('@/assets/images/search.svg')"
                    buttonAlt="search"
                    variant="search"
                    @submit="handleSearch"
                />

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
                
                <AppButton
                    text="Прайс-лист"
                    :icon="require('@/assets/images/save-icon.svg')"
                    iconPosition="right"
                />
                
                <div class="basket-container">
                    <AppBasket ref="basket" />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
