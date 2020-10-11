import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  //Form Control 
  username = new FormControl('', [Validators.required]);
  // public username: string = '';
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
   }

  login() {
    // save to storage
    
    // Validate username 
    if(this.loginForm.controls.username.value == 'admin' && this.loginForm.controls.password.value == 'admin'){
      this.router.navigateByUrl('/home');
    }else{
      console.log('username and password invalid');
    }
  }

  ngOnInit(): void {
  }

}
