import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css']
})
export class GenerateImageComponent {
  constructor(
    public apiService: ApiService
) { }

  public generateImage(text: string): void {
    this.apiService.generateImage(text).subscribe(a => {
      console.log(a);
    })
  }
}
