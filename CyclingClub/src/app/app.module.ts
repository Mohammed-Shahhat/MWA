import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {MapComponent} from './map/map.component';
import {LocationService} from './service/location.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot()
  ],
  providers: [LocationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
