import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interface/user.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public user: User = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() { 
    let type = this.route.snapshot.paramMap.get('type');
    if (type === "all") {
      console.log( this.dataService.getAllImageUser(this.user));
    } else if(type === "me") {
      this.dataService.getAllImageUser(this.user)
    }
  };

}
