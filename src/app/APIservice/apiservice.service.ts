import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs';
import { Observable, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  url:string='https://api.imgflip.com/get_memes'

  getAllMemes(){
    return this.http.get(this.url)
    .pipe(map((response:any)=>{
        return response.data.memes
    }))
  }
}
