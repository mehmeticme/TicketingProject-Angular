import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {


  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),

    ]),
    phone: new FormControl(),
    password: new FormControl('', [
      // Validators.required,
      // Validators.minLength(8),

    ]),
    passwordConfirm: new FormControl('', [
      // Validators.required,
      // Validators.minLength(8),

    ]),
    gender: new FormControl(),
    role: new FormControl([
      Validators.required,


    ]),


  });

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get username() {
    return this.form.get('username');
  }

  get phone() {
    return this.form.get('phone');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get gender() {
    return this.form.get('gender');
  }

  get role() {
    return this.form.get('role');
  }

  users = {};
  roles = {};

  constructor(private http: HttpClient, private router: Router) {

    http.get('http://localhost:8081/users').subscribe(response => {
      this.users = response;
      console.log(this.users);

    });

    http.get('http://localhost:8081/roles').subscribe(response => {
      this.roles = response;
      console.log(this.roles);
   
    });

  }


  getUsers() {
    
    this.http.get('http://localhost:8081/users').subscribe(response => {
    
      this.users = response;

    });
  }



  onSaveUser(myForm: FormGroup) {

    console.log(myForm.value);
    this.http.post('http://localhost:8081/users', myForm.value).subscribe(response => {
      
      this.form.reset();
      this.getUsers();

    });


  }

  onDeleteUser(userId) {

    this.http.delete('http://localhost:8081/users' + '/' + userId).subscribe(response => {

      this.getUsers();

    });

  }

}
