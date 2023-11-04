declare module 'cordova-plugin-bluetoothle' {
  interface BluetoothDeviceRequestOptions {

  }

  interface BluetoothDevice {

  }

  interface BluetoothLEOriginal {
      requestDevice(options: BluetoothDeviceRequestOptions): Promise<BluetoothDevice>;

  }

  var bluetoothle: BluetoothLEOriginal;

  export = bluetoothle;
}
