import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(path) {
    this.router.navigate(['/artist/' + path]);
  }
}
