
import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from 'src/app/CurrencyApiService/currency-api.service';

@Component({
  selector: 'app-currency-api',
  templateUrl: './currency-api.component.html',
  styleUrls: ['./currency-api.component.css']
})
export class CurrencyApiComponent implements OnInit {

  
  constructor(private currencyService:CurrencyApiService) { }
  currencyArr:any[]=[]
  page:number=1
  ngOnInit(): void {
    // this.currencyService.getAllCurrency().subscribe((response:any)=>{
      this.currencyService.getAllCurrency().subscribe((response:any)=>{
        this.currencyArr=response  
      })
    // })
  }

}
