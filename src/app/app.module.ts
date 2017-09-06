import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { HomeCardComponent } from './sections/home/home.component.card.class';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { DeveloperComponent } from './sections/developer/developer.component';
import { ArtistComponent } from './sections/artist/artist.component';
import { ResearcherComponent } from './sections/researcher/researcher.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'researcher', component: ResearcherComponent },
  { path: 'about', component: AboutComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'artist', component: ArtistComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCardComponent,
    NavbarComponent,
    AboutComponent,
    DeveloperComponent,
    ArtistComponent,
    ResearcherComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCardModule, MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
