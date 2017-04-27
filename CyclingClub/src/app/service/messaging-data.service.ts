import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MessagingDataService {

  constructor(private http: Http) {
  }

  getConversation(sender: String, receiver: String) {
    const url = 'http://localhost:3000/messages?sender=' + sender + '&receiver=' + receiver;
    const myHeaders = new Headers();
    myHeaders.append('X-Requested-With', 'Anguler');
    return this.http.get(url, {headers: myHeaders});
  }


  addMessage(senderId: String, senderName: String, receiverId: String, message: String) {
    const url = 'http://localhost:3000/messages';
    const body = {
      senderId: senderId,
      senderName: senderName,
      receiverId: receiverId,
      message: message
    };
    this.http.post(url, body);
  }
}
