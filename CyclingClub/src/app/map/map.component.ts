import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocationService} from '../service/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.673858;
  lng = 7.815982;
  @Input() mapCenter: { lat: number, lng: number };
  @Input() mapLocations: [MapLocation];
  @Output() mapLocationClicked = new EventEmitter();

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    // if (this.mapCenter) {
    //   this.lat = this.mapCenter.lat;
    //   this.lng = this.mapCenter.lng;
    // } else if (this.mapLocations && this.mapLocations.length >= 1) {
    //   this.lat = this.mapLocations[0].lat;
    //   this.lng = this.mapLocations[0].lng;
    // } else {
    //   this.locationService.getCurrentLocation(function (lat, lng) {
    //     this.lat = lat;
    //     this.lng = lng;
    //   });
    // }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: any) {
    this.mapLocationClicked.emit({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(loc: MapLocation, $event: MouseEvent) {
    console.log('dragEnd', loc, $event);
  }
}

interface MapLocation {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
