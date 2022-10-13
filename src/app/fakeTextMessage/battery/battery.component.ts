import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css'],
})
export class BatteryComponent implements OnInit {
  @Output()
  eventemit: EventEmitter<any> = new EventEmitter();
  valueofinput: any;
  @Output()
  checkemitter: EventEmitter<any> = new EventEmitter();
  @Output()
  checkbatteryemitter:EventEmitter<any>=new EventEmitter()
  counter: number = 0;
  count:number=0
  value: number = 50;

  constructor() {}
  ngOnInit(): void {}
  // send event to message-template.component about range input value
  onkey(event: any) {
    this.eventemit.emit(event.target.value);
    this.value = event.target.value;
  }
  // send event to  message-template.component about percent icon type
  clicked(event: any) {
    this.counter++;
    if (this.counter % 2 == 0) {
      event = true;
    } else {
      event = false;
    }
    this.checkemitter.emit(event);
  }

// send event to  message-template.component about battery icon type
  batteryevent(event:any){
    this.count++
    if (this.count % 2 == 0) {
      event = true;
    } else {
      event = false;
    }
    this.checkbatteryemitter.emit(event);
  }
}
