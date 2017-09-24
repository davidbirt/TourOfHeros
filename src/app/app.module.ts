import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListingComponent } from './hero-listing/hero-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { Response404Component } from './response-404/response-404.component';
import { appRoutes } from './config/routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListingComponent,
    Response404Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing:true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
