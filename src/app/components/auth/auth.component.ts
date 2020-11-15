import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, NgForm } from '@angular/forms';
import { Auth } from '../../models/Auth';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AuthComponent implements OnInit {
    @Input()
    auth: Auth;

    @Input()
    type: string;

    @Input()
    signUpForm: FormGroup;

    hide: boolean = true;
    mobileErrMsg: string = 'Mobile number required';
    emailErrMsg: string = 'Email required';

    constructor() {}

    ngOnInit(): void {}
}
