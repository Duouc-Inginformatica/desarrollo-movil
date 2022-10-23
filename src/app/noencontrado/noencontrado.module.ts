import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NoencontradoPage } from './noencontrado.page';

import { NoencontradoPageRoutingModule } from './noencontrado-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoencontradoPageRoutingModule
  ],
  declarations: [NoencontradoPage]
})
export class NoencontradoPageModule {}
