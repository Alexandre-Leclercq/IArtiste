import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css']
})
export class GenerateImageComponent implements OnInit {

  public image: string = 'assets/img/test.png';

  constructor(
    public apiService: ApiService,
  ) { }
  ngOnInit() { };

  updateImage(image64: string = ''): void {
    if (image64) {// if the string isn't empty
      this.image = 'data:image/png;base64, ' + image64;
    } else {
      this.image = 'assets/img/test.png';
    }
  }

  generateImage(text: string): void {
    this.apiService.generateImage(text).subscribe(response => {
      let imgBase64: string = response.data[0].b64_json;
      console.log(response);
      console.log(response.data);
      console.log(response.data[0]);
      console.log(imgBase64);
      this.updateImage(imgBase64);
      this.ngOnInit();
    })
  }
}
