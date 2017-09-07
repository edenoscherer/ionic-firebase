import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ResetPasswordPage } from './../pages/reset-password/reset-password';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';

import { AuthServiceProvider } from '../providers/auth/auth-service';

const firebaseConfig = {
    apiKey: "AIzaSyAK0-VUw6SrPzF-_yTIsBIMRMSKtNXD07w",
    authDomain: "listador-de-tarefas-bae95.firebaseapp.com",
    databaseURL: "https://listador-de-tarefas-bae95.firebaseio.com",
    projectId: "listador-de-tarefas-bae95",
    storageBucket: "listador-de-tarefas-bae95.appspot.com",
    messagingSenderId: "1090483141058"
};


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		SigninPage,
		SignupPage,
		ResetPasswordPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		SigninPage,
		SignupPage,
		ResetPasswordPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AuthServiceProvider
	]
})
export class AppModule {}
