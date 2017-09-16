import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css']
})
export class ResearcherComponent implements OnInit {
  currentTag = "Lipid Signaling";
  alertHide = true;
  projects = [];
  constructor(public snackBar: MdSnackBar) {
    for (let i = 0; i < ProjectDetails.length; i++) {
      this.projects.push(new Infocard(ProjectDetails[i]))
    }
  }

  ngOnInit() {
  }

  getTagClass(tag) {
    if (tag === this.currentTag) {
      return "label label-orange label-success clickable add-pointer";
    } else {
      return "label label-info clickable add-pointer";
    }
  }


  setTag(tag) {
    this.snackBar.open(tag + ' projects', 'Ok', {
      duration: 2000,
    });
    this.currentTag = tag;
  }

}


class Infocard {
  title;
  details;
  projectID;
  keywords;
  duration;
  constructor(obj) {
    this.title = obj['title'];
    this.duration = obj['duration'];
    this.details = obj['details'];
    this.projectID = obj['projectID'];
    this.keywords = obj['keywords'];
  }
}

const ProjectDetails = [
  {
    'projectID': 0,
    'title': 'Regulation of lipid signaling pathway in Drosophila melanogaster',
    'duration': '2014 to present',
    'keywords': ['Lipid Signaling', 'Steady State'],
    'details': 'PLC mediated PIP2 hydrolysis is everywhere. Even after lot of research, how PIP2 signalling'
    + ' is regulated is still not clear. To understand regulation in this signaling pathway, we built mathematical '
    + 'model of this system.'
  },
  {
    'projectID': 1,
    'title': 'Searching potential feedback links in existing signaling pathway',
    'duration': '2014 to present',
    'keywords': ['Feedback', 'Dynamics', 'Lipid Signaling'],
    'details': 'Drosophila phototransduction is one of the fastest G protein coupled reaction known '
    + 'to humans. However kinetic properties of enzymes involved in this pathway are not able to explain '
    + 'such a fast kinetics.'
  },
  {
    'projectID': 2,
    'title': 'Understanding lipid transfer across membranes',
    'duration': '2015 to present',
    'keywords': ['Lipid Signaling', 'Analytical'],
    'details': 'Lipids are polar molecules and can not diffuse freely through cytoplasm. In PIP2 cycle it '
    + 'becomes problem because this signaling cascade is spanned over two different compartments. '
  },

  {
    'projectID': 3,
    'title': 'Modeling of Phosphatidic Acid turnover in Drosophila melanogaster',
    'duration': '2013',
    'keywords': ['Lipid Signaling', 'Dynamics'],
    'details': 'Phosphatidic acid is important phospholipid which involved in lot of signaling and structural '
    + 'functions inside cell. We try to understand how its levels are regulated through mathematical models.'
  },
  {
    'projectID': 4,
    'title': 'Exploring connections between protein content, codon bias and GC content',
    'duration': '2012',
    'keywords': ['Genemics', 'Codons', 'Bacteria'],
    'details': 'Codon bias has always fascinated researchers. We explored is there any connection between '
    + 'protein content, codon bias and GC content inside various bacterial species. '
  },
  {
    'projectID': 5,
    'title': 'Indirect and Direct Effect of Turbulence on Bacterial growth',
    'duration': '2010 to 2011',
    'keywords': ['Microbiology', 'Growth', 'Bacteria'],
    'details': 'Bacteria has vital position in our tree of life. They are everywhere and affects '
    + 'lot of our daily activities. We studied how turbulence might affect their growth.'
  },
  {
    'projectID': 6,
    'duration': '2015',
    'title': 'Spacial spread of virus infection on the bacterial lawn',
    'keywords': ['Virus', 'Growth', 'Bacteria'],
    'details': 'Mathematical model for analyzing spatial constrains on spread of viruses on bacterial plates.'
    + 'Analysis was also extended to check multiple infections.'
  },
  {
    'projectID': 7,
    'title': 'Advantages of spatial distribution of enzymes',
    'duration': '2015',
    'keywords': ['Enzymes', 'Theory'],
    'details': 'Enzymes play key role in almost every cellular signaling. Their localization as well as spatial'
    + 'distribution is very important for their function. We are trying to explore what are their advantages over'
    + ' well mixed system with help of experimental as well as theoretical approaches.'
  }

];
