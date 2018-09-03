import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homecards = [];

  constructor() {
    for (let i = 0; i < sectionNames.length; i++) {
      this.homecards.push(new HomeCard(i));
    }
  }

  ngOnInit() {
  }

}
class HomeCard {
  name = '';
  details = '';
  action = '';
  image = '';
  color = '';
  constructor(i) {
    this.name = sectionNames[i];
    this.details = sectionDetails[i];
    this.action = sectionAction[i];
    this.image = sectionImage[i];
    this.color  = sectionColors[i];
  }
}

const sectionNames = ['About Me', 'Academic Profile', 'Developer Profile', 'Art Profile'];
const sectionAction = ['/about', '/research', '/developer', '/artist'];
const sectionColors = ['#5392ff', '#34bc6e', '#b07ce8', '#fc835c'];
const sectionImage = ['about_me.png',
  'research.png', 'developer.png', 'art.png'];
const sectionDetails = [
  'Who am I?',
  'Research Work',
  'Programming projects',
  'Hobbies'
];
