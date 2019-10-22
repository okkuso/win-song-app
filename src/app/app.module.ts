import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediaScreenComponent } from './media-screen/media-screen.component';
import { MediaTitleComponent } from './media-title/media-title.component';
import { MediaNextComponent } from './media-next/media-next.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaScreenComponent,
    MediaTitleComponent,
    MediaNextComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
