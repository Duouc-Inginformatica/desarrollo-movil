import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsPageRoutingModule
  ],
  declarations: [GpsPage]
})
export class GpsPageModule {}
