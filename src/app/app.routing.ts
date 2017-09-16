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

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'researcher', component: ResearcherComponent},
    {path: 'developer', component: DeveloperComponent},
    {path: 'artist', component: ArtistComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'demo/campus', component: CampusComponent},
    {path: 'demo/life', component: LifeComponent},
    {path: '**', component: HomeComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
