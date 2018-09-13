import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  currentPage = '';
  redirectState = 0;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (router.routerState.snapshot.url) {
          case '/blog': this.redirectState = 1; break;
          case '/cv': this.redirectState = 2; break;
        }
      }
    });

  }

  ngOnInit() {
    if (this.redirectState === 1) {
      window.location.href = 'https://rohitsuratekar.github.io/';
    }
  }
}
