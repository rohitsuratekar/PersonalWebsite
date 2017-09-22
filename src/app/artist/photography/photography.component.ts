import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  cardStyle = "col-lg-3 col-md-6 col-sm-10";

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate(path) {
    this.router.navigate(['/artist/' + path]);
  }
}
