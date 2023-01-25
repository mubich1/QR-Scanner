import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-create-qr',
  templateUrl: './create-qr.component.html',
  styleUrls: ['./create-qr.component.scss']
})
export class CreateQRComponent implements OnInit {
  @ViewChild('qrcode') private qrcode: ElementRef ;
  generateQR: any
  size: any = 200
  color: any
  qrInfo: any
  isCreated: boolean = false
  constructor(private router: Router) { 
    console.log(this.qrcode);

  }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    if (form.qrCode) {
      this.generateQR = form;
      this.isCreated = true;
    }
  }

  qrColor(val: any) {
    this.color = val
  }

  backToCreate() {
    this.isCreated = false;
  }

  backToScan() {
    this.router.navigate(['/qrScanner'])
  }




}
