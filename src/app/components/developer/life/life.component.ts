import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  alertShow = true;
  constructor() { }

  ngOnInit() {
  }

  goHome() {
    window.open('/home', '_parent');
  }

}
