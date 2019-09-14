import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  projects = [];
  project_sets = [];
  show_modal = '';
  modal_title = '';
  modal_details = '';

  constructor() {
    for (let j = 0; j < projectDetails.length; j++) {
      this.projects.push(new ProjectCard(j));
    }

    let tempList = [];
    for (const m in this.projects) {
      if (tempList.length < 3) {
        tempList.push(this.projects[m]);
      } else {
        this.project_sets.push(tempList);
        tempList = [];
        tempList.push(this.projects[m]);
      }
    }
    this.project_sets.push(tempList);
  }

  ngOnInit() {
  }

  toggleModal() {
    if (this.show_modal === 'is-active') {
      this.show_modal = '';
    } else {
      this.show_modal = 'is-active';
    }
  }

  showModal(element) {
    this.modal_title = element.title;
    this.modal_details = element.details;
    this.toggleModal();
  }

  goto(url) {
    window.location.href = url;
  }

}

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
    'title': 'Information about NCBS',
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'My android development experience started with MIT App Inventor. '
      + 'Soon I realized that I was hitting limitations of it. Then I started learning '
      + 'Java for the same. During that time, as a learning project, I started '
      + 'building small app for checking transport timings for our university bus services.'
      + ' But soon this utility spread across campus and now this android app has around 500 daily users (as of August 2017).',
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.rohitsuratekar.NCBSinfo'
  },
  {
    'title': 'SecretColors',
    'platform': 'Python 3+',
    'language': 'Python 3+',
    'image': 'python-powered-h-140x182.png',
    'details': 'My first Python library. I created this to have pretty visualization in my data-science workflow.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/SecretColors'
  },
  {
    'title': 'This Website !!',
    'platform': 'Web',
    'language': 'AngularJS 2',
    'image': 'angular.png',
    'details': 'I built this website from scratch. Initially I was using web template '
      + 'to build this personal website. All free templates were very limited in functionality. '
      + 'Hence, I decided to make one from scratch. As I had made one before for ‘Secret Biology’, '
      + 'I thought this will be easy. However, I realize Angular 2 had released. To keep up '
      + 'with latest technology, I decided to learn Angular 2 and Typescript to make this website. '
      + 'This current website is outcome of that effort. ',
    'linkText': 'Check Live',
    'link': 'https://rohitsuratekar.com/'
  },
  {
    'title': 'Personal Blog',
    'platform': 'Web',
    'language': 'Jekyll',
    'image': 'jekyllthemes.png',
    'details': 'Even after searching for a long time some very good platform for blogging  '
      + ' I did not get any good option. Hence finally I created my own blogging template with the help of amazing Jekyll.',
    'linkText': 'Check Live',
    'link': 'https://rohitsuratekar.github.io/'
  },

  {
    'title': 'WeridData',
    'platform': 'Web',
    'language': 'Jekyll',
    'image': 'jekyllthemes.png',
    'details': 'My adventures of data-science and visualization. This blog template I designed to create minimal experience.',
    'linkText': 'Check Live',
    'link': 'https://weirddata.github.io/'
  },

  {
    'title': 'Minimal Quiz',
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'Android trivia app which retrieves quiz question from open database and provides you with small quiz. ',
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.secretbiology.minimalquiz'
  },
  {
    'title': 'SRTMaker',
    'platform': 'Windows, Unix, iOS',
    'language': 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Small utility to make .srt files.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/SRTMaker'
  },
  {
    'title': 'Word Guessing Game',
    'platform': 'Android',
    'language': 'Java, Python',
    'image': 'Android_Robot_100.png',
    'details': 'Once we were playing Taboo in one of the party. Android app which we were using was very bad. It'
      + ' was filled with only adds and repetitive words. We were enjoying game but these ads and bad UI'
      + 'design were ruining our fun. Hence, I decided to make my own app. I scrapped some Taboo word '
      + 'providing websites with Python and built an android game. Because of copywrite issue with original'
      + 'company, I had to change name of this app. '
    ,
    'linkText': 'Check on PlayStore',
    'link': 'https://play.google.com/store/apps/details?id=com.secretbiology.taboo'
  },
  {
    'title': 'DPPmanager',
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
    'title': 'Battleship',
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
    'title': 'AbstractBook',
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
    'title': 'Project Campus',
    'platform': 'Windows, Unix, iOS, Web',
    'language': 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'One of my first programming projects.',
    'linkText': 'Check Demo',
    'link': 'demo/campus'
  },

  {
    'title': 'Project Life',
    'platform': 'Windows, Unix, iOS, Web',
    'language': 'Actionscript',
    'image': 'flash-icon.png',
    'details': 'Failed attempt to make flash game.',
    'linkText': 'Check Demo',
    'link': 'demo/life'
  },
  {
    'title': 'PyScreenCapture',
    'platform': 'Windows',
    'language': 'Python 3',
    'image': 'python-powered-h-140x182.png',
    'details': 'Poor man’s screen recorder.',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/rohitsuratekar/PyScreenCapture'
  },
  {
    'title': 'ManageSmart',
    'platform': 'Android',
    'language': 'Java',
    'image': 'Android_Robot_100.png',
    'details': 'One more expense manager app. ',
    'linkText': 'Check on GitHub',
    'link': 'https://github.com/secretBiology/ManageSmart'
  },
  {
    'title': 'Secret Biology Webpage',
    'platform': 'Web',
    'language': 'AngularJS 1',
    'image': 'angular.png',
    'details': 'When I made android app for transportation services in our university.'
      + 'Many people were requesting me to make similar app for iOS. However, that very '
      + 'difficult considering I do not have resources to test and develop it. Hence, '
      + 'I started building web app which can be accessible to any platform. That is how '
      + 'I got interested in website development and learned related languages like Angular, Javascript, Html, CSS etc.',
    'linkText': 'Check Live',
    'link': 'https://secretbiology.com/'
  },
]
