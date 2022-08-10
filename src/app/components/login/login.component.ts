import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public isError: boolean = false;
  public errorMessage: string;
  private subscription: Subscription;

  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    this.subscription = new Subscription();
    this.errorMessage = 'Wrong username or password!';
  }

  form = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
  });

  submit() {
    console.log(this.form.value);
    this.logIn(this.form.value.email, this.form.value.password);
  }

  public logIn(login?: string, password?: string): void {
    this.subscription.add(
      this.authService.logIn(login, password).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: () => {
          this.isError = true;
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
