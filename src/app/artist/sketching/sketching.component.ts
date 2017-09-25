import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sketching',
  templateUrl: './sketching.component.html',
  styleUrls: ['./sketching.component.css']
})
export class SketchingComponent implements OnInit {

  pics = [];
  currentPic = "";
  showImage = false;
  constructor() {

    for (let i = 1; i < 11; i++) {
      this.pics.push('sketch' + i + '.jpg')
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
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
