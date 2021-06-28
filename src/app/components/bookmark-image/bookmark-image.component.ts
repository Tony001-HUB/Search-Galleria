import { Component, OnInit } from '@angular/core';
import {ImageSaverService} from "../../services/image-saver.service";
import {Observable} from "rxjs";
import {Image} from "../../models/image";

@Component({
  selector: 'app-bookmark-image',
  templateUrl: './bookmark-image.component.html',
  styleUrls: ['./bookmark-image.component.css']
})
export class BookmarkImageComponent implements OnInit {

  image$: Observable<Image[]>
  constructor(private imageSaverService: ImageSaverService) { }

  ngOnInit(): void {
    this.image$ = this.imageSaverService.getImageFromGallery();
  }

  remove(id: string) {
    this.imageSaverService.removeImageFromGallery(id).subscribe();
  }
}
