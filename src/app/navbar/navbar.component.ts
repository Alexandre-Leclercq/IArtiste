import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interface/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(
    public authService: AuthService
) { }

  signOut(): void {
    this.authService.SignOut()
  }
}
