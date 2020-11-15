import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/models/Auth';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
    signUpForm: FormGroup;

    auth: Auth;

    constructor(private formBuilder: FormBuilder) {
        this.signUpForm = this.createFormWithBuilder();
    }

    ngOnInit(): void {}

    onSignUp() {}

    createFormWithBuilder() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            mobile: ['', Validators.required],
            email: [''],
            password: ['', Validators.required],
        });
    }
}
