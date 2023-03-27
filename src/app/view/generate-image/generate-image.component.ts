import { Component, OnInit } from '@angular/core';
import { GeneratedImage } from 'src/app/shared/interface/generatedImage';
import { User } from 'src/app/shared/interface/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css']
})
export class GenerateImageComponent implements OnInit {

  public image: string = 'assets/img/test.png';
  
  public user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(
    public apiService: ApiService,
    public dataService: DataService
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
      let image: GeneratedImage = {
        created: response.created,
        b64_json: response.data[0].b64_json,
      };
      this.dataService.addImageGenerate(this.user, image)
      this.updateImage(image.b64_json);
      this.ngOnInit();
    })
  }
}
