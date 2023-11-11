import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConexoesPageRoutingModule } from './conexoes-routing.module';

import { ConexoesPage } from './conexoes.page';

import { BluetoothLEOriginal } from '@awesome-cordova-plugins/bluetooth-le';;


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConexoesPageRoutingModule
  ],
  declarations: [ConexoesPage]
})
export class ConexoesPageModule {}
