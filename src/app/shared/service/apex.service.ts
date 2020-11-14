import { Injectable, Output, EventEmitter, NgZone } from '@angular/core';
import { Observable, AsyncSubject, Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from './storage.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root',
})
export class ApexService {
    private _loaderSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _blockSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _sessionUserSubject: Subject<Object> = new BehaviorSubject(null);

    private _dirSubject: Subject<any> = new BehaviorSubject(null);
    private _alertSubject: Subject<any> = new BehaviorSubject<any>(null);

    constructor(private _domSanitizer: DomSanitizer, private zone: NgZone, private storageService: StorageService) {}

    getStorage() {
        return this.storageService;
    }

    showMessage(message: string) {}

    showLoader(show: Boolean) {
        this.zone.run(() => {
            this._loaderSubject.next(show);
        });
    }

    blockScreen(show: Boolean) {
        this.zone.run(() => {
            this._blockSubject.next(show);
        });
    }

    loaderEvent(): Observable<Boolean> {
        return this._loaderSubject.asObservable();
    }

    blockEvent(): Observable<Boolean> {
        return this._blockSubject.asObservable();
    }

    sessionUserEvent(): Observable<Object> {
        return this._sessionUserSubject.asObservable();
    }

    dirEvent(): Observable<any> {
        return this._dirSubject.asObservable();
    }

    dirEmit(lang: string): any {
        this.getStorage().setLang(lang);
        let dir = this.getStorage().getLang() == 'en' ? 'ltr' : 'rtl';
        this._dirSubject.next(dir);
    }

    sessionUserEmit(sessionUser: any) {
        this._sessionUserSubject.next(sessionUser);
    }

    bypassURL(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

    alertEmit(message: string, siFn: () => void, noFn: () => void) {
        let obj = {
            type: 'confirm',
            text: message,
            siFn: () => {
                this._alertSubject.next(null); //this will close the modal
                siFn();
            },
            noFn: () => {
                this._alertSubject.next(null);
                noFn();
            },
        };
        this._alertSubject.next(obj);
    }

    alertEvent(): Observable<any> {
        return this._alertSubject.asObservable();
    }
}
