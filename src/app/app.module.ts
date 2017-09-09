import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdToolbarModule, MdMenuModule, MdGridListModule} from '@angular/material';
import {MdTabsModule, MdChipsModule, MdListModule, MdProgressBarModule, MdTooltipModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { HomeCardComponent } from './sections/home/home.component.card.class';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { AboutComponent } from './sections/about/about.component';
import { DeveloperComponent } from './sections/developer/developer.component';
import { ArtistComponent } from './sections/artist/artist.component';
import { ResearcherComponent } from './sections/researcher/researcher.component';
import { InfocardComponent } from './sections/researcher/infocard/infocard.component';
import { PublicationsComponent } from './sections/publications/publications.component';
import { ChartModule } from 'angular2-chartjs';

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
    ResearcherComponent,
    InfocardComponent,
    PublicationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCardModule, MdToolbarModule, MdMenuModule, MdGridListModule,
    MdTabsModule, MdChipsModule, MdListModule, MdProgressBarModule, MdTooltipModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
