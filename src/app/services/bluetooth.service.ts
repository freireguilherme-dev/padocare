import { Injectable } from '@angular/core';
//import { BluetoothLEOriginal } from '@awesome-cordova-plugins/bluetooth-le';

@Injectable({
  providedIn: 'root'
})


export class BluetoothService {

  constructor() { }

  async buscarDispositivosBluetooth(): Promise<any[]> {
    try {
      const dispositivos = await BluetoothLEOriginal.requestDevice({
        services: [],
        allowDuplicates: false,
        scanMode: 'lowLatency',
        matchMode: 'nearest',
        matchNum: 1
      });
      return dispositivos;
    } catch (error) {
      console.error('Erro ao buscar dispositivos Bluetooth:', error);
      throw error;
    }
  }
}
declare var BluetoothLEOriginal: any;
