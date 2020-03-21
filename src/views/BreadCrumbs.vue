<template>
    <v-row align="center" justify="start">
        <v-breadcrumbs :items="bread">
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
                    <i18n :path="item.text"/>
                </v-breadcrumbs-item>
            </template>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
    </v-row>
</template>

<script>
    export default {
        name: "BreadCrumbs",
        props: ['bread']
    }
</script>

<style scoped>

</style>