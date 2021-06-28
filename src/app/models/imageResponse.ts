import {Image} from "./image";

/**
 * Represents an object containing image search properties
 * (contains an array of images inside).
 * This object returns flickr when you request the list of images.
 */
export interface ImageResponse {
  photos: {
    page: string,
    pages: string,
    perpage: number,
    total: number,
    photo: Image[];
  };
}
