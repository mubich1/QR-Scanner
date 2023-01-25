import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { HistoryComponent } from './history/history.component';
import { CreateQRComponent } from './create-qr/create-qr.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'qrScanner',
    pathMatch : 'full'
  },
  {
    path : 'intro',
    component : AppIntroComponent
  },
  {
    path : 'qrScanner',
    component : QrScannerComponent
  },
  {
    path : 'history',
    component : HistoryComponent
  },
  {
    path : 'createQR',
    component : CreateQRComponent
  },
  {
    path: 'setting',
    component : SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
