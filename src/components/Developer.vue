<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-row justify="center">
            <v-col :cols="colControl.cols"
                   :sm="colControl.sm"
                   :xl="colControl.xl"
                   :md="colControl.md"
                   :lg="colControl.lg">
                <p class="title">
                    <i18n path="developer.background_title"/>
                </p>
                <p class="body-1 text-justify">
                    <i18n path="developer.background">
                        <template v-slot:codons>
                            <a href="https://github.com/rohitsuratekar/codon" target="_blank">{{ $t('developer.codons')
                                }}</a>
                        </template>
                        <template v-slot:github>
                            <a href="https://github.com/rohitsuratekar" target="_blank">{{$t('developer.github')}}</a>
                        </template>
                    </i18n>
                </p>

                <p class="title">
                    <i18n path="developer.platforms_title"/>
                </p>
                <p class="body-1">
                    <i18n path="developer.platforms"/>
                </p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col :cols="colControl.cols"
                   :sm="colControl.sm"
                   :xl="colControl.xl"
                   :md="colControl.md"
                   :lg="colControl.lg">
                <v-simple-table>
                    <template v-slot:default>
                        <tbody>
                        <tr v-for="item in lang" :key="item.name">
                            <td>
                                <v-chip :color="item.color" label>
                                    <i18n :path="item.title"/>
                                </v-chip>
                            </td>
                            <td>{{ item.details }}</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col
                    :cols="colControl.cols"
                    :sm="colControl.sm"
                    :xl="colControl.xl"
                    :md="colControl.md"
                    :lg="colControl.lg">
                <p class="title">
                    <i18n path="developer.case_studies"/>
                </p>
                <v-row>
                    <v-col cols="12" sm="6" v-for="item in cases">
                        <v-card>
                            <v-card-title>
                                <i18n :path="item.title"/>
                            </v-card-title>
                            <v-card-subtitle>
                                <i18n :path="item.platform"/>
                            </v-card-subtitle>
                            <v-card-text class="text-justify">
                                <i18n :path="item.details"/>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn text>
                                    <i18n path="developer.check"/>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col :cols="colControl.cols"
                   :sm="colControl.sm"
                   :xl="colControl.xl"
                   :md="colControl.md"
                   :lg="colControl.lg">
                <p class="title">
                    <i18n path="developer.public_title"/>
                </p>
                <p class="body-1">
                    <i18n path="developer.public"/>
                </p>
                <v-row justify="space-around">
                    <v-btn v-for="item in profiles" class="ma-1" outlined :href="item.link" target="_blank">
                        <span>
                            <i18n :path="item.text"/>
                        </span>
                        <v-icon :class="item.class" right></v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    export default {
        name: "Developer",
        components: {BreadCrumbs},
        data() {
            return {
                colControl: {
                    cols: 11,
                    sm: 10,
                    md: 10,
                    lg: 8,
                    xl: 7
                },
                breadItems: [
                    {
                        text: "nav.home",
                        disabled: false,
                        to: "/"
                    },
                    {
                        text: "nav.developer",
                        disabled: true,
                        to: "developer"
                    }
                ],
                lang: [
                    {
                        title: "developer.proficient",
                        details: "Python, Java, Kotlin, Typescript",
                        color: "success"
                    },
                    {
                        title: "developer.can_code",
                        details: "Bash, Matlab, Perl, C++, C#, HTML/CSS, Latex",
                        color: "primary"
                    },
                    {
                        title: "developer.learning",
                        details: "R, Haskell, Lisp, Ruby",
                        color: "warning"
                    }
                ],
                cases: [
                    {
                        title: "developer.ncbs.title",
                        platform: "developer.ncbs.platform",
                        details: "developer.ncbs.details"
                    },
                    {
                        title: "developer.web.title",
                        platform: "developer.web.platform",
                        details: "developer.web.details"
                    },
                    {
                        title: "developer.secretcolor.title",
                        platform: "developer.secretcolor.platform",
                        details: "developer.secretcolor.details"
                    },
                    {
                        title: "developer.cardio.title",
                        platform: "developer.cardio.platform",
                        details: "developer.cardio.details"
                    }
                ],
                profiles: [
                    {
                        class: "fab fa-github",
                        text: "developer.github",
                        link: "https://github.com/rohitsuratekar"
                    },
                    {
                        class: "fab fa-bitbucket",
                        text: "developer.bitbucket",
                        link: "https://bitbucket.org/rohitsuratekar/"
                    },
                    {
                        class: "fab fa-gitlab",
                        text: "developer.gitlab",
                        link: "https://gitlab.com/rohitsuratekar"
                    },
                    {
                        class: "fab fa-stack-overflow",
                        text: "developer.stack",
                        link: "https://stackoverflow.com/users/5284595/dexter"
                    }
                ]
            }

        }
    }
</script>

<style scoped>

</style>