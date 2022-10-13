import { Injectable } from '@angular/core';
import { Filter } from '../../filter.model';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  constructor() { }
  arr:any[]=[]

  getFilteredMemes(memes:any[],filt:Filter):any{
    if(filt.name.length===0){
      return memes
    }else if(filt.name.length>0){
      return memes.filter(i => i.name.toLowerCase().search(filt.name) >= 0)
    }
  }
}
