<script>
import AppButton from '@/components/UI/AppButton.vue';
import AppSearchButton from '@/components/UI/AppSearchButton.vue';
import AppBasket from '@/components/UI/AppBasket.vue';
import { menuItems } from '@/constants/menu.js';

export default {
    name: 'AppHeader',
    components: {
        AppSearchButton,
        AppButton,
        AppBasket,
    },
    data() {
        return {
            menuItems,
        };
    },
};
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="top-bar">
                <div class="top-bar-left">
                    <img 
                        src="@/assets/images/location.svg"
                        alt="location"
                        class="icon"
                    >
                    <div class="address-info">
                        <span class="address-main">
                            г. Кокчетав, ул. Ж. Ташенова 129Б
                        </span>
                        <span class="address-market">
                            (Рынок Восточный)
                        </span>
                    </div>
                    <img 
                        src="@/assets/images/mail-icon.svg"
                        alt="mail"
                        class="icon"
                    >
                    <div class="mail-text">
                        <a href="mailto:opt.sultan@mail.ru">
                            opt.sultan@mail.ru
                        </a>
                        <span>На связи в любое время</span>
                    </div>
                </div>
                <div class="top-bar-right">
                    <nav>
                        <a
                            v-for="item in menuItems"
                            :key="item.label"
                            :href="item.link"
                        >
                            {{ item.label }}
                        </a>
                    </nav>
                </div>
            </div>
            <div class="main-bar">
                <div class="logo">
                    <img 
                        src="@/assets/images/sultan.svg"
                        alt="sultan"
                        class="logo-image"
                    >
                    <span class="logo-text">
                        СУЛТАН
                    </span>
                </div>
                <AppButton
                    text="Каталог"
                    :icon="require('@/assets/images/catalog.svg')"
                    iconPosition="right"
                />
                <AppSearchButton
                    class="subscribe-input"
                    placeholder="Поиск..."
                    :icon="require('@/assets/images/search.svg')"
                    iconAlt="search"
                    @submit="handleSearch"
                />
                <div class="phone-info">
                    <div class="phone-text">
                        <a 
                            href="tel:+77774900091"
                            class="number"
                        >
                            +7 (777) 490-00-91
                        </a>
                        <span>время работы: 9:00-20:00</span>
                        <a 
                            href="#"
                            class="order-call"
                        >
                            Заказать звонок
                        </a>
                    </div>
                    <div class="cart-image">
                        <img 
                            src="@/assets/images/women.png"
                            alt="women"
                            class="women-image"
                        >
                    </div>
                </div>
                <AppButton
                    text="Прайс-лист"
                    :icon="require('@/assets/images/save-icon.svg')"
                    iconPosition="right"
                />
                <div class="basket-container">
                    <AppBasket />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import './Header.scss';
</style>
