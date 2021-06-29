import {Observable} from "rxjs";
import {ImageResponse} from "../models/imageResponse";

/**
 * Represents a service allowing to interact with images storage
 */
export interface IImageService {
  /**
   * Searches photos by tag name
   * It returns the page with the specified pageNumber.
   */
  searchPublicPhotos$(searchTerm: string, pageNumber: number): Observable<ImageResponse>;
}
