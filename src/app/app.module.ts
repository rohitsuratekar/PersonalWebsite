import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResearchComponent } from './components/research/research.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FooterComponent } from './components/footer/footer.component';
import {LifeComponent} from './components/developer/life/life.component';
import {CampusComponent} from './components/developer/campus/campus.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { DrawComponent } from './components/draw/draw.component';
import { DesignComponent } from './components/design/design.component';
import { CinematographyComponent } from './components/cinematography/cinematography.component';
import { WritingComponent } from './components/writing/writing.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CvComponent } from './components/cv/cv.component';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    ResearchComponent,
    DeveloperComponent,
    ArtistComponent,
    FooterComponent,
    LifeComponent,
    CampusComponent,
    PhotographyComponent,
    DrawComponent,
    DesignComponent,
    CinematographyComponent,
    WritingComponent,
    ComicsComponent,
    ContactComponent,
    CreditsComponent,
    CvComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
