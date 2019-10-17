import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
