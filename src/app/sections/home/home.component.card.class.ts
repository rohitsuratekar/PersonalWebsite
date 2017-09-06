import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home-card',
  templateUrl: './home.component.card.html'
})

export class HomeCardComponent implements OnInit {

  hoverSize = 'mat-elevation-z2';
  @Input() sectionNo: number;

  ngOnInit(): void {
  }

  constructor(private router: Router) {
  }
  getTitle() {
    return sectionNames[this.sectionNo];
  }
  getDetails() {
    return sectionDetails[this.sectionNo];
  }
  getColor() {
    return sectionColors[this.sectionNo];
  }


  changeHover($event): void {
    this.hoverSize = $event.type === 'mouseover' ? 'mat-elevation-z10 ' : 'mat-elevation-z2';
  }

  onClick(): void {
    this.router.navigateByUrl(sectionAction[this.sectionNo]);
  }
}

const sectionNames = ['About Me', 'Academic Profile', 'Developers Profile', 'Art Profile'];
const sectionAction = ['/about', '/researcher', '/developer', '/artist'];
const sectionColors = ['#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'];
const sectionDetails = [
  'Who am I ?',
  'Research Work',
  'Programming projects',
  'Hobbies'
];

