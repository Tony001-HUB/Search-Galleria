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

  getPhotos(wordToSearch: string): Observable<FlickrImg[]> {
    const options = `api_key=${environment.apiKey}&text=${wordToSearch}&format=json&nojsoncallback=1&per_page=12`;
    const url = `${environment.getImgUrl}?method=flickr.test.echo&name=value`;

    return this.http.get<Response>(url + options)
      .pipe(map((response: Response) => response.photos.photo)
    );
  }

  public searchPublicPhotos(searchTerm: string): Observable<FlickrImg[]> {
    return this.http
      .get<Response>('https://www.flickr.com/services/rest/', {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          tag_mode: 'all',
          media: 'photos',
          per_page: '15',
          extras: 'tags,date_taken,owner_name,url_q,url_m',
          api_key: 'c3050d39a5bb308d9921bef0e15c437d',
        },
      })
      .pipe(map((response) => response.photos.photo));
  }
}
