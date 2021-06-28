import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { from } from 'rxjs/internal/observable/from';
import { FbResponse } from '../models/fbResponse';
import {Image} from "../models/image";

@Injectable({
  providedIn: 'root'
})
export class ImageSaverService {

  constructor(private http: HttpClient) { }

  addImageInGallery(image: Image): any {
    return this.http
      .post(`${environment.fbDbUrl}/image.json`, image)
      .pipe(map( (response: FbResponse) => {
        return{
          ...image
        };
      }));
  }

  getImageFromGallery(): Observable<Image[]> {
    return this.http.get<Image[]>(`${environment.fbDbUrl}/image.json`).pipe(map(response => {
      return Object
        .keys(response)
        .map( key => ({
          ...response[key],
          id: key,
        }));
    }));
  }

  removeImageFromGallery(id): any {
    return this.http.delete(`${environment.fbDbUrl}/image/${id}.json`);
  }
}
