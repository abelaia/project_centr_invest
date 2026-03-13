<script>
import AppButton from '@/components/UI/AppButton.vue';
import AppInputButton from '@/components/UI/AppInputButton.vue';

export default {
    name: 'AppFooter',
    components: {
        AppButton,
        AppInputButton,
    }
}
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__columns">
                <div class="footer__column">
                    <div class="footer__logo">
                        <img src="@/assets/images/sultan.svg" alt="sultan" class="footer__logo-image">
                        <span class="footer__logo-text">СУЛТАН</span>
                    </div>
                    <p class="footer__description">
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    
                    <div class="footer__subscribe">
                        <span class="footer__subscribe-title">Подпишись на скидки и акции</span>
                        <AppInputButton
                            placeholder="Введите ваш E-mail"
                            :icon="require('@/assets/images/arrow-white.svg')"
                            buttonAlt="send"
                            type="email"
                            variant="email"
                            maxWidth="280px"
                            @submit="handleEmailSubmit"
                        />
                    </div>
                </div>

                <div class="footer__column">
                    <h4 class="footer__column-title">Меню сайта:</h4>
                    <nav class="footer__nav">
                        <a href="#" class="footer__link">О компании</a>
                        <a href="#" class="footer__link">Доставка и оплата</a>
                        <a href="#" class="footer__link">Возврат</a>
                        <a href="#" class="footer__link">Контакты</a>
                    </nav>
                </div>

                <div class="footer__column">
                    <h4 class="footer__column-title">Категории:</h4>
                    <nav class="footer__nav">
                        <a href="#" class="footer__link">Бытовая химия</a>
                        <a href="#" class="footer__link">Косметика и гигиена</a>
                        <a href="#" class="footer__link">Товары для дома</a>
                        <a href="#" class="footer__link">Товары для детей и мам</a>
                        <a href="#" class="footer__link">Посуда</a>
                    </nav>
                </div>

                <div class="footer__column">
                    <h4 class="footer__column-title">Скачать прайс-лист:</h4>
                    <AppButton
                        text="Прайс-лист"
                        :icon="require('@/assets/images/save-icon.svg')"
                        iconPosition="right"
                    />
                    
                    <h4 class="footer__column-title-links">Связь в мессенджерах:</h4>
                    <div class="footer__social">
                        <img src="@/assets/images/whatsapp.svg" alt="whatsapp" class="footer__social-icon">
                        <img src="@/assets/images/telegram.svg" alt="telegram" class="footer__social-icon">
                    </div>
                </div>

                <div class="footer__column">
                    <h4 class="footer__column-title">Контакты:</h4>
                    <div class="footer__contacts">
                        <a href="tel:+77774900091" 
                           class="footer__phone"
                        >
                           +7 (777) 490-00-91
                        </a>
                        <span class="footer__work-time">время работы: 9:00-20:00</span>
                        <a href="#" class="footer__order-call">Заказать звонок</a>
                        
                        <div class="footer__mail-text">
                            <a href="#" class="footer__mail-link">opt.sultan@mail.ru</a>
                            <span class="footer__mail-description">На связи в любое время</span>
                        </div>
                    </div>
                    <div class="footer__pay">
                        <img src="@/assets/images/visa.png" alt="visa" class="footer__visa-icon">
                        <img src="@/assets/images/mastercard.png" alt="mastercard" class="footer__mastercard-icon">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import './Footer.scss';
</style>
