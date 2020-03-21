<template>
    <v-bottom-navigation
            color="primary"
            :horizontal="!$vuetify.breakpoint.smAndDown"
            :shift="$vuetify.breakpoint.smAndDown"
            app
    >
        <v-btn v-if="showBtn(item,$vuetify.breakpoint.smAndDown)"
               v-for="item in items" :key="item.text"
               :to="item.link"
        >
            <span>
            <i18n :path="item.text"/>
            </span>
            <v-icon :class="item.icon"></v-icon>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav",
        data() {
            return {
                activeBtn: "recent",
                items: [
                    {
                        text: "nav.about",
                        icon: "fas fa-user-secret",
                        hasSwitch: false,
                        showLarge: true,
                        link: "about"
                    },
                    {
                        text: "nav.professional",
                        icon: "fas fa-graduation-cap",
                        hasSwitch: true,
                        showLarge: false,
                        link: "professional"
                    },
                    {
                        text: "nav.research",
                        icon: "fas fa-microscope",
                        hasSwitch: true,
                        showLarge: true,
                        link: "research"
                    },
                    {
                        text: "nav.developer",
                        icon: "fas fa-laptop-code",
                        hasSwitch: true,
                        showLarge: true,
                        link: "developer"
                    },
                    {
                        text: "nav.artist",
                        icon: "fas fa-hat-wizard",
                        hasSwitch: false,
                        showLarge: true,
                        link: "artist"
                    },
                    {
                        text: "nav.settings",
                        icon: "fas fa-cogs",
                        hasSwitch: false,
                        showLarge: true,
                        link: "settings"
                    }
                ]
            }
        },
        methods: {
            showBtn: function (item, bp) {
                if (!item.hasSwitch) {
                    return true
                } else {
                    if (item.showLarge) {
                        return !bp
                    } else {
                        return bp
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>