/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Modified by: Eunice
 * Date: 9 June 2021
 * Description: App module
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
