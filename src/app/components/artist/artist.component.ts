import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  artCardList = [];

  constructor() {
    for (const key in artForms) {
      if (artForms.hasOwnProperty(key)) {
        this.artCardList.push(new ArtCard(artForms[key]));
      }
    }
  }

  ngOnInit() {
  }

}

class ArtCard {
  name = '';
  image = '';
  description = '';
  link = '';


  constructor(item) {
    this.name = item['name'];
    this.image = item['image'];
    this.description = item['des'];
    this.link = item['link'];
  }
}



const artForms = {
  'a1': {
    'name': 'Photography',
    'image': 'test.png',
    'des': 'In recent year I have found a new hobby. ...',
    'link': '/draw'
  },
  'a२': {
    'name': 'Pencil Drawing',
    'image': 'test.png',
    'des': 'This is very old art form which I was always fascinated.',
    'link': '/draw'
  },
  'a३': {
    'name': 'Digital Drawing',
    'image': 'test.png',
    'des': 'This is very old art form which I was always fascinated.',
    'link': '/draw'
  }
};


