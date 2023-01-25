import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { HistoryComponent } from './history/history.component';
import { CreateQRComponent } from './create-qr/create-qr.component';
import { QRCodeModule } from 'angular2-qrcode';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent,
    AppIntroComponent,
    HistoryComponent,
    CreateQRComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
