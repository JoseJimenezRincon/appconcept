import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { UiModule } from './ui/ui.module';
import { MapaComponent } from './mapa/mapa.component';

const appRoutes: Routes = [
  { path: 'mapa', component: MapaComponent },
  { path: 'amigos', component: AppComponent },
  { path: '',
    redirectTo: '/mapa',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqkNN-mhbKQ4MOVr4kzKrlhMZUuLdRmsA',
    }),
    RouterModule.forRoot(
      appRoutes,
    ),
    UiModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    MapaComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
