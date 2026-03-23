<template>
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Main from './components/Main/AppMain.vue';
import Footer from './components/Footer/AppFooter.vue';

export default {
    name: 'App',
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>

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
