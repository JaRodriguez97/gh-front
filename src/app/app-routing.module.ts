import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'servicio-grua-economica-cali-24-horas',
    pathMatch: 'full',
  },
  {
    path: 'servicio-grua-economica-cali-24-horas',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
    title: 'Servicio Grúa Economica Cali 24 Horas - Grúas Higuita',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
