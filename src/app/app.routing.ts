import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResearchComponent } from './components/research/research.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LifeComponent } from './components/developer/life/life.component';
import { CampusComponent } from './components/developer/campus/campus.component';
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

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Rohit Suratekar' } },
    { path: 'about', component: AboutMeComponent, data: { title: 'About Me' } },
    { path: 'research', component: ResearchComponent, data: { title: 'Research' } },
    { path: 'researcher', component: ResearchComponent, data: { title: 'Research' } },
    { path: 'developer', component: DeveloperComponent, data: { title: 'Developer' } },
    { path: 'artist', component: ArtistComponent, data: { title: 'Artist' } },
    { path: 'demo/campus', component: CampusComponent, data: { title: 'Project Campus' } },
    { path: 'demo/life', component: LifeComponent, data: { title: 'Life 1.0' } },
    { path: 'photography', component: PhotographyComponent, data: { title: 'Photography' } },
    { path: 'draw', component: DrawComponent, data: { title: 'Drawing' } },
    { path: 'design', component: DesignComponent, data: { title: 'Designing' } },
    { path: 'cinematography', component: CinematographyComponent, data: { title: 'Cinematography' } },
    { path: 'write', component: WritingComponent, data: { title: 'Writing' } },
    { path: 'comics', component: ComicsComponent, data: { title: 'Comics' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Contact Me' } },
    { path: 'credits', component: CreditsComponent, data: { title: 'Credits' } },
    { path: 'artist/photography', redirectTo: 'photography' },
    { path: 'artist/videography', redirectTo: 'cinematography' },
    { path: 'artist/designing', redirectTo: 'design' },
    { path: 'artist/sketching', redirectTo: 'draw' },
    { path: 'artist/writing', redirectTo: 'write' },
    { path: 'artist/gallery', redirectTo: 'photography' },
    { path: 'cv', component: CvComponent, data: { title: 'CV' } },
    { path: 'redirect', component: RedirectComponent, data: { title: 'redirecting' } },
    { path: 'blog', component: RedirectComponent, data: { title: 'Blog' } },
    // Following is needed at the end of all routing components
    { path: '**', component: HomeComponent, data: { title: 'hmmm...' } }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// Routing code from
// https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
