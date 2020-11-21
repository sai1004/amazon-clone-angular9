import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/models/Auth';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
    signUpForm: FormGroup;
    selectedCountry: any = 'MY';
    selectedPhoneNumber: any;

    auth: Auth;

    constructor(private formBuilder: FormBuilder) {
        this.signUpForm = this.createFormWithBuilder();
    }

    ngOnInit(): void {}

    onSignUp() {
        console.log(this.signUpForm.value);
    }

    createFormWithBuilder() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            mobile: ['', Validators.required, this._validatePhoneNumberInput.bind(this)],
            email: [''],
            password: ['', Validators.required],
            selectedCountry: [''],
        });
    }

    getCountry(event) {
        this.selectedCountry = event;
        console.log('e+ this', event, this.selectedCountry);
    }

    _validatePhoneNumberInput(c: AbstractControl): object {
        let inputValue: string = c.value.toString();
        console.log('vali', this.selectedCountry);
        let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if (phoneNumber) {
            if (phoneNumber.isValid()) {
                return null;
            } else {
                return {
                    phoneNumber: {
                        valid: false,
                    },
                };
            }
        } else {
            return {
                phoneNumber: {
                    valid: false,
                },
            };
        }
    }
}
