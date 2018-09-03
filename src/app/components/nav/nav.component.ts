import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showNav = false;
  burgerClass = 'navbar-burger burger';
  navClass = 'navbar-menu';
  currentNav = -1;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.showNav = !this.showNav;
    if (this.navClass.includes('is-active')) {
      this.navClass = 'navbar-menu';
      this.burgerClass = 'navbar-burger burger';
    } else {
      this.navClass = 'navbar-menu is-active';
      this.burgerClass = 'navbar-burger burger is-active';
    }
  }

  changeNav(id: any) {
    this.currentNav = id;
    this.toggleNav();
  }

}
