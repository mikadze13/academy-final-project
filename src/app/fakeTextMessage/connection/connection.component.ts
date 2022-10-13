import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  @Output()
  connectEmitter:EventEmitter<any>=new EventEmitter()
  @Output()
  connectType:EventEmitter<string>=new EventEmitter()
  @Output()
  connectTypeWithSelect:EventEmitter<string>=new EventEmitter()
  @Output()
  airplaneModeEmitter:EventEmitter<boolean>=new EventEmitter()
  counter:number=0
  val1:string='rgba(0,0,0,0.7)'
  val2:string='rgba(0,0,0,0.7)'
  val3:string='rgba(0,0,0,0.7)'
  val4!:string
  val5!:string
  constructor() { }

  ngOnInit(): void {
  }
  onkey(event:any){
    this.connectEmitter.emit(event.target.value) 
    if(event.target.value=='0'){
      this.val1='' 
      this.val2=''
      this.val3=''
      this.val4=''
      this.val5=''
    }else if(event.target.value=='1'){
      this.val1='rgba(0,0,0,0.7)'
      this.val2=''
      this.val3=''
      this.val4=''
      this.val5='' 
    }else if(event.target.value=='2'){
      this.val1='rgba(0,0,0,0.7)'
      this.val2='rgba(0,0,0,0.7)'
      this.val3=''
      this.val4=''
      this.val5='' 
    }else if (event.target.value=='3'){
      this.val1='rgba(0,0,0,0.7)'
      this.val2='rgba(0,0,0,0.7)'
      this.val3='rgba(0,0,0,0.7)'
      this.val4=''
      this.val5='' 
    }else if(event.target.value=='4'){
      this.val1='rgba(0,0,0,0.7)'
      this.val2='rgba(0,0,0,0.7)'
      this.val3='rgba(0,0,0,0.7)'
      this.val4='rgba(0,0,0,0.7)' 
      this.val5=''
    }else{
      this.val1='rgba(0,0,0,0.7)'
      this.val2='rgba(0,0,0,0.7)'
      this.val3='rgba(0,0,0,0.7)'
      this.val4='rgba(0,0,0,0.7)'
      this.val5='rgba(0,0,0,0.7)'
    }
  }

  // connection sprint
  sprint(event:any){
    this.connectType.emit(event.target.value)
  }

  // connection with select option
  connectWithSelect(event:any){
    this.connectTypeWithSelect.emit(event.target.value)
  }
  // Airplane mode
  airplaneMode(event:any){
    this.counter++
    if(this.counter%2==0){
      event=false
    }else{
      event=true
    }
    this.airplaneModeEmitter.emit(event)
  }

}
