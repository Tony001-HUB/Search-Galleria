import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './components/search-image/search-image.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {IAUTH_SERVICE_TOKEN, IMAGE_GALLERY_SERVICE_TOKEN, IMAGE_SERVICE_TOKEN} from "./tokens/injection-tokens";
import {FlickrService} from "./services/flickr.service";
import { BookmarkImageComponent } from './components/bookmark-image/bookmark-image.component';
import {ImageGalleryService} from "./services/image-gallery.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthComponent } from './components/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AuthGuard } from './guards/auth.guard';
import {AuthService} from "./services/auth.service";
import { TrackingUserActivityComponent } from './components/tracking-user-activity/tracking-user-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    BookmarkImageComponent,
    AuthComponent,
    TrackingUserActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      {path: '', component: SearchImageComponent},
      {path: 'cloud', component: SearchImageComponent},
      {path: 'bookmark', component: BookmarkImageComponent, canActivate: [AuthGuard] },
      {path: 'auth', component: AuthComponent}
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
  ],
  providers: [
    [{provide: IMAGE_SERVICE_TOKEN, useClass: FlickrService}],
    [{provide: IMAGE_GALLERY_SERVICE_TOKEN, useClass: ImageGalleryService}],
    [{provide: IAUTH_SERVICE_TOKEN, useClass: AuthService}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
