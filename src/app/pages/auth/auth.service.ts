import { Injectable } from '@angular/core';
import { Auth } from '../../../app/models/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: Auth;

  constructor(public router: Router) {
    this.checkUser();
  }

  checkUser() {}

  // Sign in with email/password
  signIn(email: string, password: string) {}

  // Sign up with email/password
  signUp(email, password) {}

  // Sign out
  signOut() {}

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
