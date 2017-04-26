import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-aboutus',
  template: `
    <p>
      Pray More and More ,Day and Night To Know About Us!
    </p>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class LiveRideComponent  {

  constructor(private router: Router){}

  onNavigate() {
    // Imperative Routing
    this.router.navigate(['/']);
  }

}
