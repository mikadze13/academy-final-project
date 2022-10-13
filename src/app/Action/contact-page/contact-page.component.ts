import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/UserService/userservice.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    message: new FormControl('', [Validators.required]),
  }); 
  contacUser(inputElement: any) {
    inputElement = this.contactForm.value;
    if (inputElement) {
      this.userService.addInfo(inputElement);
      this.contactForm.reset();
    }
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
