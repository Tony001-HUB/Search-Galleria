import {FlickrImg} from "./flickrImg";

export interface Response {
  photos: {
    page: string,
    pages: string,
    perpage: string,
    total: string,
    photo: FlickrImg[];
  };
}
