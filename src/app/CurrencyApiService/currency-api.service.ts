import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {

  constructor(private http:HttpClient) { }
  // CurrencyUrl:string='https://api2.binance.com/api/v3/ticker/24hr'
  CurrencyUrl:string='https://api2.binance.com/api/v3/ticker/24hr'
  // CurrencyUrl:string='https://api.opensea.io/api/v1/assets?format=json'
  getAllCurrency(){
   return this.http.get(this.CurrencyUrl).
   pipe(map((response:any)=>{
    return response
   }))
  }
}
