<template>
    <div class="fill-height" style="width: 100%">
        <BreadCrumbs :bread="breadItems"/>
        <v-row justify="center" align="center">
            <v-col :cols="colControl.cols"
                   :sm="colControl.sm"
                   :md="colControl.md"
                   :lg="colControl.lg"
                   :xl="colControl.xl"
                   v-for="item in cardItems">
                <v-card outlined :to="item.link">
                    <v-card-title>
                        <i18n :path="item.title"/>
                    </v-card-title>
                    <v-card-text>
                        <i18n :path="item.details"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "Artist",
        components: {BreadCrumbs},
        data() {
            return {
                colControl: {
                    cols: 12,
                    sm: 10,
                    md: 5,
                    lg: 5,
                    xl: 4
                },
                breadItems: [
                    {
                        text: "nav.home",
                        disabled: false,
                        to: "/"
                    },
                    {
                        text: "nav.artist",
                        disabled: true,
                        to: "artist"
                    }
                ],
                cardItems: [
                    {
                        title: "artist.photography",
                        details: "artist.photography_details",
                        link: "photography"
                    },
                    {
                        title: "artist.sketching",
                        details: "artist.sketching_details",
                        link: "draw"
                    },
                    {
                        title: "artist.digital",
                        details: "artist.digital_details",
                        link: "design"
                    },
                    {
                        title: "artist.writing",
                        details: "artist.writing_details",
                        link: "write"
                    },
                    {
                        title: "artist.cinematography",
                        details: "artist.cinematography_details",
                        link: "cinematography"
                    },
                    {
                        title: "artist.comics",
                        details: "artist.comics_details",
                        link: "comics"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>