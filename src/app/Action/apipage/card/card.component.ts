import { Component, Input, OnInit } from '@angular/core';
import { ApiType } from '../api.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  getMemes!:any
  ngOnInit(): void {
     
  }

}
