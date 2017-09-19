import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  currentTag = 'All';
  showImage = false;
  currentPic = 'rohit_suratekar.jpg';
  currentCaption = 'Rohit';
  galleryPics = [];
  galleryTags = {};
  allTags = [];

  constructor() {
    let tempArray = shuffleArray(images);
    for (let i = 0; i < tempArray.length; i++) {
      this.galleryPics.push(new PhotoSlide(tempArray[i]));
      if (this.galleryTags.hasOwnProperty(tempArray[i]["k"])) {
        this.galleryTags[tempArray[i]["k"]]++;
      } else {
        this.galleryTags[tempArray[i]["k"]] = 1;
      }
    }
    this.galleryTags["All"] = this.galleryPics.length;
    this.allTags = Object.keys(this.galleryTags);
  }

  ngOnInit() {
  }

  changeTag(tag) {
    this.currentTag = tag;
    this.galleryPics = [];
    let tempArray = shuffleArray(images);
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i]['k'] === tag || tag === 'All') {
        this.galleryPics.push(new PhotoSlide(tempArray[i]));
      }
    }
  }

  onImageClick(photo) {
    this.currentPic = photo.image;
    this.currentCaption = photo.caption;
    this.showImage = true;
  }

  getTag(tag) {
    if (this.currentTag === tag) {
      return 'label label-success clickable add-pointer label-blue';
    }
    return 'label clickable add-pointer label-light-blue'
  }

}

class PhotoSlide {
  image;
  caption;
  tag;
  constructor(l) {
    this.image = l["p"];
    this.caption = l["c"];
    this.tag = l["k"];
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const images = [
  {
    'p': "building.jpg",
    'c': 'Sunset at construction site',
    'k': 'Architecture'
  },
  {
    'p': "cat.jpg",
    'c': 'Those eyes!',
    'k': 'Macro'
  },
  {
    'p': "chennai_beach.jpg",
    'c': 'Peaceful Beach',
    'k': 'Landscape'
  },
  {
    'p': "copenhagen_nyhavan.jpg",
    'c': 'Colors, Canal and Coffee!',
    'k': 'Architecture'
  },
  {
    'p': "flower1.jpg",
    'c': 'Roadside Beauty',
    'k': 'Macro'
  },
  {
    'p': "green_pattern.jpg",
    'c': 'Natural Pattern',
    'k': 'Macro'
  },
  {
    'p': "water.jpg",
    'c': 'Water Droplet',
    'k': 'Macro'
  },
  {
    'p': "kerala_backwater.jpg",
    'c': 'Kerala Backwater Sunset!',
    'k': 'Landscape'
  },
  {
    'p': "goa_beach.jpg",
    'c': 'Sunny Day at Goa',
    'k': 'Landscape'
  },
  {
    'p': "owl.jpg",
    'c': 'Keychain',
    'k': 'Still Life'
  },
  {
    'p': "morning_rays.jpg",
    'c': 'Morning Rays',
    'k': 'Landscape'
  },
  {
    'p': "save_trees.jpg",
    'c': 'Save Trees',
    'k': 'Abstract'
  }
]

