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
          case '/showAknow' : this.redirectState = 2; break;
          case '/thesis' : this.redirectState = 3; break;
        }
      }
    });

  }

  ngOnInit() {
    if (this.redirectState === 1) {
      window.location.href = 'https://rohitsuratekar.github.io/';
    } else if (this.redirectState === 2) {  
      window.location.href = 'https://youtu.be/BSEqAldX5G4';
    } else if (this.redirectState === 3){
      window.location.href = 'https://1drv.ms/f/s!Aqs4IyCTMRMO2BU1DGPBdMrP4cPf';
    }
   
  }
}
