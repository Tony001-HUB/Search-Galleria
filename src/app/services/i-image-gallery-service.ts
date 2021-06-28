import {Image} from "../models/image";
import {Observable} from "rxjs";

export interface IImageGalleryService{
  addImageInGallery$(image: Image): Observable<void>;
  getImagesFromGallery$(): Observable<Image[]>;
  removeImageFromGallery$(id: string): Observable<void>;
}
