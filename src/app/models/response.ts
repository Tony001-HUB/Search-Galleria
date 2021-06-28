import {Image} from "./image";

export interface Response {
  photos: {
    page: string,
    pages: string,
    perpage: number,
    total: number,
    photo: Image[];
  };
}
