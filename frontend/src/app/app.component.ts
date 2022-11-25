import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modal/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: User;

    constructor(
        private router: Router
    ) {
        
    }

}
