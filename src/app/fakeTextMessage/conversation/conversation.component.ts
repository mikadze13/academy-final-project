import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
id: any;
  constructor(private fb: FormBuilder) {}
  aliasess: any[] = [];
  @Output()
  nickname: EventEmitter<string> = new EventEmitter();
  @Output()
  evenT: EventEmitter<any> = new EventEmitter();
  @Output()
  message: EventEmitter<any> = new EventEmitter();
  @Output()
  Gray:EventEmitter<any>=new EventEmitter()
  @Output()
  Blue:EventEmitter<any>=new EventEmitter()
  @Output()
  Green:EventEmitter<any>=new EventEmitter()
  @Output()
  message1:EventEmitter<any>=new EventEmitter()
  userForm!: FormGroup;
  userForm1!:FormGroup
  array: any[] = [];
  array1: any[] = [];
  ngOnInit(): void {
    this.userForm = this.fb.group({
      aliases: this.fb.array([
        this.fb.control('') 
      ]),
    });
    // this.userForm1=this.fb.group({
    //   aliases1:this.fb.array([
    //       this.fb.control('')
    //   ])
    // })
  }
  get aliases1(){
    return this.userForm1.get('aliases1') as FormArray
  }

  get aliases() {
    return this.userForm.get('aliases') as FormArray;
  }

  // nickname Emit
  nickName(event: any) {
    this.nickname.emit(event.target.value);
  }
  // }
  addNew() {
    this.aliases.push(this.fb.control(''));
    this.message.emit(this.array.slice(-1));
    console.log(this.array);
    // this.message = new EventEmitter;
  }

  // addNew1(){ 
  //   this.aliases1.push(this.fb.control(''))
  //   this.message1.emit(this.array1.slice(-1))  

  // }
  // text message emit
  textMessage(event: any) {
    this.array.push(event.target.value);
    // this.message.emit(this.array.slice(-1));
  }
  textMessage1(event:any){
    this.array1.push(event.target.value)
  }

  // 
  gray(event:any){
    
    if(event){
      this.Gray.emit(event)
    }
      
  }
  // blue(event:any){
  //   if(event){
  //     this.Blue.emit(event)
  //   }
     
  // }
  green(event:any){
    if(event){
      this.Green.emit(event)  
    }

  }
 
}
