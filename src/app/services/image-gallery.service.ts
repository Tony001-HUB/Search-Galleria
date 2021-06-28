import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import { map } from 'rxjs/internal/operators/map';
import {Image} from "../models/image";
import {FirebaseImageContainer} from "../models/ FirebaseImageContainer";
import {IImageGalleryService} from "./i-image-gallery-service";

@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService implements IImageGalleryService {

  constructor(private http: HttpClient) { }

  addImageInGallery$(image: Image): Observable<void> {
    return this.http
      .post<void>(`${environment.fbDbUrl}/image.json`, image);
  }
  getImagesFromGallery$(): Observable<Image[]> {
    return this.http.get<FirebaseImageContainer>(`${environment.fbDbUrl}/image.json`)
      .pipe(
        map(this.getImagesFromFirebaseImageContainer)
      )
  }

  removeImageFromGallery$(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/image/${id}.json`);
  }

  private getImagesFromFirebaseImageContainer(container: FirebaseImageContainer): Image[] {
    return Object.keys(container)
      .map(key => ({
        ...container[key],
        id: key,
      }));
  }
}
