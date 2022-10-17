import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mpasajero2PageRoutingModule } from './mpasajero2-routing.module';

import { Mpasajero2Page } from './mpasajero2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mpasajero2PageRoutingModule
  ],
  declarations: [Mpasajero2Page]
})
export class Mpasajero2PageModule {}
