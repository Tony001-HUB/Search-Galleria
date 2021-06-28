import {Observable} from "rxjs";
import {Response} from "../models/response";

export interface IImageService {
  searchPublicPhotos(searchTerm: string, pageNumber: number): Observable<Response>;
}
