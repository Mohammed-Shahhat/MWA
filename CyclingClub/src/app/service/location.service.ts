import {Injectable} from '@angular/core';

@Injectable()
export class LocationService {

  constructor() {
  }

  getCurrentLocation(callback: (lat: number, lng: number) => void) {
    navigator.geolocation.getCurrentPosition(function (loc) {
        callback(loc.coords.latitude, loc.coords.longitude);
      }, function (error) {
        console.log(error);
      }
    );
  }
}
