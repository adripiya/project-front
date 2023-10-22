import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/providers/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', Validators.required),
  });

  constructor( private loginService: LoginService) {}

  onSubmit() {
    const query : any = {
      user: this.loginForm.value['user'],
      pass: this.loginForm.value['pass']
    }
    console.log(this.loginForm);
    this.loginService.getLogin(query).subscribe((response) => {

    })
  }
  
}
