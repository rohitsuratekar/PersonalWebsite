import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {

  modalOpen = false;
  modalTitle = "";
  modalDetails = "";
  type = 'bar';
  projects = [];
  data = {
    labels: laguage,
    datasets: [
      {
        data: level,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
        ],
      }
    ]
  };
  options = opt;

  lang = [];
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < laguage.length; i++) {
      this.lang.push(new LangClass(laguage[i], level[i]));
    }

    for (let j = 0; j < projectDetails.length; j++) {
      this.projects.push(new ProjectCard(j));
    }
  }

  goto(url) {
    window.open(url, '_blank');
  }

  openModal(proj) {
    this.modalOpen = true;
    this.modalTitle = proj.title;
    this.modalDetails = proj.details;
  }
}



class LangClass {
  name;
  value;

  constructor(obj1, obj2) {
    this.name = obj1;
    this.value = obj2;
  }
}

const laguage = ['Python', 'Java', 'C++', 'MatLab', 'Perl', 'JavaScript', 'C#', 'LateX', 'Haskell'];
const level = [75, 60, 30, 45, 40, 50, 20, 40, 10];

const opt = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        scaleLabel: '<%= \' \' + value%>',
        max: 100,
        callback: function (value, index, values) {
          switch (value) {
            case 0: return 'Just Started';
            case 10: return 'Noob';
            case 30: return 'Can Code';
            case 50: return 'Getting there';
            case 80: return 'Awesome';
            case 100: return 'Ninja';
            default: return '';
          }

        }
      }
    }],
    xAxes: [{
      ticks: {
        autoSkip: false,
      }
    }]
  },
  title: {
    display: true,
    text: 'Programming Skills'
  },
  legend: {
    display: false
  },
  layout: {
    padding: {
      // Any unspecified dimensions are assumed to be 0
      left: 20,
      bottom: 5
    }
  }
};


class ProjectCard {
  title = '';
  image = 'placeholder.jpg';
  details = '';
  link = '';
  linkText = 'Click';
  platform = '';
  language = '';
  detailsShort = '';
  allowModal = false;
  constructor(i) {
    this.title = projectDetails[i]['title'];
    this.image = projectDetails[i]['image'];
    this.details = projectDetails[i]['details'];
    this.linkText = projectDetails[i]['linkText'];
    this.link = projectDetails[i]['link'];
    this.platform = projectDetails[i]['platform'];
    this.language = projectDetails[i]['language'];
    this.detailsShort = this.details;
    if (this.details.length > 50) {
      this.detailsShort = this.details.substring(0, 50) + '...';
      this.allowModal = true;
    }
  }
}


const projectDetails = [
  {
    'title': "Information about NCBS",
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'My android development experience started with MIT App Inventor. '
    + 'Soon I realized I was hitting limitations of it. Then I started leaning actual '
    + 'Java Coding for the same. During that time, as a learning project, I started '
    + 'building small app for checking transport timings for our university bus services.'
    + ' But soon this utility spread across campus and now this android app has around 500 daily users (as of August 2017).',
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.rohitsuratekar.NCBSinfo'
  },
  {
    'title': "Secret Biology Webpage",
    'platform': 'Web',
    'language': 'AngularJS 1',
    'image': 'angular.png',
    'details': 'When I made android app for transportation services in our university.'
    + 'Many people were requesting me to make similar app for iOS. However, that very '
    + 'difficult considering I do not have resources to test and develop it. Hence, '
    + 'I started building web app which can be accessible to any platform. That is how '
    + 'I got interested in website development and learn related languages like Angular, Javascript, Html, CSS etc.',
    'linkText': 'Check Live',
    'link': 'http://secretbiology.com/'
  },
  {
    'title': "This Website !!",
    'platform': 'Web',
    'language': 'AngularJS 2',
    'image': 'angular.png',
    'details': 'I built this website from scratch. Initially I was using web template '
    + 'to build this personal website. All free templates were very limited in functionality. '
    + 'Hence, I decided to make one from scratch. AS I had made one before for ‘Secret Biology’, '
    + 'I thought this will be easy. However, I realize Angular 2 had released. To keep up '
    + 'with latest technology, I decided to learn Angular 2 and Typescript to make this website. '
    + 'This current website is outcome of that effort. ',
    'linkText': 'Check Live',
    'link': 'http://rohitsuratekar.co.in/'
  },
  {
    'title': "SRTMaker",
    'platform': 'Windows, Unix, iOS',
    'language': 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Small utility to make .srt files.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/SRTMaker'
  },
  {
    'title': "Word Guessing Game",
    'platform': 'Android',
    'language': 'Java, Python',
    'image': 'Android_Robot_100.png',
    'details': 'Once we were playing Taboo in one of the party. Android app which we were using was very bad. It'
    + ' was filled with only adds and repetitive words. We were enjoying game but these adds and bad UI'
    + 'design were ruining our fun. Hence, I decided to make my own app. I scrapped some Taboo word '
    + 'providing websites with Python and build android game. Because of copywrite issue with original'
    +  'company, I had to change name of this app. '
    ,
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.secretbiology.taboo'
  },
  {
    'title': "DPPmanager",
    'platform': 'Windows',
    'language': 'Java',
    'image': 'java-logo.png',
    'details': 'My learning experience with Java was not limited to app making. '
    + 'I actually utilized it in automating my experiment. I build this small '
    + 'Micromanager (ImageJ) plugin which we can used with Microscope and can '
    + 'analyse special type of assay called Deep Pseudo Pupil Assay.  ',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/DPPmanager'
  },
  {
    'title': "Battleship",
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'Online multiplayer implementation of classic Battleship in android. '
    + 'This was fun project to learn multiplayer utilities in android. This was starter '
    + 'for my other multiplayer platform app Arcade. You can check my GitHub projects for '
    + 'further details.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/Battleship'
  },
  {
    'title': "AbstractBook",
    'platform': 'Windows, Unix, iOS',
    'language': 'Latex, Python',
    'image': 'latex.gif',
    'details': 'Conferences and Workshops are vital part of PhD. '
    + 'As a one of the top research institute in India. Our institute organizes '
    + 'a lot of conference and workshops. Because of my designing skills, many times '
    + 'people asked me to design posters or abstract book for them. To automatize this '
    + 'process, I build Latex-Python pipeline which can produce high quality pdf booklets.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/AbstractBook'
  },
  {
    'title': "Project Campus",
    'platform': 'Windows, Unix, iOS, Web',
    'language': 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'One of my first programming projects.',
    'linkText': 'Check Demo',
    'link': 'demo/campus'
  },

  {
    'title': "Project Life",
    'platform': 'Windows, Unix, iOS, Web',
    'language': 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'Failed attempt to make flash game.',
    'linkText': 'Check Demo',
    'link': 'demo/life'
  },
  {
    'title': "PyScreenCapture",
    'platform': 'Windows',
    'language': 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Poor man’s screen recorder.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/PyScreenCapture'
  },
  {
    'title': "ManageSmart",
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'One more expense manager app. ',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/ManageSmart'
  },
]
