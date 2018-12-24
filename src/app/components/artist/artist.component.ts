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
  color = '';


  constructor(item) {
    this.name = item['name'];
    this.image = item['image'];
    this.description = item['des'];
    this.link = item['link'];
    this.color = item['color'];
  }
}



const artForms = {
  'a1': {
    'name': 'Photography',
    'image': 'photography.png',
    'des': 'The inevitable attraction',
    'link': '/photography',
    'color': '#e0f0ff'
  },
  'a2': {
    'name': 'Pencil Sketching',
    'image': 'sketch.png',
    'des': 'The oldest surviving art form',
    'link': '/draw',
    'color': '#fff5f2'
  },
  'a3': {
    'name': 'Digital Drawing',
    'image': 'digital.png',
    'des': 'Old habits with a touch of technology',
    'link': '/design',
    'color': '#e6ffe7'
  },
  'a4': {
    'name': 'Writing',
    'image': 'writing.png',
    'des': 'Thoughts penned on paper',
    'link': '/write',
    'color': '#fafafa'
  },
  'a5': {
    'name': 'Cinematography',
    'image': 'cinematography.png',
    'des': 'Started along with photography. Still a newbie!',
    'link': '/cinematography',
    'color': '#f3f2ff'
  },
  'a6': {
    'name': 'Comics',
    'image': 'comic.png',
    'des': 'The most recent fascination',
    'link': '/comics',
    'color': '#e8ffd4'
  }
};


