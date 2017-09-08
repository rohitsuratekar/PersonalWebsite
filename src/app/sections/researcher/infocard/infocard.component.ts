import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  @Input() projectNo: number;
  constructor() { }

  ngOnInit() {
  }

  getInfo() {
    return new Infocard(projects[this.projectNo]);
  }

}

export class Infocard {
  title;
  details;
  projectID;
  keywords;
  constructor(obj) {
    this.title = obj['title'];
    this.details = obj['details'];
    this.projectID = obj['projectID'];
    this.keywords = obj['keywords'];
  }
}

const projects = [
  {
    'projectID': 0,
    'title': 'Regulation of lipid signaling pathway in Drosophila melanogaster',
    'keywords': ['Lipid Signaling', 'Steady State'],
    'details': 'PLC mediated PIP2 hydrolysis is everywhere. Even after lot of research, how PIP2 signalling'
    + ' is regulated is still not clear. To understand regulation in this signaling pathway, we built mathematical '
    + 'model of this system.'
  },
  {
    'projectID': 1,
    'title': 'Searching potential feedback links in existing signaling pathway',
    'keywords': ['Feedback', 'Dynamics', 'Lipid Signaling'],
    'details': 'Drosophila phototransduction is one of the fastest G protein coupled reaction known '
    + 'to humans. However kinetic properties of enzymes involved in this pathway are not able to explain '
    + 'such a fast kinetics.'
  },
  {
    'projectID': 2,
    'title': 'Understanding lipid transfer across membranes',
    'keywords': ['Lipid Signalling', 'Analytical'],
    'details': 'Lipids are polar molecules and can not diffuse freely through cytoplasm. In PIP2 cycle it '
    + 'becomes problem because this signaling cascade is spanned over two different compartments. '
  },

  {
    'projectID': 3,
    'title': 'Modeling of Phosphatidic Acid turnover in Drosophila melanogaster',
    'keywords': ['Lipid Signalling', 'Dynamics'],
    'details': 'Phosphatidic acid is important phospholipid which involved in lot of signaling and structural '
    + 'functions inside cell. We try to understand how its levels are regulated through mathematical models.'
  },
  {
    'projectID': 4,
    'title': 'Exploring connections between protein content, codon bias and GC content',
    'keywords': ['Genemics', 'Codons', 'Bacteria'],
    'details': 'Codon bias has always fascinated researchers. We explored is there any connection between '
    + 'protein content, codon bias and GC content inside various bacterial species. '
  },
  {
    'projectID': 5,
    'title': 'Indirect and Direct Effect of Turbulence on Bacterial growth',
    'keywords': ['Microbiology', 'Growth', 'Bacteria'],
    'details': 'Bacteria has vital position in our tree of life. They are everywhere and affects '
    + 'lot of our daily activities. We studied how turbulence might affect their growth.'
  },
  {
    'projectID': 6,
    'title': 'Spacial spread of virus infection on the bacterial lawn',
    'keywords': ['Virus', 'Growth', 'Bacteria'],
    'details': 'Mathematical model for analyzing spatial constrains on spread of viruses on bacterial plates.'
    + 'Analysis was also extended to check multiple infections.'
  },
  {
    'projectID': 7,
    'title': 'Advantages of spatial distribution of enzymes',
    'keywords': ['Enzymes', 'Theory'],
    'details': 'Enzymes play key role in almost every cellular signaling. Their localization as well as spatial' 
    + 'distribution is very important for their function. We are trying to explore what are their advantages over'
    + ' well mixed system with help of experimental as well as theoretical approaches.'
  }

];
