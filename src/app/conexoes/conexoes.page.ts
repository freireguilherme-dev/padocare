import { Component, OnInit } from '@angular/core';
import { WifiService } from '../services/wifi.service';
import { BluetoothService } from '../services/bluetooth.service';

@Component({
  selector: 'app-conexoes',
  templateUrl: './conexoes.page.html',
  styleUrls: ['./conexoes.page.scss'],
})
export class ConexoesPage implements OnInit {
  redesWifi: string[] = [];
  dispositivosBluetooth: any[] = [];

  constructor(private wifiService: WifiService, private bluetoothService: BluetoothService) {}

  ngOnInit(): void {
    this.buscarRedesWifi();
    this.buscarDispositivosBluetooth();
  }

  buscarRedesWifi(): void {
    this.wifiService.buscarRedesWifi()
      .then((redes: string[]) => {
        this.redesWifi = redes;
      })
      .catch((error: any) => {
        console.error('Erro ao buscar redes Wi-Fi:', error);
      });
  }

  async buscarDispositivosBluetooth(): Promise<void> {
    try {
      this.dispositivosBluetooth = await this.bluetoothService.buscarDispositivosBluetooth();
    } catch (error) {
      console.error('Erro ao buscar dispositivos Bluetooth:', error);
    }
  }
}
