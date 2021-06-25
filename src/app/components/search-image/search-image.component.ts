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
  keyword: string;
  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
  }

  search($event: any) {
    this.keyword = $event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      console.log(this.keyword);
      this.image$ = this.flickrService.searchPublicPhotos(this.keyword);
    }
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
