import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  commonClass = 'col-lg-8 col-md-8 col-sm-11 col-xs-11s';
  headerClass = 'col-lg-3 ';
  detailsClass = 'col-lg-9';
  constructor() { }

  ngOnInit() {
  }

}
