import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {}

  form = new FormGroup({
    email: new FormControl<string | null | undefined>('', [
      Validators.required,
    ]),
    password: new FormControl<string | null | undefined>('', [
      Validators.required,
    ]),
  });

  submit() {
    console.log(this.form.value);
    this.authService.login(this.form.value.email, this.form.value.password);
    if (this.authService.isAthenticated()) {
      console.log('logged in');
      this.router.navigate(['/']);
    } else {
      console.log('not logged in');
    }
  }
}
