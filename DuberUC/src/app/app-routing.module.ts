import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro1',
    loadChildren: () => import('./registro1/registro1.module').then( m => m.Registro1PageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'conductor1',
    loadChildren: () => import('./conductor1/conductor1.module').then( m => m.Conductor1PageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'pasajero1',
    loadChildren: () => import('./pasajero1/pasajero1.module').then( m => m.Pasajero1PageModule)
  },
  {
    path: 'prototipo',
    loadChildren: () => import('./prototipo/prototipo.module').then( m => m.PrototipoPageModule)
  },
  {
    path: 'prototipo1',
    loadChildren: () => import('./prototipo1/prototipo1.module').then( m => m.Prototipo1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
