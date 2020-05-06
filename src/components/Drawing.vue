<template>

    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="10" md="8" lg="6">
                <v-card>
                    <v-card-text class="text-justify">
                        <i18n path="draw.details"/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" v-if="!$vuetify.breakpoint.smAndUp">
            <v-col cols="10">
                <v-row justify="center" align="start" no-gutters>
                    <v-card v-for="img in getImages()" class="mb-3" @click="open_image(img)">
                        <v-img :src="img" max-width="300px"/>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
        <v-row v-if="$vuetify.breakpoint.smAndUp" justify="center" align="start" class="pt-2">
            <v-col
                    v-for="columns in getImages()"
                    cols="3"
                    class="ma-0 pa-0"
                    align-self="start"
                    :class="{'ma-1' : '$vuetify.breakpoint.mdOnly'}">
                <v-row v-for="rows in columns" class="pa-0 ma-0" justify="center">
                    <v-card :class="{'ma-1' : '$vuetify.breakpoint.mdOnly'}"
                            @click="open_image(rows)"
                    >
                        <v-img :src="rows" max-width="300px"/>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
        <v-dialog v-model="open_dialogue" overlay-opacity="1">
            <v-row justify="center" align="center">
                <v-col align-self="center" align="center">
                    <v-row align="center" justify="center">
                    <span class="modal-text caption">
                        <i18n path="draw.dialogue"/>
                    </span>
                    </v-row>
                    <v-img
                            contain
                            :src="current_image"
                            max-width="80vw"
                            max-height="80vh"
                            @click="open_dialogue = false"/>
                </v-col>
            </v-row>

        </v-dialog>
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
                open_dialogue: false,
                current_image: ""
            }
        },
        methods: {
            getImages() {
                let chunks = 3;
                const images = require.context('@/assets/img/draw/', true, /\.jpg$/);
                const all_images = shuffle(images.keys().map(x => images(x)));
                if (!this.$vuetify.breakpoint.smAndUp) {
                    return all_images
                } else {
                    let chucked_array = [];
                    let cols = Math.round(all_images.length / chunks);
                    for (let i = 0; i < all_images.length; i += cols) {
                        chucked_array.push(all_images.slice(i, i + cols));
                    }
                    return chucked_array
                }
            },
            open_image(path) {
                this.current_image = path;
                this.open_dialogue = true;
            }
        },

    }

    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

</script>

<style scoped>
    .modal-text {
        color: white;
        opacity: 0.5;
        margin-bottom: 8px;
    }

</style>