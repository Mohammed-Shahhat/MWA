import {Injectable} from '@angular/core';

@Injectable()
export class LocationService {

  constructor() {
  }

  getCurrentLocation() {
    let result;
    navigator.geolocation.getCurrentPosition(function (loc) {
        result = {lat: loc.coords.latitude, lng: loc.coords.longitude};
      }, function (error) {
        console.log(error);
      }
    );
    return result;
  }
}
