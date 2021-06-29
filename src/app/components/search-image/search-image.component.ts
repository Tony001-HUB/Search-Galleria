import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from "rxjs";
import {Image} from "../../models/image";
import {IImageService} from "../../services/i-image-service";
import {IAUTH_SERVICE_TOKEN, IMAGE_SERVICE_TOKEN} from "../../tokens/injection-tokens";
import {ImageGalleryService} from "../../services/image-gallery.service";
import {debounceTime, distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import {IAuthService} from "../../services/i-auth-service";

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
    @Inject(IAUTH_SERVICE_TOKEN) public iAuthService: IAuthService) {}

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

