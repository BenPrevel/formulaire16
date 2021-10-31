import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm = this.fb.group({
    username: [''],
    adress: this.fb.group({
      number: [''],
      street: [''],
      zipCode: [''],
      city: [''],
    }),
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: [''],
    }),
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
