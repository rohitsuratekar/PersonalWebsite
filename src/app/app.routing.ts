import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResearcherComponent } from './researcher/researcher.component';
import { DeveloperComponent } from './developer/developer.component';
import { ArtistComponent } from './artist/artist.component';
import { ContactComponent } from './contact/contact.component';
import { CampusComponent } from './developer/campus/campus.component';
import { LifeComponent } from './developer/life/life.component';
import { CreditsComponent } from './credits/credits.component';
import { PhotographyComponent } from './artist/photography/photography.component';
import { DesigningComponent } from './artist/designing/designing.component';
import { GalleryComponent } from './artist/gallery/gallery.component';
import { SketchingComponent } from './artist/sketching/sketching.component';
import { WritingComponent } from './artist/writing/writing.component';
import { VideographyComponent } from './artist/videography/videography.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Rohit' } },
    { path: 'researcher', component: ResearcherComponent, data: { title: 'Some Research' } },
    { path: 'developer', component: DeveloperComponent, data: { title: 'Hello World' } },
    { path: 'artist', component: ArtistComponent, data: { title: 'As an artist' } },
    { path: 'artist/photography', component: PhotographyComponent, data: { title: 'Photography' } },
    { path: 'artist/designing', component: DesigningComponent, data: { title: 'Designing' } },
    { path: 'artist/gallery', component: GalleryComponent, data: { title: 'Photo Gallery' } },
    { path: 'artist/sketching', component: SketchingComponent, data: { title: 'Sketching' } },
    { path: 'artist/writing', component: WritingComponent, data: { title: 'Writing' } },
    { path: 'artist/videography', component: VideographyComponent, data: { title: 'Videography' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact Me' } },
    { path: 'credits', component: CreditsComponent, data: { title: 'Credits' } },
    { path: 'demo/campus', component: CampusComponent, data: { title: 'Project Campus' } },
    { path: 'demo/life', component: LifeComponent, data: { title: 'Life 1.0' } },
    { path: '**', component: HomeComponent, data: { title: 'hmmm...' } }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// Routing code from
// https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router