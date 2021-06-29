import {Image} from "./image";

/**
 * Represents an object containing image search properties
 * (contains an array of images inside).
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
