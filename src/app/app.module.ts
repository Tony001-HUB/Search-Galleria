import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './components/search-image/search-image.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {IMAGE_SERVICE_TOKEN} from "./tokens/injection-tokens";
import {FlickrService} from "./services/flickr.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cloud', component: SearchImageComponent }
    ]),
  ],
  providers: [{provide: IMAGE_SERVICE_TOKEN, useClass: FlickrService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
