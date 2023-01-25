import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  scanActive = false;
  result: any;
  history: any[] = [];
  torch: boolean = false;
  col:any
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.history = JSON.parse(localStorage.getItem('hsitory') || '[]')
    this.route.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.stopScanner()
      }})
  }


  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScan() {
    const allowed = await this.checkPermission();
    if (allowed) {
      this.scanActive = true;
      BarcodeScanner.hideBackground();
      document.body.style.background = 'transparent';
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        let currentDate = new Date()
        this.result = { result: result.content , date : currentDate };
        String(result.content).startsWith('http') ? this.result['isLink'] = true : this.result['isLink'] = false;
        this.history.push(this.result);
        localStorage.setItem('hsitory', JSON.stringify(this.history))
        this.stopScanner()
      }
    }
  }
  
  async scannerTorch() {
    this.torch = !this.torch;
    if (this.torch) {
      await BarcodeScanner.enableTorch()
    }
    else {
      await BarcodeScanner.disableTorch()
    }
  }
  
  stopScanner() {
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }


}
