import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapaComponent } from '../mapa/mapa.component';
import { Routes, RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }