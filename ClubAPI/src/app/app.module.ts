import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClubComponent } from './club.component';
import {LiveRideComponent} from './liveride.component';
import { ClubDetail } from './clubdetail.component';
import {FormserviceService} from './formservice.service';

import { AppComponent } from './app.component';
import { myRoutes } from './app.routes';
import {Error404Component} from "./error404.component";
import {ProfileGuard} from "./profile.guard";
import {LocationService} from './location.service';
import { AddclubComponent } from './addclub/addclub.component';
import { AboutUsComponent } from './about-us.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    LiveRideComponent,
    ClubDetail,
    Error404Component,
    AddclubComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    myRoutes
  ],

  providers: [ProfileGuard,LocationService,FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
