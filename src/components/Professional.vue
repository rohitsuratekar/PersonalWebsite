<template>
    <v-row justify="center" align="center" no-gutters>
        <v-col
                :cols="colControl.cols"
                :sm="colControl.sm"
                :md="colControl.md"
                :xl="colControl.xl"
                :class="{'ma-4':$vuetify.breakpoint.smAndUp}"
        >
            <v-card outlined>
                <v-card-title>
                    <i18n path="nav.research"/>
                </v-card-title>
                <v-card-actions>
                    <v-btn text to="research">
                        <i18n path="common.go_there"/>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col
                :cols="colControl.cols"
                :sm="colControl.sm"
                :md="colControl.md"
                :xl="colControl.xl"
                :class="{'mt-4':$vuetify.breakpoint.xs, 'ma-4':$vuetify.breakpoint.smAndUp}"
        >
            <v-card outlined>
                <v-card-title>
                    <i18n path="nav.developer"/>
                </v-card-title>
                <v-card-actions>
                    <v-btn text to="developer">
                        <i18n path="common.go_there"/>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Professional",
        data() {
            return {
                colControl: {
                    cols: 12,
                    sm: 5,
                    md: 4,
                    xl: 2
                },
            }
        }
    }
</script>

<style scoped>

</style>