import {InjectionToken} from "@angular/core";
import {IImageService} from "../services/i-image-service";
import {IImageGalleryService} from "../services/i-image-gallery-service";

export let IMAGE_SERVICE_TOKEN = new InjectionToken<IImageService>('IMAGE SERVICE');
export let IMAGE_GALLERY_SERVICE_TOKEN = new InjectionToken<IImageGalleryService>('GALLERY SERVICE');

