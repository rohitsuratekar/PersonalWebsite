<template>
    <v-app id="app">
        <Header/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
        <BottomNav/>
    </v-app>
</template>


<script>
    import Header from "@/views/Header";
    import BottomNav from "@/views/BottomNav";

    export default {
        components: {BottomNav, Header}
    }
</script>


<style>
    #app {
    }
</style>