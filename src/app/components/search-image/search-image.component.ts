import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "../../models/image";
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import {IImageService} from "../../services/i-image-service";
import {IMAGE_SERVICE_TOKEN} from "../../tokens/injection-tokens";
import {ImageGalleryService} from "../../services/image-gallery.service";
import { map } from 'rxjs/operators';
import {AuthService} from "../../services/auth.service";

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
  constructor(
    @Inject(IMAGE_SERVICE_TOKEN) private iImageService: IImageService,
    private imageSaverService: ImageGalleryService,
    public authService: AuthService) {}

  ngOnInit(): void {
    this.pageNumber = 1;
    fromEvent(this.imgSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      debounceTime(1500),
      distinctUntilChanged()
    ).subscribe((keyword: string) => {
      if(keyword != ''){
        this.keyword = keyword;
        this.image$ = this.iImageService.searchPublicPhotos$(this.keyword, this.pageNumber).pipe(
          shareReplay(1)
        );

      } else {
        this.image$ = null;
        this.pageNumber = 1;
      }
    });
  }

  btnPrevPage() {
    this.image$ = this.iImageService.searchPublicPhotos$(this.keyword, --this.pageNumber).pipe(
      shareReplay(1)
    );
  }

  btnNextPage() {
    this.image$ = this.iImageService.searchPublicPhotos$(this.keyword, ++this.pageNumber).pipe(
      shareReplay(1)
    );
  }

  getNumberOfPagination(total: number, perpage: number): number {
    return Math.ceil(total / perpage);
  }

  saveImage(currentImg: Image) {
    this.imageSaverService.addImageInGallery$(currentImg).subscribe({
      next: () => alert('Successfully added!'),
      error: (data) => console.log(`error: ${data}`)
    });
  }
}

