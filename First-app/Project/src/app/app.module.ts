// angular uses components and app.module bundles everything.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // which component should you recognize on index html file.{bootstrap}
  bootstrap: [AppComponent]
})
export class AppModule { }
