import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/umd';
import { NgForm } from '@angular/forms';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { User } from './../../providers/auth/user.model';
import { AuthServiceProvider } from './../../providers/auth/auth-service';
import { ResetPasswordPage } from './../reset-password/reset-password';




/**
* Generated class for the SigninPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-signin',
	templateUrl: 'signin.html',
})
export class SigninPage {
	
	user: User = new User();
	@ViewChild('form') form: NgForm
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private authService: AuthServiceProvider) {
	}
	
	createAccount(){
		this.navCtrl.push(SignupPage);
	}

	resetPassword(){
		this.navCtrl.push(ResetPasswordPage);
	}


	signIn() {
		if (this.form.form.valid) {
		  this.authService.signIn(this.user)
			.then(() => {
			  this.navCtrl.setRoot(HomePage);
			})
			.catch((error: any) => {
			  let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
			  if (error.code == 'auth/invalid-email') {
				toast.setMessage('O e-mail digitado não é valido.');
			  } else if (error.code == 'auth/user-disabled') {
				toast.setMessage('O usuário está desativado.');
			  } else if (error.code == 'auth/user-not-found') {
				toast.setMessage('O usuário não foi encontrado.');
			  } else if (error.code == 'auth/wrong-password') {
				toast.setMessage('A senha digitada não é valida.');
			  }
			  toast.present();
			});
		}
	  }
	
}
