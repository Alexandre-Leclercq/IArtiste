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

  updateImage(imageUrl: string = ''): void {
    if (imageUrl) {// if the string isn't empty
      this.image = imageUrl;
    } else {
      this.image = 'assets/img/test.png';
    }
  }

  generateImage(text: string): void {
    this.apiService.generateImage(text).subscribe(response => {
      let image: GeneratedImage = {
        created: response.created,
        prompt: text,
        url: response.data[0].url,
      };
      this.dataService.addImageGenerate(this.user, image)
      this.updateImage(image.url);
      this.ngOnInit();
    })
  }
}
