import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  pics = [];

  constructor(public router: Router) {
    this.pics.push('chapter1.png');
    this.pics.push('she.png');
    this.pics.push('practice.png');

  }

  ngOnInit() {
  }


  onImageClick(photo) {
    if (photo === this.pics[0]) {
      this.router.navigateByUrl('/acknow');
    } else if (photo === this.pics[2]) {
      this.router.navigateByUrl('comics/practice');
    } else if (photo === this.pics[1]) {
      this.router.navigateByUrl('comics/she');
    }
  }

}
