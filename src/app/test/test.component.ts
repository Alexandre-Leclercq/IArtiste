import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(
    public authService: AuthService,
    public apiService: ApiService
) { }

  public generateImage(text: string): void {
    this.apiService.generateImage(text).subscribe(a => {
      console.log(a);
    })
  }
}
