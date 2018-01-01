import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModules } from './material';
import { IssuesComponent } from './issues/issues.component';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    HttpModule,
    CommonModule
  ],
  entryComponents: [IssuesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
