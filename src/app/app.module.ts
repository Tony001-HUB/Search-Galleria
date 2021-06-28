import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './components/search-image/search-image.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {IMAGE_GALLERY_SERVICE_TOKEN, IMAGE_SERVICE_TOKEN} from "./tokens/injection-tokens";
import {FlickrService} from "./services/flickr.service";
import { BookmarkImageComponent } from './components/bookmark-image/bookmark-image.component';
import {ImageGalleryService} from "./services/image-gallery.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    BookmarkImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: 'cloud', component: SearchImageComponent },
      { path: 'bookmark', component: BookmarkImageComponent}
    ]),
  ],
  providers: [[{provide: IMAGE_SERVICE_TOKEN, useClass: FlickrService}],
    [{provide: IMAGE_GALLERY_SERVICE_TOKEN, useClass: ImageGalleryService}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
