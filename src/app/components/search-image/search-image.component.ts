import { Component, OnInit } from '@angular/core';
import {FlickrService} from "../../services/flickr.service";
import {Observable} from "rxjs";
import {FlickrImg} from "../../models/flickrImg";

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  image$: Observable<FlickrImg[]>;
  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
    this.image$ = this.flickrService.searchPublicPhotos('bird')
  }

}

/*
<div *ngIf="image$ | async as response">
  <div *ngFor="let currentImg of response">
    {{currentImg.title}}
    {{currentImg.page}}
    {{currentImg.pages}}
    <img src="{{currentImg.url_m}}">
  </div>
</div>
 */
