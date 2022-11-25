import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { AuthenticateService } from 'src/app/provider/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = {
    id: 0,
    username: 'teste',
    email: 'teste',
    password: 'teste',
    adm: false
}

  constructor(private authenticate: AuthenticateService) { }

  ngOnInit() {
  }

}
