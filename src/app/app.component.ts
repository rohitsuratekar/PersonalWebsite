import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    currentPage = '';
    showArtist = false;
    constructor(private titleService: Title, private router: Router, activatedRoute: ActivatedRoute) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                let title = this.getTitle(router.routerState, router.routerState.root).join('-');
                titleService.setTitle(title);
                this.currentPage = router.routerState.snapshot.url;
                if (this.currentPage.indexOf('/artist/')) {
                    this.showArtist = false;
                } else {
                    this.showArtist = true;
                }
            }
        });
    }

    showFooter() {
        if (this.currentPage === '/home' || this.currentPage === '/') {
            return true;
        }
        return false;
    }

    getTitle(state, parent) {
        let data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }

        if (state && parent) {
            data.push(... this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    }
}
