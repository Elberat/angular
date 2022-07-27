import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authService: AuthenticationService) {}
  logout() {
    this.authService.logOut();
    console.log('logged out');
  }
}
