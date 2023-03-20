import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { }

  sign_up(email: string, password: string): void {
    this.authService.SignUp(email, password)
  }
}
