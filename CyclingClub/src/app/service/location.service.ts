import {Injectable} from '@angular/core';

@Injectable()
export class LocationService {

  constructor() {
  }

  getCurrentLocation() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (loc) {
        console.log(loc.coords.latitude);
        console.log(loc.coords.longitude);
        resolve({lat: loc.coords.latitude, lng: loc.coords.longitude});
      }, function (error) {
        console.log(error);
        reject('The service is not working');
      });
    });
  }
}
