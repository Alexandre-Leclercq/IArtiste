import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { };

  sign_in(email: string, password: string): void {
    this.authService.SignIn(email, password)
  }
}
