import { Component } from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    homecards = [] ;
    constructor() {
        for (let i = 0; i < sectionNames.length; i++ ) {
            this.homecards.push(new HomeCard(i));
        }
    }
}

class HomeCard {
    name = '';
    details = '';
    action = '';
    constructor(i) {
        this.name = sectionNames[i];
        this.details = sectionDetails[i];
        this.action = sectionAction[i];
    }
}

const sectionNames = ['About Me', 'Academic Profile', 'Developers Profile', 'Art Profile'];
const sectionAction = ['/about', '/researcher', '/developer', '/artist'];
const sectionColors = ['#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4'];
const sectionDetails = [
    'Who am I ?',
    'Research Work',
    'Programming projects',
    'Hobbies'
];
