import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneratedImage } from 'src/app/shared/interface/generatedImage';
import { User } from 'src/app/shared/interface/user.interface';
import { DataService } from 'src/app/shared/services/data.service';
import { map, zip } from 'rxjs';
import { UploadService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public user: User = JSON.parse(localStorage.getItem('user')!);

  public images?: GeneratedImage[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private uploadService: UploadService,
    private router: Router
  ) { }
  ngOnInit() { 
    let type = this.route.snapshot.paramMap.get('type');
    if (type === "all") {
      console.log('ok')
    } else if(type === "me") {
      this.retrieveAllImagesCurrentUser();
    }
  };

  retrieveAllImagesCurrentUser(): void {
    this.dataService.getAllImageUser(this.user).get().pipe(
      map(changes =>
        changes.docs.map(c =>
          ({ 
            created: c.get('created'),
            prompt: c.get('prompt'),
            filename: c.get('filename'),
          })
        )
      )
    ).subscribe(data => {
      this.images = data;
      this.images = this.images?.map(image => {
        let tmp = {
          created: image.created,
          prompt: image.prompt,
          filename: image.filename,
          url: ''
        }
        this.uploadService.downloadFile(image.filename)
        .then(s => { // on success
          tmp.url = s;
        })
        .finally(() => {
        });
        return tmp;
      });
    });
  }

  consultImage(image: GeneratedImage) {
    this.router.navigate(['/consult', {
      created: image.created,
      prompt: image.prompt,
      filename: image.filename,
      url: image.url}]);
  }

}
