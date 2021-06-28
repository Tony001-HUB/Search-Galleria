import {Image} from "./image";

export interface ImageResponse {
  photos: {
    page: string,
    pages: string,
    perpage: number,
    total: number,
    photo: Image[];
  };
}
