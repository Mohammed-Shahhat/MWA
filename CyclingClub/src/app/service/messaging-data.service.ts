import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MessagingDataService {

  constructor(private http: Http) {
  }

  getConversation(sender: String, receiver: String) {
return this.http.get();
  }

  addMessage(senderId: String, senderName: String, receiverId: String, message: String) {

  }
}
