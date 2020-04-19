<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-row align="start" justify="center">
            <v-col cols="3" v-for="item in cards">
                <v-card shaped outlined>
                    <v-card-title>
                        <i18n :path="item.title"/>
                    </v-card-title>
                    <v-card-text class="text-justify">
                        <i18n :path="item.text"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "Photography",
        components: {BreadCrumbs},
        data() {
            return {
                breadItems: [
                    {
                        text: "nav.home",
                        disabled: false,
                        to: "/"
                    },
                    {
                        text: "nav.artist",
                        disabled: false,
                        to: "artist"
                    },
                    {
                        text: "nav.photography",
                        disabled: false,
                        to: "photography"
                    }
                ],
                cards: [
                    {
                        title: "photography.details_title",
                        text: "photography.details"
                    },
                    {
                        title: "photography.bag_title",
                        text: "photography.bag"
                    },
                    {
                        title: "photography.fav_title",
                        text: "photography.fav"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>