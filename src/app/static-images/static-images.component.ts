import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-images',
  templateUrl: './static-images.component.html',
  styleUrls: ['./static-images.component.scss']
})
export class StaticImagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
