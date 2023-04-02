import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneratedImage } from 'src/app/shared/interface/generatedImage';

@Component({
  selector: 'app-galleryclic',
  templateUrl: './galleryclic.component.html',
  styleUrls: ['./galleryclic.component.css']
})
export class GalleryclicComponent implements OnInit {

  public image = this.route.snapshot.paramMap;

  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() { 
    console.log(this.image);
  };

  stringToInt(text: string|null) {
    if(text)
      return parseInt(text);
    else
      return 0;
  }
}
