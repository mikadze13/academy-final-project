import { Component, Input, OnInit } from '@angular/core';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'app-message-template',
  templateUrl: './message-template.component.html',
  styleUrls: ['./message-template.component.css'],
})
export class MessageTemplateComponent implements OnInit {
  constructor() {}
  @Input()
  provider: any;
  @Input() checkProvider: boolean = true;
  @Input() checkBatteryStatus: boolean = true;
  @Input() checkConnection: any[] = [];
  @Input() conectType: string = 'Sprint';
  @Input() connectTypeProvider: string = 'LTE';
  @Input() mode: boolean = false;
  @Input() messageText: string = 'iFakeTextMessage.com';
  @Input() micToSend: boolean = true;
  @Input() Name: string = 'Name';
  @Input() textMessage: any[] = [];
  @Input() textMessage1: any[] = [];
  @Input() gray: any;
  @Input() blue: any;
  @Input() green: any;
  values: number = 50;
  hide: boolean = true;
  cond1: boolean=false;
  cond2: boolean=false;
  cond3: boolean=false;
  condition1:boolean=false
  condition2:boolean=false
  condition3:boolean=false
  val!: any;
  som!: number;
  time: string = '11:40 AM';
  val1: string = 'black';
  val2: string = 'black';
  val3: string = 'black';
  val4!: string;
  val5!: string;
  background: boolean = false;
  done: boolean = false;
  bluet: boolean = false;
  alarm: boolean = false;
  lock: boolean = false;
  disturb: boolean = false;
  ngOnInit(): void {}

  // battery values and background
  onSave(event: any) {
    this.values = event;
    if (this.values <= 20) {
      this.background = true;
    } else {
      this.background = false;
    }
    this.done = true;
  }

  check(event: any) {
    this.checkProvider = event;
  }
  // battery status
  checkBatteryEmitter(event: any) {
    this.checkBatteryStatus = event;
  }

  // connection status
  connectionStatus(event: any) {
    console.log(event);

    if (event == '0') {
      this.val1 = '';
      this.val2 = '';
      this.val3 = '';
      this.val4 = '';
      this.val5 = '';
    } else if (event == '1') {
      this.val1 = 'black';
      this.val2 = '';
      this.val3 = '';
      this.val4 = '';
      this.val5 = '';
    } else if (event == '2') {
      this.val1 = 'black';
      this.val2 = 'black';
      this.val3 = '';
      this.val4 = '';
      this.val5 = '';
    } else if (event == '3') {
      this.val1 = 'black';
      this.val2 = 'black';
      this.val3 = 'black';
      this.val4 = '';
      this.val5 = '';
    } else if (event == '4') {
      this.val1 = 'black';
      this.val2 = 'black';
      this.val3 = 'black';
      this.val4 = 'black';
      this.val5 = '';
    } else {
      this.val1 = 'black';
      this.val2 = 'black';
      this.val3 = 'black';
      this.val4 = 'black';
      this.val5 = 'black';
    }
  }
  // connection type with input
  connectTypeFn(event: string) {
    this.conectType = event;
  }
  // connection type with selecti option
  connectTypeWithSelect(event: string) {
    this.connectTypeProvider = event;
    if (event == 'none') {
      this.connectTypeProvider = '';
    }
  }
  // airplane mode
  airPlaneMode(event: any) {
    if (event == true) {
      this.mode = true;
      this.hide = false;
    } else {
      this.mode = false;
      this.hide = true;
    }
  }

  // showtime
  showTime(event: any) {
    this.time = event;
  }

  // show or hide bluetooth icon
  hideOrShowBlue(event: boolean) {
    if (event == true) {
      this.bluet = true;
    } else {
      this.bluet = false;
    }
  }

  // show or hide alarm icon
  hideOrShowAlarm(event: boolean) {
    if (event == true) {
      this.alarm = true;
    } else {
      this.alarm = false;
    }
  }
  // show or hide lock icon
  hideOrShowLock(event: boolean) {
    if (event == true) {
      this.lock = true;
    } else {
      this.lock = false;
    }
  }
  // show or hide disturb icon
  hideOrShowDisturb(event: boolean) {
    if (event == true) {
      this.disturb = true;
    } else {
      this.disturb = false;
    }
  }
  // changed message text
  changeMessageText(event: string) {
    this.messageText = event;
    console.log(this.messageText);
  }
  // change microphone to Send
  changeMicToSent(event: string) {
    if (event == 'Microphone') {
      this.micToSend = true;
    } else {
      this.micToSend = false;
    }
  }
  // change nickname
  changeNickname(event: string) {
    this.Name = event;
  }
  // input message
  inpMessage(event: any) {
    this.textMessage.push(event);
  } 

  // inpMessage1(event:any){
  //   this.textMessage1.push(event)
  //   console.log(this.textMessage1)
  // }
  //

  // Gray(event: any) {
  //   if (event ) {
  //     this.condition1=true
  //     this.cond1 = true;
  //     // if(this.condition3==true){
  //     //   this.gray = '';
  //     // }else{
  //     //   this.gray=''
  //     // }
  //     this.condition2=false
  //     this.condition3=false
  //     this.cond2 = false;
  //     this.cond3 = false;
  //   }else{
  //     // this.gray=''
  //     this.cond1 = false;
  //     this.condition1=false
  //   }
  // }
  // Blue(event: any) {
  //   if (event) {
  //     this.cond2 = true;
  //     this.condition2=true
  //     // if(this.condition2==true){
  //     //   this.blue = '';
  //     // }else{
  //     //   this.blue=''
  //     // }
  //      this.condition1=false
  //      this.condition3=false
  //     this.cond1 = false;
       
  //     this.cond3 = false;
  //   } else {
  //     this.condition2=false
  //     // this.blue=''
  //     this.cond2=false
  //   }
  // }
  // Green(event: any) {
  //   if (event) {
  //     this.cond3 = true;
  //     this.condition3=true
  //     // if(this.condition3==true){
  //     //   this.green = '';
  //     // }else{
  //     //   this.green=''
  //     // }
  //     this.cond1 = false;
  //     this.cond2 = false;
  //     this.condition1=false
  //     this.condition2=false
  //   }else{
  //     this.condition3=false
  //     // this.green=''
  //     this.cond3=false
  //   }
  // }
}
