import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { TopPageComponent } from './top-page/top-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
