<template>
    <div class="wrapper">
        <Header/>
        <div class="wrapper-content">
            <h1>Привет</h1>
            <p>Большой привет</p>
            <div class="container">
                <router-view/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components:{Header,Footer},
};
</script>

<style lang="scss"></style>

