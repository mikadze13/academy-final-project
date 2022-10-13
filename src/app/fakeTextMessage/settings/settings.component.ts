import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  @Output()
  timeemitter:EventEmitter<any>=new EventEmitter()
  @Output()
  bluetoothemit:EventEmitter<any>=new EventEmitter()
  @Output()
  alarmEmit:EventEmitter<any>=new EventEmitter()
  @Output()
  disturbEmit:EventEmitter<any>=new EventEmitter() 
  @Output()
  lockEmit:EventEmitter<any>=new EventEmitter()
  @Output()
  changeMessage:EventEmitter<string>=new EventEmitter()
  @Output()
  michToSend:EventEmitter<string>=new EventEmitter()
  counter:number=0
  counter1:number=0
  counter2:number=0
  counter3:number=0
  ngOnInit(): void {
  }

  // time emitter
  Time(event:any){
    this.timeemitter.emit(event.target.value)
  }
  // bluetooth emitter
  bluetooth(event:any){
    this.counter++
    if(this.counter%2==0){
      event=false
    }else{
      event=true
    }
    this.bluetoothemit.emit(event)
  }
  // alarm emitter
  alarm(event:any){
    this.counter1++
    if(this.counter1%2==0){
      event=false
    }else{
      event=true
    }
    this.alarmEmit.emit(event)
  }
  // lock emitter
  Lock(event:any){
    this.counter2++
    if(this.counter2%2==0){
      event=false
    }else{
      event=true
    }
    this.lockEmit.emit(event)
  }
  // DIsturb emitter
  Disturb(event:any){
    this.counter3++
    if(this.counter3%2==0){
      event=false
    }else{
      event=true
    }
    this.disturbEmit.emit(event)
  }

  // message type
  changeMessageType(event:any){
    if(this.counter>12){
      console.log('this is 11')
    }else{
      
    }
    this.changeMessage.emit(event.target.value)
  }
  // change microphone to send text
  changeMichToSend(event:any){
    this.michToSend.emit(event.target.value)
  }
}
