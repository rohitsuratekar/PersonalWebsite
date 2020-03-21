<template>
    <v-app-bar app color="primary">
        <v-toolbar-title class="white--text">
            <i18n path="title"/>
        </v-toolbar-title>
        <v-spacer/>

        <v-menu transition="slide-y-transition" bottom>
            <template slot="activator" slot-scope="{ on }">
                <v-btn outlined v-on="on" color="white">
                    {{loc}}
                    <v-icon right class="fas fa-language"></v-icon>
                </v-btn>
            </template>
            <v-list dense>
                <v-list-item @click="changeLocale('en')">
                    <v-list-item-content>
                        <v-list-item-title>EN - English</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="changeLocale('mr')">
                    <v-list-item-content>
                        <v-list-item-title>MR - मराठी</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
    import i18n from "@/i18n";

    export default {
        name: "Header",
        data() {
            return {
                loc: localStorage.getItem('locale')
            }
        },
        methods: {
            changeLocale(value) {
                this.$i18n.locale = value;
                this.loc = value;
                localStorage.locale = value;
            }
        },
        mounted() {
            if (localStorage.locale) {
                i18n.locale = localStorage.locale;
            } else {
                localStorage.locale = "en";
                i18n.locale = localStorage.locale;
                this.loc = "en";
            }
        }
    }
</script>

<style scoped>

</style>