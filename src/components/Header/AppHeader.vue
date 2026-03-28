<script setup>
import { menuItems } from '@/constants/menu.js';
import { downloadFile } from '@/utils/download.js';
import AppButton from '@/components/UI/AppButton/AppButton.vue';
import AppSearch from '@/components/UI/AppSearch/AppSearch.vue';
import AppBasket from '@/components/AppBasket/AppBasket.vue';

const downloadPriceList = () => {
    downloadFile('/price-list.text', 'price-list.text');
};
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__top-bar">
                <div class="header__top-bar-left">
                    <img 
                        src="@/assets/images/location.svg"
                        alt="location"
                        class="header__icon"
                    >
                    <div class="header__address-info">
                        <span class="header__address-main">
                            г. Кокчетав, ул. Ж. Ташенова 129Б
                        </span>
                        <span class="header__address-market">
                            (Рынок Восточный)
                        </span>
                    </div>
                    <img 
                        src="@/assets/images/mail-icon.svg"
                        alt="mail"
                        class="header__icon"
                    >
                    <div class="header__mail-text">
                        <a href="mailto:opt.sultan@mail.ru">
                            opt.sultan@mail.ru
                        </a>
                        <span>На связи в любое время</span>
                    </div>
                </div>
                <div class="header__top-bar-right">
                    <nav class="header__nav">
                        <a
                            v-for="item in menuItems"
                            :key="item.label"
                            :href="item.link"
                            class="header__nav-link"
                        >
                            {{ item.label }}
                        </a>
                    </nav>
                </div>
            </div>
            <div class="header__main-bar">
                <a 
                    href="/"
                    class="header__logo"
                >
                    <img 
                        src="@/assets/images/sultan.svg"
                        alt="sultan"
                        class="header__logo-image"
                    >
                    <span class="header__logo-text">
                        СУЛТАН
                    </span>
                </a>
                <AppButton
                    text="Каталог"
                    :icon="require('@/assets/images/catalog.svg')"
                    iconPosition="right"
                />
                <AppSearch
                    class="header__search"
                    placeholder="Поиск..."
                    :icon="require('@/assets/images/search.svg')"
                    iconAlt="search"
                    @submit="handleSearch"
                />
                <div class="header__phone-info">
                    <div class="header__phone-text">
                        <a 
                            href="tel:+77774900091"
                            class="header__phone-number"
                        >
                            +7 (777) 490-00-91
                        </a>
                        <span class="header__work-time">время работы: 9:00-20:00</span>
                        <a 
                            href="#"
                            class="header__order-call"
                        >
                            Заказать звонок
                        </a>
                    </div>
                    <div class="header__cart-image">
                        <img 
                            src="@/assets/images/women.png"
                            alt="women"
                            class="header__women-image"
                        >
                    </div>
                </div>
                <AppButton
                    text="Прайс-лист"
                    :icon="require('@/assets/images/save-icon.svg')"
                    iconPosition="right"
                    @click="downloadPriceList"
                />
                <div class="header__basket">
                    <AppBasket />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
