<script>
import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';
import Footer from './components/Footer/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Main, 
        Footer,
    },
    methods: {
        handleAddToCart(product) {
            this.$refs.header.$refs.basket.addItem(product);
        },
    },
}
</script>

<template>
    <div>
        <Header ref="header" /> 
        <Main @add-to-cart="handleAddToCart" />
        <Footer />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
