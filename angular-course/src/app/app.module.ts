import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { OriginalHomeComponent } from './original-home/original-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    OriginalHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
