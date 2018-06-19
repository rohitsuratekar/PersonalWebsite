import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designing',
  templateUrl: './designing.component.html',
  styleUrls: ['./designing.component.css']
})
export class DesigningComponent implements OnInit {

  projects = [];
  keywords = {};
  allKeys = [];
  currentKey = 'All';
  showImage = false;
  currentPic = "";

  constructor() {

    for (let i = 0; i < designs.length; i++) {
      this.projects.push(new DesignCard(designs[i]));
      let tempTags = designs[i]["k"];
      for (let j = 0; j < tempTags.length; j++) {
        if (this.keywords.hasOwnProperty(tempTags[j])) {
          this.keywords[tempTags[j]]++;
        } else {
          this.keywords[tempTags[j]] = 1;
        }
      }

    }
    this.keywords["All"] = designs.length;
    this.allKeys = Object.keys(this.keywords);

  }

  getKeyword(tag) {
    if (this.currentKey === tag) {
      return 'label label-success clickable add-pointer label-blue';
    }
    return 'label clickable add-pointer label-light-blue'
  }

  changeKeyword(tag) {
    this.currentKey = tag;
    this.projects = [];
    for (let i = 0; i < designs.length; i++) {

      for (let j = 0; j < designs[i]['k'].length; j++) {
        if (designs[i]['k'][j] === tag || tag === 'All') {
          this.projects.push(new DesignCard(designs[i]));
          break;
        }
      }
    }
  }

  onProjectClick(p) {
    if (p.indexOf('http') !== -1) {
      window.open(p, "_blank");
    } else {
      this.currentPic = p;
      this.showImage = true;
    }
  }


  ngOnInit() {
  }

}

class DesignCard {
  image;
  title;
  keywords;
  details;
  linkText;
  link;
  constructor(l) {
    this.image = l["i"];
    this.title = l["t"];
    this.keywords = l["k"];
    this.details = l['d'];
    this.linkText = l['l'];
    this.link = l['h'];
  }
}

const designs = [
  {
    't': 'Mathematical Modelling',
    'i': 'pip2_small.png',
    'd': 'Poster I made for news and outreach about my paper which deals with mathematical modelling.',
    'k': ['Poster Design', 'Illustration'],
    'l': 'Check It Out',
    'h': 'pip2.png'
  },
  {
    't': 'Research Poster',
    'i': 'poster_small.jpg',
    'd': 'My PhD research explained in the form of comic strip .',
    'k': ['Poster Design', 'Illustration'],
    'l': 'Check It Out',
    'h': 'poster.jpg'
  },
  {
    't': 'Single cell to being us ',
    'i': 'develop.jpg',
    'd': 'Human embryo development explained with clay stop motion.',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=3WHdpnrcq5I'
  },
  {
    't': 'The journey of Malarial Parasite',
    'i': 'malaria.jpg',
    'd': 'Simple stop motion video explaining how malarial parasite infect human body. ',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=B9-SjKAaHdg'
  },
  {
    't': 'IISc building',
    'i': 'iisc_3d.jpg',
    'd': 'Trying out newly learned 3D modelling technique with the help of Blender.',
    'k': ['3D Modelling'],
    'l': 'Check It Out',
    'h': 'iisc_3d.jpg'
  },
  {
    't': 'Fly and the Machine',
    'i': 'fly.jpg',
    'd': 'Hybrid illustration of Drosophila.',
    'k': ['Illustration'],
    'l': 'Check on Behance',
    'h': 'https://www.behance.net/gallery/56252027/Fly-and-the-Machine'
  },
  {
    't': 'StickMan Project',
    'i': 'stick.jpg',
    'd': 'When stick figure enters your computer and tries to read your manuscript.',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=-5cFvNMAvig'
  },
  {
    't': 'Shree 420',
    'i': 'shree.jpg',
    'd': 'Recreating very famous bollywood movie poster of Shree 420.',
    'k': ['Photoshop'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=MsK1QLoFMHA'
  },
  {
    't': 'Biology and Computer Science',
    'i': 'comp.jpg',
    'd': 'Paper art illusion created for Conference poster about Biology and Computer Science.',
    'k': ['Poster Design'],
    'l': 'Check It Out',
    'h': 'comp_large.jpg'
  },
  {
    't': 'CCCP',
    'i': 'cccp.jpg',
    'd': 'Retro poster design for Conference on Conflict and Cooperation in biology.',
    'k': ['Poster Design'],
    'l': 'Check on Behance',
    'h': 'https://www.behance.net/gallery/38219193/Conference-Poster-(CCCP-2016)'
  },
  {
    't': 'M S Subbulakshmi',
    'i': 'ms.jpg',
    'd': 'Low poly art made for the poster of M S Subbulakshmi Music Concert.',
    'k': ['Illustration', 'Poster Design'],
    'l': 'Check It Out',
    'h': 'ms_large.png'
  },
  {
    't': 'Biology Across Scales',
    'i': 'annual_talk.jpg',
    'd': 'Promotional animation video made for annual NCBS meeting.',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=yrqNBJ27-oM'
  },
  {
    't': 'Colors of India',
    'i': 'colors.jpg',
    'd': 'Poster designed for dance program highlighting diversity in Indian culture.',
    'k': ['Poster Design'],
    'l': 'Check It Out',
    'h': 'colors_large.jpg'
  },
  {
    't': 'Introducing Music Club',
    'i': 'music.jpg',
    'd': 'Poster made for introduction of Music Club at NCBS',
    'k': ['Poster Design'],
    'l': 'Check on Behance',
    'h': 'https://www.behance.net/gallery/29339017/Music-Club'
  },
  {
    't': 'Fish eat fish',
    'i': 'fish.jpg',
    'd': 'Stop motion video made for NCBS student event Sympotein.',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=c56Q-0sq6Jk'
  },
  {
    't': 'Illustrator Workflow',
    'i': 'oddisi.jpg',
    'd': 'Creating dancer silhouette from scratch. A workflow in Adobe Illustrator.',
    'k': ['Illustration'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=Ypc7q7BXMmU'
  },
  {
    't': 'Science Infographics',
    'i': 'inforgraphics.jpg',
    'd': 'Infographics explaining my PhD model system.',
    'k': ['Infographics'],
    'l': 'Check on Behance',
    'h': 'https://www.behance.net/gallery/32209123/Science-Infographics'
  },
  {
    't': 'Conflict',
    'i': 'conflict.jpg',
    'd': 'Illustration from word cloud for student driven event.',
    'k': ['Poster Design'],
    'l': 'Check on Behance',
    'h': 'https://www.behance.net/gallery/40952607/Event-Poster-Conflict'
  },
  {
    't': 'Sympotein',
    'i': 'sympotein.jpg',
    'd': 'My very first stop motion animation.',
    'k': ['Animation'],
    'l': 'Check on Youtube',
    'h': 'https://www.youtube.com/watch?v=4NT872l8APQ'
  },
  {
    't': 'Music and the Brain',
    'i': 'brain.jpg',
    'd': 'Poster designed for the scientific symposium on Music and the Brain.',
    'k': ['Poster Design', 'Photoshop'],
    'l': 'Check It Out',
    'h': 'brain_large.jpg'
  }
]
