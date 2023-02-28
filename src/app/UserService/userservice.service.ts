import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  apiUrl:any=`${environment.baseUrl}`;
  constructor(private httpClient:HttpClient) { }
  addInfo(newPersonInfo:any){
    this.httpClient.post(`${this.apiUrl}auth.json`,{contacts:newPersonInfo})
    .subscribe(
      (response)=>{
        console.log(response)
      }
    )
  }
}
