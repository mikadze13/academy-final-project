import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/APIservice/apiservice.service';
import { ApiType } from './api.model';
import { Filter } from '../../filter.model';
import { FilterServiceService } from '../filterService/filter-service.service';

@Component({
  selector: 'app-apipage',
  templateUrl: './apipage.component.html',
  styleUrls: ['./apipage.component.css']
})
export class ApipageComponent implements OnInit {

  constructor(private jokememes:ApiserviceService, private filterserv:FilterServiceService ) { }  
  page:number=1  
  Memes:any[]=[] 
  
  ngOnInit(): void {
    this.jokememes.getAllMemes().subscribe((response:any)=>{
      this.jokememes.getAllMemes().subscribe((response:any)=>{
        this.Memes=response  
      })
    })

  }   
}
