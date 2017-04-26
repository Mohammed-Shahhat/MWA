import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {FormserviceService} from "./formservice.service";
import {Injectable} from "@angular/core";


@Injectable()
export class ProfileGuard implements CanActivate {
//constructor dependency injection
  constructor(private formService : FormserviceService, protected router : Router) {}
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean {
    var id = route.params['id'];
    if(id) {
      var eventsList = this.formService.getData.bind(event => event.id === id);
      if(eventsList.length > 0) {
        return true;
      }
    }
    //navigate to other route
    this.router.navigate(['error/404']);
    return false;

  }
}
