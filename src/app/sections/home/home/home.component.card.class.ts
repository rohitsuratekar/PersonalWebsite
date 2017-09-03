import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:'app-home-card',
  templateUrl:'./home.component.card.html'
})

export class HomeCard implements OnInit{
  ngOnInit(): void {
    this.title = ""+this.sectionNo;
  }
  @Input() sectionNo: number;
  constructor() {
    
  }
  title = 'Tour of Heroes';
  subTitle = 'Windstorm';
  getTitle(){
    return sectionNames[this.sectionNo];
  }
  getDetails(){
    return sectionDetails[this.sectionNo];
  }
  getColor(){
    return sectionColors[this.sectionNo];
  }

  hoverSize:string = 'mat-elevation-z2';
  changeHover($event):void{
    this.hoverSize = $event.type == 'mouseover' ? 'mat-elevation-z10 ' : 'mat-elevation-z2';
  } 

  onClick():void{
    console.log("clicked " + this.sectionNo);
  }
}

var sectionNames = ["About Me", "Academic Profile", "Developers Profile", "Art Profile"];
var sectionColors = ["#81d4fa","#4fc3f7","#29b6f6","#03a9f4"]
var sectionDetails = [
  "Who am I ?",
  "Research Work",
  "Programming projects",
  "Hobbies"
]

