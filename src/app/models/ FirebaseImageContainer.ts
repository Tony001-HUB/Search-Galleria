import {Image} from "./image";

/**
 * Represents an object, containing images inside
 * (it stores images in properties).
 * This object returns firebase when you request the list of images.
 */
export interface FirebaseImageContainer {
  [key: string]: Image
}
