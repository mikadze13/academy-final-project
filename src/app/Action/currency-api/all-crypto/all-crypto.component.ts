import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-crypto',
  templateUrl: './all-crypto.component.html',
  styleUrls: ['./all-crypto.component.css']
})
export class AllCryptoComponent implements OnInit {

  constructor() { }
  @Input()
  getAllCurrency!:any
  ngOnInit(): void { 
  }

}
