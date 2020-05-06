<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-skeleton-loader
                max-width="50%"
                type="image"
        >
            <v-img src="../assets/img/draw/sketch1.jpg"/>
        </v-skeleton-loader>
    </div>
</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "Digital",
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
                        text: "nav.design",
                        disabled: false,
                        to: "design"
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>