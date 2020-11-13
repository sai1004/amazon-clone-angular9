import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/Auth';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-signin-page',
    templateUrl: './signin-page.component.html',
    styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
    @ViewChild(NgForm, { static: false }) myForm: NgForm;

    auth: Auth;

    constructor(private _authService: AuthService) {
        this.auth = new Auth();
    }

    ngOnInit() {}

    onLogin() {
        this._authService.signIn(this.auth.email, this.auth.password);
    }

    keyDownFunction(myForm) {}

    onForgotPassword() {}

    onSingup() {}
}
