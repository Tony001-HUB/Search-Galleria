import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "../../models/image";
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { map } from 'rxjs/internal/operators/map';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import {IImageService} from "../../services/i-image-service";
import {IMAGE_SERVICE_TOKEN} from "../../tokens/injection-tokens";
import {Response} from "../../models/response";
import {ImageSaverService} from "../../services/image-saver.service";

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  @ViewChild('imgSearchInput', { static: true }) imgSearchInput: ElementRef;
  image$: Observable<any>;
  keyword: string;
  pageNumber: number;
  photoArray: any[];
  constructor(
    @Inject(IMAGE_SERVICE_TOKEN) private iImageService: IImageService,
    private imageSaverService: ImageSaverService) {}

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
        this.image$ = this.iImageService.searchPublicPhotos(this.keyword, this.pageNumber).pipe(
          shareReplay(1)
        );
      } else {
        this.image$ = null;
      }
    });
  }

  btnPrevPage() {
    this.image$ = this.iImageService.searchPublicPhotos(this.keyword, --this.pageNumber).pipe(
      shareReplay(1)
    );
  }

  btnNextPage() {
    this.image$ = this.iImageService.searchPublicPhotos(this.keyword, ++this.pageNumber).pipe(
      shareReplay(1)
    );
  }

  getNumberOfPagination(total: number, perpage: number): number {
    return Math.ceil(total / perpage);
  }

  saveImage(currentImg: Image) {
    this.imageSaverService.addImageInGallery(currentImg).subscribe();
  }
}

