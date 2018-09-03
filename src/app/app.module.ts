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
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
