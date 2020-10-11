import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public registrationForm: FormGroup;
  karyawan_bank = false;
  keluarga_karyawan = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      jenis_identitas: ['',Validators.compose([Validators.required])],
      no_identitas: ['', Validators.compose([Validators.required])]
    })
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.required])]
    // });
   }

  ngOnInit(): void {
  }

}
