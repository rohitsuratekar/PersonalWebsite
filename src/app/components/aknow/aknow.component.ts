import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aknow',
  templateUrl: './aknow.component.html',
  styleUrls: ['./aknow.component.css']
})
export class AknowComponent implements OnInit {

  categoryList = [];
  currentCat = '';
  tempCat = [];

  constructor() {
    for (const key in people) {
      if (people.hasOwnProperty(key)) {
        const person = new AknowCard(people[key]);
        if (this.currentCat !== person.category) {
          if (this.tempCat.length > 0) {
            this.categoryList.push(this.tempCat);
            this.tempCat = [];
          }
          this.currentCat = person.category;
        }
        this.tempCat.push(person);
      }
    }
    if (this.tempCat.length > 0) {
      this.categoryList.push(this.tempCat);
    }
  }

  ngOnInit() {
  }

}


class AknowCard {
  name = '';
  image = '';
  location = '';
  category = '';
  constructor(item) {
    this.name = item['name'];
    this.image = item['image'];
    this.location = item['loc'];
    this.category = item['cat'];
  }
}

const cat_super = 'Supervisors';
const cat_friends = 'Friends';
const cat_rp_lab = 'Padinjat Lab';
const cat_sk_lab = 'Krishna Lab';
const cat_other = 'Other';

const people = {
  'a1': {
    'name': 'Sandeep Krishna',
    'image': 'sandeep.png',
    'loc': 'Page 1 - Panel 3',
    'cat': cat_super
  },
  'a2': {
    'name': 'Raghu Padinjat',
    'image': 'raghu.png',
    'loc': 'Page 1 - Panel 5',
    'cat': cat_super
  },
  'a3': {
    'name': 'Pritha Ghosh',
    'image': 'pritha.png',
    'loc': 'Page 1 - Panel 6',
    'cat': cat_friends
  },
  'a4': {
    'name': 'Ebi Antony George',
    'image': 'ebi.png',
    'loc': 'Page 2 - Panel 1',
    'cat': cat_friends
  },
  'a5': {
    'name': 'Chaitra Prabhakara',
    'image': 'chaitra.png',
    'loc': 'Page 2 - Panel 2',
    'cat': cat_friends
  },
  'a6': {
    'name': 'Prashant Jethva',
    'image': 'prashant.png',
    'loc': 'Page 2 - Panel 3',
    'cat': cat_friends
  },
  'a7': {
    'name': 'Parmeshwar Prasad',
    'image': 'param.png',
    'loc': 'Page 2 - Panel 4',
    'cat': cat_friends
  },
  'a8': {
    'name': 'Sruthi Balakrishnan',
    'image': 'sruthi.png',
    'loc': 'Page 2 - Panel 5',
    'cat': cat_friends
  },
  'a9': {
    'name': 'Aparna Agrawal',
    'image': 'aparna.png',
    'loc': 'Page 2 - Panel 6',
    'cat': cat_friends
  },
  'a10': {
    'name': 'Snehal Karpe',
    'image': 'snehal.png',
    'loc': 'Page 3 - Panel 1',
    'cat': cat_friends
  },
  'a11': {
    'name': 'Jyothi Nair',
    'image': 'jyothi.png',
    'loc': 'Page 3 - Panel 1',
    'cat': cat_friends
  },
  'a12': {
    'name': 'Shreekrishna Varma',
    'image': 'shreekrishna.png',
    'loc': 'Page 3 - Panel 1',
    'cat': cat_friends
  },
  'a13': {
    'name': 'Sanjeev Sharma',
    'image': 'sanjeev.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a14': {
    'name': 'Swarna Mathre',
    'image': 'swarna.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a15': {
    'name': 'Rajan Thakur',
    'image': 'rajan.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a16': {
    'name': 'Avishek Ghosh',
    'image': 'avishek.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a17': {
    'name': 'Sudipta Ashe',
    'image': 'sudipta.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a18': {
    'name': 'Urbashi Basu',
    'image': 'urbashi.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a19': {
    'name': 'Aniruddha Panda',
    'image': 'panda.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a20': {
    'name': 'Amruta Naik',
    'image': 'amruta.png',
    'loc': 'Page 3 - Panel 3',
    'cat': cat_rp_lab
  },
  'a21': {
    'name': 'Vishaka Datta',
    'image': 'vishaka.png',
    'loc': 'Page 3 - Panel 5',
    'cat': cat_sk_lab
  },
  'a22': {
    'name': 'Akshit Goyal',
    'image': 'akshit.png',
    'loc': 'Page 3 - Panel 5',
    'cat': cat_sk_lab
  },
  'a23': {
    'name': 'Vaibhav Sinha',
    'image': 'vaibhav.png',
    'loc': 'Page 3 - Panel 5',
    'cat': cat_sk_lab
  },
  'a24': {
    'name': 'Vishal Tiwari',
    'image': 'vishal.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a25': {
    'name': 'Arunabha Sarkar',
    'image': 'arunabha.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a26': {
    'name': 'Divya Ramesh',
    'image': 'divya.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a27': {
    'name': 'Debakshi Maulik',
    'image': 'debakshi.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a28': {
    'name': 'Lena Robra',
    'image': 'lena.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a29': {
    'name': 'Alok Javali',
    'image': 'alok.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a30': {
    'name': 'Nitya Nandkishore',
    'image': 'nitya.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a31': {
    'name': 'Gulrez Chahal',
    'image': 'gulrez.png',
    'loc': 'Page 4 - Panel 1',
    'cat': cat_friends
  },
  'a32': {
    'name': 'Indrani Ghosh',
    'image': 'indrani.png',
    'loc': 'Page 4 - Panel 2',
    'cat': cat_other
  },
  'a33': {
    'name': 'Prabhanjan Suratekar',
    'image': 'prabhanjan.png',
    'loc': 'Page 4 - Panel 3',
    'cat': cat_other
  },
  'a34': {
    'name': 'Rohini Suratekar',
    'image': 'rohini.png',
    'loc': 'Page 4 - Panel 4',
    'cat': cat_other
  },
  'a35': {
    'name': 'Chandrakant Suratekar',
    'image': 'chandrakant.png',
    'loc': 'Page 4 - Panel 4',
    'cat': cat_other
  }
};
