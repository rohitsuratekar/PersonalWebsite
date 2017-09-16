import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})

export class DeveloperComponent implements OnInit {

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

}



class LangClass {
  name;
  value;

  constructor(obj1, obj2) {
    this.name = obj1;
    this.value = obj2;
  }
}

const laguage = ['Python', 'Java', 'C++', 'MatLab', 'Perl', 'JavaScript', 'C#', 'LateX'];
const level = [75, 60, 30, 45, 40, 50, 20, 40];

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

  constructor(i) {
    this.title = projectDetails[i]['title'];
    this.image = projectDetails[i]['image'];
    this.details = projectDetails[i]['details'];
    this.linkText = projectDetails[i]['linkText'];
    this.link = projectDetails[i]['link'];
    this.platform = projectDetails[i]['platform'];
    this.language = projectDetails[i]['language'];
  }
}


const projectDetails = [
  {
    'title': "Information about NCBS",
    'platform': 'Android',
    'language' : 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'Some details will be here',
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.rohitsuratekar.NCBSinfo'
  },
  {
    'title': "Secret Biology Webpage",
    'platform': 'Web',
    'language' : 'AngularJS 1',
    'image': 'angular.png',
    'details': 'Some details will be here',
    'linkText': 'Check Live',
    'link': 'http://secretbiology.com/'
  },
  {
    'title': "This Website !!",
    'platform': 'Web',
    'language' : 'AngularJS 2',
    'image': 'angular.png',
    'details': 'Some details will be here',
    'linkText': 'Check Live',
    'link': 'http://rohitsuratekar.co.in/'
  },
  {
    'title': "SRTMaker",
    'platform': 'Windows, Unix, iOS',
    'language' : 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/SRTMaker'
  },
  {
    'title': "Word Guessing Game",
    'platform': 'Android',
    'language' : 'Java, Python',
    'image': 'Android_Robot_100.png',
    'details': 'Some details will be here',
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.secretbiology.taboo'
  },
  {
    'title': "DPPmanager",
    'platform': 'Windows',
    'language' : 'Java',
    'image': 'java-logo.png',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/DPPmanager'
  },
  {
    'title': "Battleship",
    'platform': 'Android',
    'language' : 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/Battleship'
  },
  {
    'title': "AbstractBook",
    'platform': 'Windows, Unix, iOS',
    'language' : 'Latex, Python',
    'image': 'latex.gif',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/AbstractBook'
  },
  {
    'title': "Project Campus",
    'platform': 'Windows, Unix, iOS, Web',
    'language' : 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'Some details will be here',
    'linkText': 'Check Demo',
    'link': 'demo/campus'
  },

   {
    'title': "Project Life",
    'platform': 'Windows, Unix, iOS, Web',
    'language' : 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'Some details will be here',
    'linkText': 'Check Demo',
    'link': 'demo/life'
  },
  {
    'title': "PyScreenCapture",
    'platform': 'Windows',
    'language' : 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/PyScreenCapture'
  },
  {
    'title': "ManageSmart",
    'platform': 'Android',
    'language' : 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'Some details will be here',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/ManageSmart'
  },
]
