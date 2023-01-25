import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
history:any[]=[]

  constructor(private rout:Router) { }

  ngOnInit(): void {
    this.history=JSON.parse(localStorage.getItem('hsitory') || '[]')
  }
  backToScanner(){
    this.rout.navigate(['/qrScanner'])
  }
  clearAllRecord(){
    localStorage.clear();
    window.location.reload();
  }
}
