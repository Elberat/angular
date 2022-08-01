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
    email: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
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
