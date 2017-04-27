import { RouterModule, Routes } from "@angular/router";

import { ClubComponent } from "./club.component";
import { ClubDetail } from "./clubdetail.component";
import {ProfileGuard} from "./profile.guard";
import {Error404Component} from "./error404.component";
import {AddclubComponent} from './addclub/addclub.component';
import {AboutUsComponent} from './about-us.component';
import {HomeComponent} from './home.component';
import {AddPostComponent} from './addpost/addpost.component';

const MY_ROUTES: Routes = [
    { path : 'error/404', component : Error404Component },
     { path: 'clubs', component: ClubComponent },
     { path: '', component: HomeComponent },
     
     { path: 'clubs/profile/:id', component : ClubDetail },
     { path: 'clubs/profile', redirectTo: 'error/404' },
     {path:'addclub',component:AddclubComponent},
      {path:'addpost',component:AddPostComponent},
     {path:'aboutus',component: AboutUsComponent },
     
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
