import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorage } from '../utils/local-storage';

@Injectable({
    providedIn: 'root',
})
export class StorageService implements Storage {
    [index: number]: string;
    [key: string]: any;
    length: number;
    cookies: any;
    server: any;
    docLang: string = 'en';

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            console.log('Browser platform');
            this.server = sessionStorage;
            this.docLang = document.documentElement.lang;
            this.docLang = 'en';
        } else {
            console.log('Server platform');
            this.server = new LocalStorage();
        }
    }

    public clear(): void {
        this.server.clear();
    }

    public getItem(key: string): string {
        return this.server.getItem(key);
    }

    public key(index: number): string {
        return this.server.key().propertyIsEnumerable[index];
    }

    public removeItem(key: string): void {
        this.server.removeItem(key);
    }

    public setItem(key: string, data: string): void {
        this.server.setItem(key, data);
    }

    private pid = 'web';

    setSessionItem(key: string, val: any) {
        key = this.pid + '-' + key;
        if (val) {
            if (typeof val === 'object') {
                val = JSON.stringify(val);
            } else if (Array.isArray(val)) {
                val = JSON.stringify(val);
            }

            this.setItem(key, val);
        }
    }

    getSessionItem(key: string): any {
        key = this.pid + '-' + key;
        let val: string = this.getItem(key);
        if (val) {
            if (val.indexOf('{') > -1) {
                val = JSON.parse(val);
            } else if (val.indexOf('[') > -1) {
                val = JSON.parse(val);
            }
            return val;
        } else {
            return null;
        }
    }

    removeSessionItem(key: string): any {
        key = this.pid + '-' + key;
        this.removeItem(key);
    }

    setJWT(val: string) {
        if (val) {
            this.setSessionItem('jwt', val);
        }
    }

    getJWT() {
        return this.getSessionItem('jwt');
    }

    setSessionUser(val: any) {
        if (val) {
            this.setSessionItem('user', val);
        }
    }

    getSessionUser(): any {
        return this.getSessionItem('user');
    }

    setMenuList(val: any) {
        if (val) {
            this.setSessionItem('menu', val);
        }
    }

    getMenuList(): any {
        return this.getSessionItem('menu');
    }

    getBranch(): string {
        return this.getSessionItem('branch');
    }

    setBranch(val: any) {
        if (val) {
            this.setSessionItem('branch', val);
        }
    }

    setActiveLink(val: any) {
        if (val) {
            this.setSessionItem('link', val);
        }
    }

    getActiveLink(): string {
        return this.getSessionItem('link');
    }

    clearSession(): void {
        this.clear();
        this.removeSessionItem('jwt');
        this.removeSessionItem('user');
        this.removeSessionItem('menu');
        this.removeSessionItem('branch');
        this.removeSessionItem('link');
        this.removeSessionItem('I18N');
        this.removeSessionItem('lang');
        this.removeSessionItem('web');
        this.removeSessionItem('theme');
    }
}
