import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FlickrService} from "../../services/flickr.service";
import {Observable} from "rxjs";
import {FlickrImg} from "../../models/flickrImg";
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { map } from 'rxjs/internal/operators/map';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  @ViewChild('imgSearchInput', { static: true }) imgSearchInput: ElementRef;
  image$: Observable<FlickrImg[]>;
  keyword: string;
  pageNumber: number;
  constructor(private flickrService: FlickrService) {}

  ngOnInit(): void {
    this.pageNumber = 1;
    fromEvent(this.imgSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((keyword: string) => {
      console.log(keyword);
      if(keyword != ''){
        this.keyword = keyword;
        this.image$ = this.flickrService.searchPublicPhotos(this.keyword, this.pageNumber).pipe(
          shareReplay(1)
        );
      } else {
        this.image$ = null;
      }
    });
  }

  btnPrevPage() {
    this.image$ = this.flickrService.searchPublicPhotos(this.keyword, --this.pageNumber).pipe(
      shareReplay(1)
    );
  }

  btnNextPage() {
    this.image$ = this.flickrService.searchPublicPhotos(this.keyword, ++this.pageNumber).pipe(
      shareReplay(1)
    );
  }
}

