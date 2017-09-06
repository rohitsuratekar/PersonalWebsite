import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute = 0;
  constructor(private router: Router) {
    switch (router.url) {
      case '/about': this.currentRoute = 0; break;
      case  '/researcher': this.currentRoute = 1; break;
      case  '/developer': this.currentRoute = 2; break;
      case  '/artist': this.currentRoute = 3; break;
    }
   }

  ngOnInit() {
  }
  currentSection(i) {
    return i === this.currentRoute;
  }
  onClick(i): void {
    if (i === -1) {
      this.router.navigateByUrl('home');
    } else {
    this.router.navigateByUrl(sectionAction[i]);
    }
  }
}

const sectionAction = ['/about', '/researcher', '/developer', '/artist'];
