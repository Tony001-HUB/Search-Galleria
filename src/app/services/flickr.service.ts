import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlickrImg} from "../models/flickrImg";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  public searchPublicPhotos(searchTerm: string, pageNumber: number): Observable<FlickrImg[]> {
    return this.http
      .get<Response>(`${environment.getImgUrl}`, {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          page: pageNumber,
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: `${environment.apiKey}`,
        },
      })
      .pipe(map((response) => response.photos.photo));
  }
}
