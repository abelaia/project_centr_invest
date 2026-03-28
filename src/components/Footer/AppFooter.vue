<script setup>
import { downloadFile } from '@/utils/download.js';
import { categoriesItems, menuItems } from '@/constants/menu.js';
import AppButton from '@/components/UI/AppButton/AppButton.vue';
import AppInput from '@/components/UI/AppInput/AppInput.vue';

const downloadPriceList = () => {
    downloadFile('/price-list.text', 'price-list.text');
};

const handleEmailSubmit = (email) => {
    console.log('Подписка на email:', email);
};
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__columns">
                <div class="footer__column">
                    <a 
                        href="/"
                        class="footer__logo"
                    >
                        <img 
                            src="@/assets/images/sultan.svg"
                            alt="sultan"
                            class="footer__logo-image"
                        >
                        <span class="footer__logo-text">
                            СУЛТАН
                        </span>
                    </a>
                    <p class="footer__description">
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
                        в Кокчетаве и Акмолинской области
                    </p>
                    <div class="footer__subscribe">
                        <span class="footer__subscribe-title">
                            Подпишись на скидки и акции
                        </span>
                        <AppInput
                            class="footer__btn-email"
                            placeholder="Введите ваш E-mail"
                            :icon="require('@/assets/images/arrow-white.svg')"
                            iconAlt="send"
                            @submit="handleEmailSubmit"
                        />
                    </div>
                </div>
                <div class="footer__column">
                    <h4 class="footer__column-title">
                        Меню сайта:
                    </h4>
                    <nav class="footer__nav">
                        <a
                            v-for="item in menuItems"
                            :key="item.label"
                            :href="item.link"
                            class="footer__nav-link"
                        >
                            {{ item.label }}
                        </a>
                    </nav>
                </div>
                <div class="footer__column">
                    <h4 class="footer__column-title">
                        Категории:
                    </h4>
                    <nav class="footer__nav">
                        <a
                            v-for="item in categoriesItems"
                            :key="item.label"
                            :href="item.link"
                            class="footer__nav-link"
                        >
                            {{ item.label }}
                        </a>
                    </nav>
                </div>
                <div class="footer__column">
                    <h4 class="footer__column-title">
                        Скачать прайс-лист:
                    </h4>
                    <AppButton
                        class="footer__btn-price"
                        text="Прайс-лист"
                        :icon="require('@/assets/images/save-icon.svg')"
                        iconPosition="right"
                        @click="downloadPriceList"
                    />
                    <h4 class="footer__column-title-links">
                        Связь в мессенджерах:
                    </h4>
                    <div class="footer__social">
                        <a href="#">
                            <img 
                                class="footer__social-icon"
                                src="@/assets/images/whatsapp.svg"
                                alt="whatsapp"
                            >
                        </a>
                        <a href="#">
                            <img 
                                class="footer__social-icon"
                                src="@/assets/images/telegram.svg"
                                alt="telegram"
                            >
                        </a>
                    </div>
                </div>
                <div class="footer__column">
                    <h4 class="footer__column-title">
                        Контакты:
                    </h4>
                    <div class="footer__contacts">
                        <a
                           href="tel:+77774900091" 
                           class="footer__contacts-phone"
                        >
                           +7 (777) 490-00-91
                        </a>
                        <span class="footer__contacts-work-time">
                            время работы: 9:00-20:00
                        </span>
                        <a href="#" class="footer__contacts-order-call">
                            Заказать звонок
                        </a>
                        <div class="footer__contacts-mail-text">
                            <a 
                                href="mailto:opt.sultan@mail.ru"
                                class="footer__contacts-mail-link"
                            >
                                opt.sultan@mail.ru
                            </a>
                            <span class="footer__contacts-mail-description">
                                На связи в любое время
                            </span>
                        </div>
                    </div>
                    <div class="footer__pay">
                        <img 
                            src="@/assets/images/visa.png"
                            alt="visa"
                            class="footer__visa-icon"
                        >
                        <img 
                            src="@/assets/images/mastercard.png"
                            alt="mastercard"
                            class="footer__mastercard-icon"
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import './AppFooter.scss';
</style>
