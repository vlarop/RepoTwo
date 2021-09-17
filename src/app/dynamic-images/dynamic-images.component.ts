import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dynamic-images',
  templateUrl: './dynamic-images.component.html',
  styleUrls: ['./dynamic-images.component.scss']
})
export class DynamicImagesComponent implements OnInit {

  public imgUrl: Array<string | any> =
  [
  'https://f.aukro.cz/banner-images/562-e42d9e64-04ae-46d5-8981-045a7ea30743',
  'https://f.aukro.cz/banner-images/598-6197ded7-3435-4930-85a1-b9887f50b3e4',
  'https://f.aukro.cz/banner-images/559-23683a03-995d-47e4-91c1-6b9a6e90691e',
  'https://f.aukro.cz/banner-images/600-545d03e9-1e41-4b9d-93a5-09a30a714f6a',
  'https://f.aukro.cz/banner-images/597-108009a1-2dd7-4372-8338-0e489fa00455',
  'https://f.aukro.cz/banner-images/563-11b4e8c9-1b2d-4031-98ac-b82d13bb1ebe'
  ];

  public imageUrl: string | any;
  public image: string | any;
  public imgcanvas: string | any;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getImage();
    this.makeGray();
  }


    public getImage(){

    this.imageUrl = this.imgUrl[Math.floor(Math.random() * this.imgUrl.length)];

    return this.imageUrl;
    }


    public makeGray() {
        for (var pixel of this.imageUrl.values()) {
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
      }
      var imgcanvas = document.getElementById("imageUrl");
      this.image = this.imageUrl.drawTo(imgcanvas);
      return this.image;
    }

}
