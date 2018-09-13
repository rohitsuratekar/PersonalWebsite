import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  pics = [];
  currentPic = '';
  showImage = false;
  constructor() {

    for (let i = 1; i < 4; i++) {
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
