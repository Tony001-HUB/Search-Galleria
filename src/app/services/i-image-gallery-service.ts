import {Image} from "../models/image";
import {Observable} from "rxjs";

/**
 * Represents a service allowing to interact with the image gallery
 */
export interface IImageGalleryService{
  /**
   * Adds a picture to the gallery
   */
  addImageInGallery$(image: Image): Observable<void>;

  /**
   * Returns all the images from the gallery
   */
  getImagesFromGallery$(): Observable<Image[]>;

  /**
   * Deletes image from the gallery by the specified id
   */
  removeImageFromGallery$(id: string): Observable<void>;
}

