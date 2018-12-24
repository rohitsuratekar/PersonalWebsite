import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  title_class = 'title is-5';
  talk_cards = [];
  timeline_date = '';
  constructor() {

    for (const key in talks) {
      if (talks.hasOwnProperty(key)) {
        this.talk_cards.push(new TalkCard(talks[key]));
      }
    }
  }

  ngOnInit() {
  }

  getQualifier(type) {
    if (type === type_talk) {
      return 'Talk';
    } else {
      return 'Poster';
    }
  }

  isNewYear(date) {
    if (date.split(',').length === 2) {
      const year = date.split(',')[1].replace(/^\s+|\s+$/g, '');
      if (year !== this.timeline_date) {
        this.timeline_date = year;
        return true;
      }
    }
    return false;
  }

  getYear() {
    return this.timeline_date;
  }



  isTalk(type) {
    if (type === type_talk) {
      return true;
    } else {
      return false;
    }
  }

  getFlag(place) {
    if (place.toLowerCase().includes('poland')) {
      return 'poland';
    } else if (place.toLowerCase().includes('germany')) {
      return 'germany';
    } else if (place.toLowerCase().includes('india')) {
      return 'india';
    } else if (place.toLowerCase().includes('denmark')) {
      return 'denmark';
    } else if (place.toLowerCase().includes('japan')) {
      return 'japan';
    }
  }

}

class TalkCard {
  name = '';
  url = '';
  date = '';
  place = '';
  title = '';
  type = '';
  special = '';
  constructor(item) {
    this.name = item['name'];
    this.url = item['url'];
    this.date = item['date'];
    this.place = item['place'];
    this.title = item['title'];
    this.type = item['type'];
    if (item.hasOwnProperty('special')) {
      this.special = item['special'];
    }
  }
}

const type_talk = 'talk';
const type_poster = 'poster';
const talks = {
  't1': {
    'name': '2nd International FishMed Conference on Zebrafish Research, FishMed2018',
    'url': 'http://fishmed2018.pl/',
    'date': 'March 25-27, 2018',
    'place': 'Warsaw, Poland',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'special': 'Young FishMed Speaker',
    'type': type_talk
  },
  'p1': {
    'name': '2nd International FishMed Conference on Zebrafish Research, FishMed2018',
    'url': 'http://fishmed2018.pl/',
    'date': 'March 25-27, 2018',
    'place': 'Warsaw, Poland',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'type': type_poster
  },
  'p2': {
    'name': 'EMBL Symposium: Tissue Self-Organisation',
    'url': 'https://www.embo-embl-symposia.org/symposia/2018/EES18-01/index.html',
    'date': 'March 11-14, 2018',
    'place': 'Heidelberg, Germany',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'type': type_poster
  },
  't2': {
    'name': 'Aspects of Gene and Cellular Regulation',
    'url': 'https://www.imsc.res.in/~rsidd/aogcr2018/',
    'date': 'January 12-13, 2018',
    'place': 'Chennai, India',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'type': type_talk
  },
  'p3': {
    'name': 'Celebrating diversity in Biology - NCBS Annual Talks',
    'url': 'https://www.ncbs.res.in/events/at2018',
    'date': 'January 3-5, 2018',
    'place': 'Bangalore, India',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'special': 'Best Poster',
    'type': type_poster
  },
  't3': {
    'name': 'Physical Concepts in Stem Cell Biology',
    'url': 'http://stemphys.nbi.ku.dk/workshops/workshop-on-physical-concepts-in-stem-cell-biology/',
    'date': 'August 6-10, 2017',
    'place': 'Tisvildeleje, Denmark',
    'title': 'Evidence of sinks and sources in the PLC activated PIP<sub>2</sub> cycle',
    'type': type_talk
  },
  'p4': {
    'name': 'Futures in Biology - NCBS Annual Talks',
    'url': 'https://www.ncbs.res.in/events/annual-talks-2017',
    'date': 'January 11-14, 2017',
    'place': 'Bangalore, India',
    'title': 'The Hitchhiker\'s Guide to The Regulation of PI(4,5)P<sub>2</sub> Cycle'
      + 'During <i>Drosophila melanogaster</i> Phototransduction',
    'type': type_poster
  },
  't4': {
    'name': 'NCBS-RIKEN joint meeting for theoretical approaches in biology',
    'url': 'http://ncbs-theobio2.riken.jp/',
    'date': 'April 7-10, 2015',
    'place': 'Wako, Japan',
    'title': 'Speeding up PI(4,5)P<sub>2</sub> recovery with top gear',
    'type': type_talk
  },
  'p5': {
    'name': 'Biology across scale - NCBS Annual Talks',
    'url': 'https://www.ncbs.res.in/past-events',
    'date': 'January 5-8, 2015',
    'place': 'Bangalore, India',
    'title': 'Regulation of levels of PI(4,5)P<sub>2</sub> on the plasma membrane',
    'type': type_poster
  },
  'p6': {
    'name': 'Aspects of Gene and Cellular Regulation',
    'url': 'https://www.imsc.res.in',
    'date': 'December 16, 2014',
    'place': 'Chennai, India',
    'title': 'PI(4,5)P<sub>2</sub> dynamics during <i>Drosophila melanogaster</i> phototransduction',
    'type': type_poster
  },
  'p7': {
    'name': 'NCBS Annual Talks',
    'url': 'https://www.ncbs.res.in/past-events',
    'date': 'January 15-17, 2014',
    'place': 'Bangalore, India',
    'title': 'PI(4,5)P<sub>2</sub> dynamics during <i>Drosophila melanogaster</i> phototransduction',
    'type': type_poster
  },
};


