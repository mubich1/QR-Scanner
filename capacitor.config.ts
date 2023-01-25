import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.QR_Scanner.app',
  appName: 'QR Code Scanner',
  webDir: 'dist/qr-sca-nner',
  bundledWebRuntime: false,
  // server : {
  //   url : 'http://192.168.18.62:4200',
  //   cleartext : true
  // }
};

export default config;
