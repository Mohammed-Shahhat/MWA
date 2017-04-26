import { RouterModule, Routes } from "@angular/router";

import { ClubComponent } from "./club.component";
import { ClubDetail } from "./clubdetail.component";
import {ProfileGuard} from "./profile.guard";
import {LiveRideComponent} from "./liveride.component";
import {Error404Component} from "./error404.component";
import {AddclubComponent} from './addclub/addclub.component';
import {AboutUsComponent} from './about-us.component';
import {HomeComponent} from './home.component';
const MY_ROUTES: Routes = [
    { path : 'error/404', component : Error404Component },
     { path: 'clubs', component: ClubComponent },
     { path: '', component: HomeComponent },
     { path: 'liveride', component: LiveRideComponent },
     { path: 'clubs/profile/:id', component : ClubDetail },
     { path: 'clubs/profile', redirectTo: 'error/404' },
     {path:'addclub',component:AddclubComponent},
     {path:'aboutus',component: AboutUsComponent }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
