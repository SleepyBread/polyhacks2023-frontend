import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormAchievementComponent } from './form-achievement/form-achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAchievementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
