import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVPageRoutingModule } from './registro-v-routing.module';

import { RegistroVPage } from './registro-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVPageRoutingModule
  ],
  declarations: [RegistroVPage]
})
export class RegistroVPageModule {}
