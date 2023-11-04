import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { SmartlockService } from '../services/smartlock.service'
import { Http } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';

declare var ble: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public status: boolean = false;
  public wifi: boolean = true;
  public bluetooth: boolean = false;

  constructor(private navController: NavController, private smartLock: SmartlockService) {}

  openMenu(){
    this.navController.navigateForward('/menu')
  }

  ativarWifi(){
    this.wifi = true;
    this.bluetooth = false;
    console.log(`wifi: ${this.wifi} bluetooth: ${this.bluetooth}`)
  }

  ativarBluetooth(){
    this.wifi = false;
    this.bluetooth = true;
    console.log('Iniciando scan...')
    ble.scan([], 5, function(device: any) {
      console.log(JSON.stringify(device));
    }, function(error: any){
      console.log(error)
    });
    console.log('Finalizando scan...')
    //this.smartLock.scanDevices()
    console.log(`wifi: ${this.wifi} bluetooth: ${this.bluetooth}`)
  }


  sendRequest(){
    if(this.wifi && !this.bluetooth){
      if(this.status){
        this.smartLock.closeWifi()
        this.status = false;
      }else{
        this.smartLock.openWifi()
        this.status = true
      }
    }else if(this.bluetooth && !this.wifi){
      if(this.status){
        this.smartLock.closeBluetooth()
        this.status = false;
      }else{
        this.smartLock.openBluetooth()
        this.status = true
      }
    }
  }


}


