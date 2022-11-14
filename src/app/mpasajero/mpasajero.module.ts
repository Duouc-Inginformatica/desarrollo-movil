import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { MpasajeroPageRoutingModule } from './mpasajero-routing.module';

import { MpasajeroPage } from './mpasajero.page';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MpasajeroPageRoutingModule
  ],
  declarations: [MpasajeroPage]
  
})
export class MpasajeroPageModule {}
