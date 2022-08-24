import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MpasajeroPageRoutingModule } from './mpasajero-routing.module';

import { MpasajeroPage } from './mpasajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MpasajeroPageRoutingModule
  ],
  declarations: [MpasajeroPage]
})
export class MpasajeroPageModule {}
