import { Component } from '@angular/core';
import {FormserviceService} from './formservice.service';

import { Router } from "@angular/router";
@Component({
  selector: 'app-comp1',
  template: `
    <div>

        <ul>
            <li *ngFor="let club of clubs">
            <a [routerLink] = "['profile',club._id]">{{club.name}} 
            <button (click)="onNavigate()">Join</button></a>
        </li>
        </ul>
     
        <button (click) = "addClub()">Add Club</button>
    </div>
`
})
export class ClubComponent {

   clubs;

    constructor( private router: Router,private formservice: FormserviceService) {
         this.formservice.getClubs().subscribe((data)=>{
            this.clubs = data.json();
            console.log('data '+this.clubs);
         });
    }

    addClub(){
    this.router.navigate(['addclub']);
    }
    onNavigate() {
      // Imperative Routing
      this.router.navigate(['/clubs/profile/:id']);
    }
}
