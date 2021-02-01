import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})


export class ProjectCreateComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('',Validators.required),
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),

    ]),
    mobileNumber: new FormControl(),
    password: new FormControl('',[
      // Validators.required,
      // Validators.minLength(8),
   
    ]),
    passwordConfirm: new FormControl('',[
      // Validators.required,
      // Validators.minLength(8),
      
    ]),
    gender: new FormControl(),
    role: new FormControl('',[
      Validators.required,
  

    ]),
    


  })




  ngOnInit(): void {
  }

}
