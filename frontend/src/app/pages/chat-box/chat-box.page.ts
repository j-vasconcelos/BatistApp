import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.page.html',
  styleUrls: ['./chat-box.page.scss'],
})
export class ChatBoxPage implements OnInit {

  constructor() { 
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }

  ngOnInit() {
  }

}
