import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;

	constructor(
		private fb: FormBuilder,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController
	) {}

	ngOnInit() {
	}

	async login() {
		this.router.navigateByUrl('/tabs', { replaceUrl: true });
	}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

}
