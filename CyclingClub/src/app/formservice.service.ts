import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class FormserviceService {
  currentItem: EventEmitter<Object>;

  constructor(public http: Http) {
    this.currentItem = new EventEmitter();
  }

  getData(url: string): Observable<Response> {
    return this.http.get(url);
  }

getClubById(id){
  console.log('id is'+id);
  return this.http.get('http://localhost:3000/clubs/'+id);
}
  submitPost(body):Observable<Response> {
    console.log('here')
    return this.http.post('http://localhost:3000/clubs',body);
  }

  getClubs(){
    return this.http.get('http://localhost:3000/clubs');
  }

}
