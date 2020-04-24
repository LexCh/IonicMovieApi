import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'pelis', loadChildren: () => import('./pages/pelis/pelis.module').then( m => m.PelisPageModule)},
  { path: 'peli/:id', loadChildren: () => import('./pages/peli-details/peli-details.module')
  .then( m => m.PeliDetailsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
