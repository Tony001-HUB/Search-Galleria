import {FlickrImg} from "./flickrImg";

export interface Response {
  photos: {
    photo: FlickrImg[];
  };
}
