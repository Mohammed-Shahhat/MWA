import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
  <h3>
    <p>
      This Cycling Club Appication is developed by Gratuate students.This SPA is developed using Angular 4,
      Express MongoDB and Mongoose
    </p>
    </h3>
  `,
  styles: []
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
