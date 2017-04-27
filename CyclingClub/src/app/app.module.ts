import {BrowserModule} from '@angular/platform-browser';


import {HttpModule} from '@angular/http';


import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapComponent} from './map/map.component';

import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { ClubComponent } from './club.component';

import { ClubDetail } from './clubdetail.component';
import {FormserviceService} from './formservice.service';
import {AddPostComponent} from './addpost/addpost.component';

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
    MapComponent,
     AppComponent,
    ClubComponent,
    ClubDetail,
    AddPostComponent,
    Error404Component,
    AddclubComponent,
    AboutUsComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    myRoutes
  ],
  providers: [LocationService,ProfileGuard,LocationService,FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
