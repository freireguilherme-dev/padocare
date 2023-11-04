import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.padocare.app',
  appName: 'padocare',
  webDir: 'www',
  server: {
    androidScheme: 'http'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    "BluetoothLe": {
      "displayStrings": {
        "scanning": "Escaneando dispositivos...",
        "cancel": "Cancelar",
        "availableDevices": "Dispositivos disponíveis",
        "noDeviceFound": "Nenhum dispositivo encontrado"
      }
    }
  },
  cordova: {
    preferences: {
      bluetooth_restore_state: "true",
      accessBackgroundLocation: "false",
    },
  }
};

export default config;
