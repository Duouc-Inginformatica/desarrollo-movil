import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'

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
    loadChildren: () => import('./registro-v/registro-v.module').then( m => m.RegistroVPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mpasajero',
    loadChildren: () => import('./mpasajero/mpasajero.module').then( m => m.MpasajeroPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mpasajero1',
    loadChildren: () => import('./mpasajero1/mpasajero1.module').then( m => m.Mpasajero1PageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mconductor',
    loadChildren: () => import('./mconductor/mconductor.module').then( m => m.MconductorPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'mconductor1',
    loadChildren: () => import('./mconductor1/mconductor1.module').then( m => m.Mconductor1PageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'mconductor2',
    loadChildren: () => import('./mconductor2/mconductor2.module').then( m => m.Mconductor2PageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'noencontrado',
    loadChildren: () => import('./noencontrado/noencontrado.module').then( m => m.NoencontradoPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
