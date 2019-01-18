import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {

  pics = [];
  currentPic = '';
  showImage = false;
  constructor() {

    for (let i = 1; i < 10; i++) {
      this.pics.push('comic' + i + '.jpg');
    }

    this.pics = shuffleArray(this.pics);

  }

  ngOnInit() {
  }


  onImageClick(photo) {
    this.currentPic = photo;
    this.showImage = true;
  }

}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}
