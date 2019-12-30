import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Index } from './index/index.component';
import { SideBarNavigation } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    Index,
    SideBarNavigation
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
