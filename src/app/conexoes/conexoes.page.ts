import { Component, OnInit } from '@angular/core';
import { WifiService } from '../services/wifi.service';

@Component({
  selector: 'app-conexoes',
  templateUrl: './conexoes.page.html',
  styleUrls: ['./conexoes.page.scss'],
})
export class ConexoesPage implements OnInit {
openHome() {
throw new Error('Method not implemented.');
}
  redesWifi: string[] = [];

  constructor(private wifiService: WifiService) {}

  ngOnInit(): void {
    this.buscarRedesWifi();
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
}
