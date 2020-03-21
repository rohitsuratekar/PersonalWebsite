<template>
    <div class="fill-height">
        <BreadCrumbs :bread="breadItems"/>
        <v-row justify="center">
            <v-col
                    :cols="colControl.cols"
                    :sm="colControl.sm"
                    :md="colControl.md"
                    :lg="colControl.lg"
                    :xl="colControl.xl"
            >

                <div v-for="item in sec">
                    <p class="title mb-0">
                        <i18n :path="item.title"/>
                    </p>
                    <p class="body-1 mt-0">
                        <i18n :path="item.details" v-if="!item.hasLink"/>
                        <i18n :path="item.details" v-if="item.hasLink">
                            <template v-slot:lab>
                                <a :href="item.link" target="_blank">{{ $t(item.link_text) }}</a>
                            </template>
                        </i18n>
                    </p>
                </div>

                <p class="title">
                    <i18n path="research.publications"/>
                </p>
                <p class="body-1 mt-0">
                    Suratekar R, Panda A, Padinjat R, Krishna S (2018). Evidence of sinks and sources in the
                    phospholipase C activated PIP<sub>2</sub> cycle. <i>FEBS Lett.</i>; 592(6):962-972. PubMed PMID:
                    29427502. doi:
                    <a href="https://doi.org/10.1002/1873-3468.12998" target="_blank">10.1002/1873-3468.12998 </a>
                </p>
                <p class="body-1 mt-0">
                    Suratekar R, Padinjat R, Krishna S. Evidence of sinks and sources in the PLC activated
                    PIP<sub>2</sub> cycle.
                    <i>bioRxiv</i> 183509; 2018 Sep 1. doi: <a href="https://doi.org/10.1101/183509" target="_blank">10.1101/183509</a>
                </p>

                <p class="title">
                    <i18n path="research.conference"/>
                </p>

            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col
                    :cols="colControl.cols"
                    :sm="colControl.sm"
                    :md="colControl.md"
                    :lg="colControl.lg"
                    :xl="colControl.xl"
            >
                <v-timeline dense>
                    <v-timeline-item v-for="item in conf" color="primary">
                        <template v-slot:icon>
                            <v-avatar size="36">
                                <img :src="getImg(item)">
                            </v-avatar>
                        </template>
                        <v-row justify="space-between">
                            <v-col>
                                <p class="font-weight-light mb-0 overline"> {{item.date}} {{item.place}}</p>
                                <p class="font-weight-medium mt-0 mb-0">{{item.name}}</p>
                                <div>
                                    <span class="font-weight-light mt-0" v-if="item.type!=='talk'"><i18n
                                            path="research.poster_title"/> : </span>
                                    <span class="font-weight-light mt-0" v-if="item.type==='talk'"><i18n
                                            path="research.talk_title"/> : </span>
                                    <span class="font-weight-light mt-0" v-html="item.title"></span> <br>
                                </div>
                                <v-chip label v-if="item.type==='talk'" color="secondary" small>
                                    <i18n path="research.talk"/>
                                </v-chip>
                                <v-chip label
                                        v-if="'special' in item"
                                        small
                                        color="success"
                                        :class="{'ml-1': $vuetify.breakpoint.smAndUp, 'mt-1':$vuetify.breakpoint.xs}"
                                >
                                    {{item.special}}
                                </v-chip>
                            </v-col>

                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import BreadCrumbs from "@/views/BreadCrumbs";

    const type_talk = 'talk';
    const type_poster = 'poster';

    export default {
        name: "Academic",
        components: {BreadCrumbs},
        data() {
            return {
                colControl: {
                    cols: 12,
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
                        text: "nav.research",
                        disabled: true,
                        to: "research"
                    }
                ],
                sec: [
                    {
                        title: "research.area_title",
                        details: "research.area",
                        hasLink: false,
                    },
                    {
                        title: "research.current_title",
                        details: "research.current",
                        hasLink: true,
                        link_text: "research.winata_lab",
                        link: "http://zdglab.iimcb.gov.pl/"
                    },
                    {
                        title: "research.thesis_title",
                        details: "research.thesis",
                        hasLink: true,
                        link_text: "research.krishna_lab",
                        link: "https://theory.ncbs.res.in/sandeep/index.html"
                    },
                    {
                        title: "research.btech_title",
                        details: "research.btech",
                        hasLink: false,
                    },
                    {
                        title: "research.data_title",
                        details: "research.data",
                        hasLink: true,
                        link_text: "research.weird",
                        link: "http://weirddata.github.io/"
                    },
                ],
                conf: [

                    {
                        'name': '2nd International FishMed Conference on Zebrafish Research, FishMed2018',
                        'url': 'http://fishmed2018.pl/',
                        'date': 'March 25-27, 2018',
                        'place': 'Warsaw, Poland',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'special': 'Young FishMed Speaker',
                        'type': type_talk
                    },
                    {
                        'name': '2nd International FishMed Conference on Zebrafish Research, FishMed2018',
                        'url': 'http://fishmed2018.pl/',
                        'date': 'March 25-27, 2018',
                        'place': 'Warsaw, Poland',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'type': type_poster
                    },
                    {
                        'name': 'EMBL Symposium: Tissue Self-Organisation',
                        'url': 'https://www.embo-embl-symposia.org/symposia/2018/EES18-01/index.html',
                        'date': 'March 11-14, 2018',
                        'place': 'Heidelberg, Germany',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'type': type_poster
                    },
                    {
                        'name': 'Aspects of Gene and Cellular Regulation',
                        'url': 'https://www.imsc.res.in/~rsidd/aogcr2018/',
                        'date': 'January 12-13, 2018',
                        'place': 'Chennai, India',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'type': type_talk
                    },
                    {
                        'name': 'Celebrating diversity in Biology - NCBS Annual Talks',
                        'url': 'https://www.ncbs.res.in/events/at2018',
                        'date': 'January 3-5, 2018',
                        'place': 'Bangalore, India',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'special': 'Best Poster',
                        'type': type_poster
                    },
                    {
                        'name': 'Physical Concepts in Stem Cell Biology',
                        'url': 'http://stemphys.nbi.ku.dk/workshops/workshop-on-physical-concepts-in-stem-cell-biology/',
                        'date': 'August 6-10, 2017',
                        'place': 'Tisvildeleje, Denmark',
                        'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
                        'type': type_talk
                    },
                    {
                        'name': 'Futures in Biology - NCBS Annual Talks',
                        'url': 'https://www.ncbs.res.in/events/annual-talks-2017',
                        'date': 'January 11-14, 2017',
                        'place': 'Bangalore, India',
                        'title': 'The Hitchhiker\'s Guide to The Regulation of PI(4,5)P<sub>2</sub> Cycle'
                            + 'During <i>Drosophila melanogaster</i> Phototransduction',
                        'type': type_poster
                    },
                    {
                        'name': 'NCBS-RIKEN joint meeting for theoretical approaches in biology',
                        'url': 'http://ncbs-theobio2.riken.jp/',
                        'date': 'April 7-10, 2015',
                        'place': 'Wako, Japan',
                        'title': 'Speeding up PI(4,5)P<sub>2</sub> recovery with top gear',
                        'type': type_talk
                    },
                    {
                        'name': 'Biology across scale - NCBS Annual Talks',
                        'url': 'https://www.ncbs.res.in/past-events',
                        'date': 'January 5-8, 2015',
                        'place': 'Bangalore, India',
                        'title': 'Regulation of levels of PI(4,5)P<sub>2</sub> on the plasma membrane',
                        'type': type_poster
                    },
                    {
                        'name': 'Aspects of Gene and Cellular Regulation',
                        'url': 'https://www.imsc.res.in',
                        'date': 'December 16, 2014',
                        'place': 'Chennai, India',
                        'title': 'PI(4,5)P<sub>2</sub> dynamics during <i>Drosophila melanogaster</i> phototransduction',
                        'type': type_poster
                    },
                    {
                        'name': 'NCBS Annual Talks',
                        'url': 'https://www.ncbs.res.in/past-events',
                        'date': 'January 15-17, 2014',
                        'place': 'Bangalore, India',
                        'title': 'PI(4,5)P<sub>2</sub> dynamics during <i>Drosophila melanogaster</i> phototransduction',
                        'type': type_poster
                    }

                ]
            }
        },
        methods: {
            getImg: function (item) {
                let flag = "india.png";
                let it = item.place.toLowerCase();
                if (it.includes("germany")) {
                    flag = "germany.png"
                } else if (it.includes("poland")) {
                    flag = "poland.png"
                } else if (it.includes("japan")) {
                    flag = "japan.png"
                } else if (it.includes("denmark")) {
                    flag = "denmark.png"
                }
                return require("../assets/img/flags/" + flag)
            }
        }
    }
</script>

<style scoped>

</style>