import { Component } from '@angular/core';
import {FormserviceService} from './formservice.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-route',
  template: `

    <div>
    <div *ngIf="club!=undefined">
        <p>Club Id: {{club._id}}<p>
        <p>Club  Name: {{club.name}}<p>
         <p>Club City: {{club.city}}<p>
        <p>Club State: {{club.state}}<p>
          <p>Club's Description: {{club.post}}<p>
    </div>
    

<button (click)= "addPost()">Add Post</button>
<button (click)= "onNavigate()">Add Event</button>
<button (click)= "onNavigate()">Member List</button>
</div>
  `
})
export class ClubDetail {
 private subscription: Subscription;
  private club;
  id;
  constructor(private router: Router,private activatedRoute: ActivatedRoute,private formservice: FormserviceService) {
       activatedRoute.params.subscribe((param) =>{
            this.id = param['id'] ;
         //   console.log(this.id);
            formservice.getClubById(this.id).subscribe((data)=>{
              this.club = data.json()[0];
              console.log(this.club);
            });
      });
  }

  onNavigate() {
      // Imperative Routing
      this.router.navigate(['/']);
    }
addPost(){
  this.router.navigate(['/addpost']);
}
}
