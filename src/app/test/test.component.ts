import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(
    public authService: AuthService
  ) { }

  signOut(): void {
    this.authService.SignOut()
  }
}
