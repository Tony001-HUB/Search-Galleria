import {Observable} from "rxjs";
import {FlickrImg} from "../models/flickrImg";

export interface IImageService {
  searchPublicPhotos(searchTerm: string, pageNumber: number): Observable<FlickrImg[]>;
}
