import {Component, OnInit} from '@angular/core';
import {OrderListModule} from 'primeng/primeng';
import {MessagingDataService} from '../service/messaging-data.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageList: [{
    _id: String,
    messageContent: String,
    sender: String,
    sendDate: Date
  }];

  messageText: String;

  constructor(private messageingDataService: MessagingDataService) {
  }

  ngOnInit() {

    this.loadMessageList();
  }

  loadMessageList() {
    this.messageingDataService.getConversation('M1', 'M2').subscribe(function (data) {
      this.messageList = data;
      console.log(JSON.stringify(data, null, 4));
    });
    if (this.messageList) {
      this.messageList = [{
        _id: null,
        messageContent: null,
        sender: null,
        sendDate: null
      }];
    }
  }

  sendMessage() {
    console.log(this.messageText + ' is sent.');
    if (this.messageList) {
      this.messageList = [{
        _id: '',
        messageContent: this.messageText,
        sender: 'MMM',
        sendDate: new Date()
      }];
    } else {
      this.messageList.push({
        _id: '',
        messageContent: this.messageText,
        sender: 'MMM',
        sendDate: new Date()
      });
    }

    this.messageingDataService.addMessage('M1', 'MMM', 'M2', this.messageText);
    this
      .messageText = '';

  }
}
