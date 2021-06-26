import {InjectionToken} from "@angular/core";
import {IImageService} from "../services/i-image-service";

export let IMAGE_SERVICE_TOKEN = new InjectionToken<IImageService>('IMAGE SERVICE');
