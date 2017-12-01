import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = "https://rohitsuratekar.wordpress.com/";
  }

}
