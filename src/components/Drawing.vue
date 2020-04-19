<template>

    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-row justify="center" align="center">
            <v-col cols="6">
                <v-card>
                    <v-card-text class="text-justify">
                        <i18n path="draw.details"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "Drawing",
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
                        text: "nav.draw",
                        disabled: false,
                        to: "draw"
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>