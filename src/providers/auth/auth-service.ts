import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth/public_api';
import * as firebase from "firebase/app";

/*
Generated class for the  AuthServiceProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
	*/
@Injectable()
export class AuthServiceProvider {
	
	user: Observable<firebase.User>;
	
	constructor(public http: Http, private angularFireAuth: AngularFireAuth) {
		
		this.user = angularFireAuth.authState;
	}

	
	/**
	 * 
	 * 
	 * @param user 
	 * @returns firebase.Promise<any>
	 * 
	 * @author Edeno
	 * @since 02/09/2017
	 */
	createUser(user: User): firebase.Promise<any>{
		return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
	}


	/**
	 * 
	 * 
	 * @param user 
	 * @returns firebase.Promise<any>
	 * 
	 * @author Edeno
	 * @since 03/09/2017
	 */
	signOut(): firebase.Promise<any>{
		return;
	}


	/**
	 * 
	 * 
	 * @param user 
	 * @returns firebase.Promise<any>
	 * 
	 * @author Edeno
	 * @since 03/09/2017
	 */
	signIn(user: User): firebase.Promise<any>{
		return;
	}
	
}
