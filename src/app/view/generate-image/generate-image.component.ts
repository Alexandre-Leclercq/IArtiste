import { Component, OnInit } from '@angular/core';
import { GeneratedImage } from 'src/app/shared/interface/generatedImage';
import { User } from 'src/app/shared/interface/user.interface';
import { ApiService } from 'src/app/shared/services/api.service';
import { DataService } from 'src/app/shared/services/data.service';
import { UploadService } from 'src/app/shared/services/upload.service';

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
    public dataService: DataService,
    public uploadService: UploadService
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
    let filename = '';
    this.apiService.generateImage(text).subscribe(response => {
      this.uploadService.uploadFile(response.data[0].b64_json)
      .then(s => { // on success
        filename = s.ref.name;
      }).catch(error => { // on error
        console.log(error);
      }).finally(() => { // when process over
        let image: GeneratedImage = {
          created: response.created,
          prompt: text,
          filename: filename,
        };
        this.dataService.addImageGenerate(this.user, image)
        let url = '';
        this.uploadService.downloadFile(image.filename)
        .then(s => { // success to get the url
          url = s;
        }).finally(() => { // update the image url
          this.updateImage(url);
          this.ngOnInit();
        });
      });
    })
  }
}
