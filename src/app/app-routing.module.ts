import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-v',
    loadChildren: () => import('./registro-v/registro-v.module').then( m => m.RegistroVPageModule)
  },
  {
    path: 'mpasajero',
    loadChildren: () => import('./mpasajero/mpasajero.module').then( m => m.MpasajeroPageModule)
  },
  {
    path: 'mpasajero1',
    loadChildren: () => import('./mpasajero1/mpasajero1.module').then( m => m.Mpasajero1PageModule)
  },
  {
    path: 'mconductor',
    loadChildren: () => import('./mconductor/mconductor.module').then( m => m.MconductorPageModule)
  },
  {
    path: 'mconductor1',
    loadChildren: () => import('./mconductor1/mconductor1.module').then( m => m.Mconductor1PageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
