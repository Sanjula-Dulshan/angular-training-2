import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InBaseComponent } from './in-base/in-base.component';
import { ExBaseComponent } from './ex-base/ex-base.component';

@NgModule({
  declarations: [
    AppComponent,
    InBaseComponent,
    ExBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
