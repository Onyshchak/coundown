import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  formItems: any[] = [
    {name: 'First Name*', controlName: 'firstName', isRequired: true},
    {name: 'Last Name*', controlName: 'lastName', isRequired: true},
    {name: 'Speciality*', controlName: 'speciality', isRequired: true, isSelect: true,
      optionList: Object.values(Speciality).filter(value => typeof value === 'string') as string[]},
    {name: 'Salutation*', controlName: 'salutation', isRequired: true, isSelect: true,
      optionList: Object.values(Salutation).filter(value => typeof value === 'string') as string[]},
    {name: 'Country', controlName: 'country'},
    {name: 'City', controlName: 'city'},
    {name: 'Email*', controlName: 'email'},
  ];

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      agree: [null, Validators.required],
      staffOnly: [null],
    });
    this.formItems.forEach(item => {
      this.registrationForm.addControl(item.controlName,
          new FormControl(null, item.isRequired ? Validators.required : null));
    });
  }

  submit(): void {

  }
}

enum Salutation {
  Mister = 1,
  Misses = 2
}

enum Speciality {
  Dermatology = 1,
  Pediatrics = 2,
  GP = 3,
  Resident = 4,
  Other = 5
}
