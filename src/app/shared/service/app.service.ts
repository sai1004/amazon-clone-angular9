import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApexService } from './apex.service';
import { StorageService } from './storage.service';

//import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class AppService {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apexService: ApexService,
        private storage: StorageService
    ) {}

    navigate(url: String, params: any[]) {
        console.log('url: ' + url);
        if (params) {
            let param: any = {};
            if (params instanceof Array) {
                for (let i = 0; i < params.length; i++) {
                    for (let key in params[i]) {
                        param[key] = params[i][key];
                    }
                }
            } else {
                param = params;
            }

            let navigationExtras: NavigationExtras = {
                queryParams: param,
            };
            this.router.navigate([url], navigationExtras);
        } else {
            this.router.navigate([url]);
        }
    }

    getParam(key: string): string {
        return this.route.snapshot.queryParams[key];
    }

    isAccess(path: String) {
        return true;
    }

    getStorage() {
        return this.storage;
    }

    getSessionItem(key: string) {
        return this.storage.getSessionItem(key);
    }

    setSessionItem(key: string, value: any) {
        return this.storage.setSessionItem(key, value);
    }

    showLoader(show: boolean) {
        this.apexService.showLoader(show);
    }

    blockScreen(show: boolean) {
        this.apexService.blockScreen(show);
    }

    showMessage(message: string) {
        this.apexService.showMessage(message);
    }

    sessionUserEmit(data: any) {
        this.apexService.sessionUserEmit(data);
    }

    getBranch(): any {
        return this.storage.getBranch();
    }

    getSessionUser() {
        return this.storage.getSessionUser();
    }

    sessionClear() {
        this.storage.clearSession();
        this.sessionUserEmit(null);
    }
}
