import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "../../models/image";
import {IImageGalleryService} from "../../services/i-image-gallery-service";
import {IMAGE_GALLERY_SERVICE_TOKEN} from "../../tokens/injection-tokens";

@Component({
  selector: 'app-bookmark-image',
  templateUrl: './bookmark-image.component.html',
  styleUrls: ['./bookmark-image.component.css']
})
export class BookmarkImageComponent implements OnInit {

  image$: Observable<Image[]>
  constructor(
    @Inject(IMAGE_GALLERY_SERVICE_TOKEN) private iImageGalleryService: IImageGalleryService,
  ) { }

  ngOnInit(): void {
    this.image$ = this.iImageGalleryService.getImagesFromGallery$();
  }

  remove(id: string) {
    this.iImageGalleryService.removeImageFromGallery$(id).subscribe(response => {
      location.reload();
    });
  }
}
