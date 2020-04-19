<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
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