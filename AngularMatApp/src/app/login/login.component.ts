import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   // title = 'Angular Form Validation Tutorial';
    loginForm: FormGroup;
    constructor(private fb: FormBuilder) {
     this.createForm();
   }
    createForm() {
     this.loginForm = this.fb.group({
        name: ['', Validators.required ]
        
     });
   }

}
