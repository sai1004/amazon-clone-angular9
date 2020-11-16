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

    onSignUp() {}

    createFormWithBuilder() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            mobile: ['', Validators.required, this._validatePhoneNumberInput.bind(this)],
            email: [''],
            password: ['', Validators.required],
        });
    }

    _validatePhoneNumberInput(c: AbstractControl): object {
        let inputValue: string = c.value.toString();
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

    formatPhoneNumber(event: any): void {
        let inputValue: any = this.signUpForm.controls['mobile'].value;
        let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if (phoneNumber) {
            this.selectedPhoneNumber = phoneNumber.number;
            this.signUpForm.patchValue({ mobile: phoneNumber.formatInternational() });
            // this.signUpForm.patchValue({ mobile: this.signUpForm.value.mobile });
            // this.signUpForm.patchValue({ iso2: this.selectedCountry });
        }
    }
}
