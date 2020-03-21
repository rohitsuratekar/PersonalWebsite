<template>
    <div>
        <v-row align="center" justify="start">
            <v-breadcrumbs :items="bread">
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item :href="item.to" :disabled="item.disabled">
                        <i18n :path="item.text"/>
                    </v-breadcrumbs-item>
                </template>
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>

        <v-row justify="center">
            <v-col cols="6">
                <v-card outlined>
                    <v-card-title>
                        <i18n path="nav.about"/>
                    </v-card-title>
                    <v-card-text class="text-justify">
                        <i18n path="about.details"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="6">
                <v-card outlined>
                    <v-card-title>
                        <i18n path="about.alma"/>
                    </v-card-title>
                    <v-card-text>
                        <div v-for="item in alma">
                            <span class="font-weight-medium"><i18n :path="item.title"/> </span>
                            <span class="font-italic ml-1"><i18n :path="item.field"/> </span>
                            <br>
                            <span class="font-weight-light"><i18n :path="item.institute"/> </span>
                            <br><br>
                        </div>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                bread: [
                    {
                        text: "nav.home",
                        disabled: false,
                        to: "/"
                    },
                    {
                        text: "nav.about",
                        disabled: true,
                        to: "about"
                    }
                ],
                alma: [
                    {
                        title: "about.postdoctoral",
                        field: "about.development",
                        institute: "about.iimcb"
                    },
                    {
                        title: "about.phd",
                        field: "about.comp",
                        institute: "about.ncbs"
                    },
                    {
                        title: "about.btech",
                        field: "about.biotech",
                        institute: "about.mnnit"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .test {
        background: blue;
    }

</style>