import {Component, OnInit, Input} from '@angular/core';
import {LocationService} from '../service/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  @Input() mapCenter: { lat: number, lng: number };
  @Input() mapLocations: [{ lat: number, lng: number, label: String, draggable: boolean }];

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    if (this.mapCenter) {
      this.lat = this.mapCenter.lat;
      this.lng = this.mapCenter.lng;
    } else if (this.mapLocations && this.mapLocations.length >= 1) {
      this.lat = this.mapLocations[0].lat;
      this.lng = this.mapLocations[0].lng;
    } else {
      this.locationService.getCurrentLocation(function (lat, lng) {
        this.lat = lat;
        this.lng = lng;
      });
    }
  }

}
