import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SigninPage } from './../signin/signin';
import { AuthServiceProvider } from './../../providers/auth/auth-service';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	constructor(public navCtrl: NavController, private authService: AuthServiceProvider) {
		
	}

	signOut() {

		this.authService.signOut()
			.then(() => {
				this.navCtrl.setRoot(SigninPage);
			})
			.catch((error) => {
				console.error(error);
			});
	}
	
}
