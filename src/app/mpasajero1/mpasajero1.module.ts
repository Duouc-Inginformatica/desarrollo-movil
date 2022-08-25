import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mpasajero1PageRoutingModule } from './mpasajero1-routing.module';

import { Mpasajero1Page } from './mpasajero1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mpasajero1PageRoutingModule
  ],
  declarations: [Mpasajero1Page]
})
export class Mpasajero1PageModule {}
