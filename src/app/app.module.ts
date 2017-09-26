import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ResearcherComponent } from './researcher/researcher.component';
import { DeveloperComponent } from './developer/developer.component';
import { ArtistComponent } from './artist/artist.component';
import { ContactComponent } from './contact/contact.component';
import {MdSnackBarModule} from '@angular/material';
import { ChartModule } from 'angular2-chartjs';
import { CampusComponent } from './developer/campus/campus.component';
import { LifeComponent } from './developer/life/life.component';
import { CreditsComponent } from './credits/credits.component';
import { PublicationsComponent } from './researcher/publications/publications.component';
import { PhotographyComponent } from './artist/photography/photography.component';
import { DesigningComponent } from './artist/designing/designing.component';
import { GalleryComponent } from './artist/gallery/gallery.component';
import { SketchingComponent } from './artist/sketching/sketching.component';
import { WritingComponent } from './artist/writing/writing.component';
import { VideographyComponent } from './artist/videography/videography.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ResearcherComponent,
        DeveloperComponent,
        ArtistComponent,
        ContactComponent,
        CampusComponent,
        LifeComponent,
        CreditsComponent,
        PublicationsComponent,
        PhotographyComponent,
        DesigningComponent,
        GalleryComponent,
        SketchingComponent,
        WritingComponent,
        VideographyComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        MdSnackBarModule,
        ChartModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
