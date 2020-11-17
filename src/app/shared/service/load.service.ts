import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class LoadService {
    constructor(private _http: HttpService) {}

    getmenuLists() {
        return this._http.getJsonData(`assets/json/menusList.json`);
    }

    getCountries() {
        return this._http.getJsonData(`assets/json/countries.json`);
    }
}
