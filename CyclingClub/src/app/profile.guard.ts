import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {DataService} from "./db.service";
import {Injectable} from "@angular/core";


@Injectable()
export class ProfileGuard implements CanActivate {
//constructor dependency injection
  constructor(private dbService : DataService, protected router : Router) {}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean {
    var id = route.params['id'];
    if(id) {
      var clubsList = this.dbService.getData().filter(club => club.id === id);
      if(clubsList.length > 0) {
        return true;
      }
    }
    //navigate to other route
    this.router.navigate(['error/404']);
    return false;

  }
}
