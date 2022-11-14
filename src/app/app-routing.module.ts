<<<<<<< HEAD
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
    path: 'mpasajero2',
    loadChildren: () => import('./mpasajero2/mpasajero2.module').then( m => m.Mpasajero2PageModule)
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
    path: 'prototipo1',
    loadChildren: () => import('./prototipo1/prototipo1.module').then( m => m.Prototipo1PageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
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
    path: 'mpasajero2',
    loadChildren: () => import('./mpasajero2/mpasajero2.module').then( m => m.Mpasajero2PageModule),
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
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule),
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
>>>>>>> main
