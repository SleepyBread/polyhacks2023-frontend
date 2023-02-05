import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { AuthButtonComponent } from "../auth/auth.component";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormAchievementComponent } from './form-achievement/form-achievement.component';


@NgModule({
    declarations: [
        AppComponent,
        AuthButtonComponent,
        FormAchievementComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
          {path: '', component: HomeComponent},
        ]),
        AuthModule.forRoot({
            domain: 'dev-0pkr4qp67l06ca8u.us.auth0.com',
            clientId: 'jxsbyicasIOb3b1Re0Q5dGfLY9KJZEXR',
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        }),
    ]
})
export class AppModule { }
