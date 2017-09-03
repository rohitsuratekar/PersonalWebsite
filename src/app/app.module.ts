import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home/home.component';
import { HomeCard } from './sections/home/home/home.component.card.class';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCard
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCardModule, MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
