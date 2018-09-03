import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResearchComponent } from './components/research/research.component';
import { DeveloperComponent } from './components/developer/developer.component';
import { ArtistComponent } from './components/artist/artist.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Rohit Suratekar' } },
    { path: 'about', component: AboutMeComponent, data: { title: 'About Me' } },
    { path: 'research', component: ResearchComponent, data: { title: 'Research' } },
    { path: 'developer', component: DeveloperComponent, data: { title: 'Developer' } },
    { path: 'artist', component: ArtistComponent, data: { title: 'Artist' } },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// Routing code from
// https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
