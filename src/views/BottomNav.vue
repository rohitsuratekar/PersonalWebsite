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
            <v-icon class="material-icons">{{item.icon}}</v-icon>
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
                        icon: "person_pin",
                        hasSwitch: false,
                        showLarge: true,
                        link: "about"
                    },
                    {
                        text: "nav.professional",
                        icon: "school",
                        hasSwitch: true,
                        showLarge: false,
                        link: "professional"
                    },
                    {
                        text: "nav.academic",
                        icon: "school",
                        hasSwitch: true,
                        showLarge: true,
                        link: "academic"
                    },
                    {
                        text: "nav.develop",
                        icon: "laptop_windows",
                        hasSwitch: true,
                        showLarge: true,
                        link: "developer"
                    },
                    {
                        text: "nav.artist",
                        icon: "emoji_objects",
                        hasSwitch: false,
                        showLarge: true,
                        link: "artist"
                    },
                    {
                        text: "nav.settings",
                        icon: "settings",
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