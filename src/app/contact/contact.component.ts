import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cardClass = "col-lg-4 col-md-4 col-sm-6";
  constructor() { }

  ngOnInit() {
  }

}
