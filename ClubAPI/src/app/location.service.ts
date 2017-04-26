import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs";



@Injectable()
export class LocationService {
  constructor(private http : Http){}

  getAllStates(url : string) : Observable<Response>{
    return this.http.get(url);
  }
  getAllCities(url : string) : Observable<Response> {
    return this.http.get(url);
  }
}
