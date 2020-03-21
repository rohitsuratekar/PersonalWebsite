<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>

        <v-row justify="center">
            <v-col :cols="colControl.cols" :sm="colControl.sm" :md="colControl.md" :xl="colControl.xl">
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
            <v-col :cols="colControl.cols" :sm="colControl.sm" :md="colControl.md" :xl="colControl.xl">
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
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "About",
        components: {BreadCrumbs},
        data() {
            return {
                colControl: {
                    cols: 12,
                    sm: 10,
                    md: 6,
                    xl: 4
                },
                breadItems: [
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