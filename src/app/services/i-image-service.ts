import {Observable} from "rxjs";
import {ImageResponse} from "../models/imageResponse";

export interface IImageService {
  searchPublicPhotos$(searchTerm: string, pageNumber: number): Observable<ImageResponse>;
}
