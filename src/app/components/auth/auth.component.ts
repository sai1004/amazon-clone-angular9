import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApexService } from 'src/app/shared/service/apex.service';
import { Auth } from '../../models/Auth';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export interface ICountry {
    name?: string;
    code?: string;
}
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class AuthComponent implements OnInit {
    hide: boolean = true;
    selectedCountry: any = 'MY';
    selectedPhoneNumber: any;
    countries: any[];
    countrySubscription: Subscription;

    @Input()
    auth: Auth;

    @Input()
    type: string;

    @Input()
    signUpForm: FormGroup;

    @Output()
    selectedCountryEmitter = new EventEmitter();

    constructor(private _apexService: ApexService) {}

    ngOnInit(): void {
        this.fetchCountryList();
    }

    ngOnDestroy(): void {
        if (this.countrySubscription) {
            this.countrySubscription.unsubscribe();
        }
    }

    private fetchCountryList(): void {
        this.countrySubscription = this._apexService.getCountries().subscribe(
            (res: ICountry[]) => {
                this.countries = res;
            }
            // (error) => (error)
        );
    }

    resetPhoneNumber() {
        this.signUpForm.patchValue({ mobile: '' });
    }

    formatPhoneNumber(event: any): void {
        let inputValue: any = this.signUpForm.value.mobile;
        let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if (phoneNumber) {
            this.selectedPhoneNumber = phoneNumber.number;
            this.signUpForm.patchValue({ mobile: phoneNumber.formatInternational() });
        }
    }
}
