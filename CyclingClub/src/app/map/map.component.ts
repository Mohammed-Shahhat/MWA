import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LocationService} from '../service/location.service';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  @Input() mapLocations: [MapLocation];
  @Output() mapLocationClicked = new EventEmitter();
  @Output() markerClicked = new EventEmitter();

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    if (!isNullOrUndefined(this.mapLocations) && this.mapLocations.length >= 1) {
      this.lat = this.mapLocations[0].lat;
      this.lng = this.mapLocations[0].lng;
    } else {
      this.locationService.getCurrentLocation().subscribe(function (loc: { lat: number, lng: number }) {
        this.lat = loc.lat;
        this.lng = loc.lng;
      });
    }
  }

  clickedMarker(loc: MapLocation) {
    console.log(`clicked the marker:` + loc.toString());
    this.markerClicked.emit(loc);
  }

  mapClicked($event: any) {
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.mapLocationClicked.emit({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
}

interface MapLocation {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
