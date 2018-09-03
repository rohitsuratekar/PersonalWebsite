import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  alertShow = true;
  constructor() { }

  ngOnInit() {
  }

  goHome() {
    window.open('/home', '_parent');
  }

}
