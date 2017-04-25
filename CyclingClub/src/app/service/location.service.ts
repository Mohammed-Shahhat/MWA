import {Injectable} from '@angular/core';

@Injectable()
export class LocationService {

  constructor() {
  }

  getCurrentLocation(callback: (lat: number, lng: number) => void) {
    geolocation
      .getLocation()

      .then(
        function (data) {
          callback(data.coords.latitude, data.coords.longitude);
        }
      );
  }
}
