import { Injectable, Output, EventEmitter, NgZone } from '@angular/core';
import { Observable, AsyncSubject, Subject, BehaviorSubject } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root',
})
export class ApexService {
    private _loaderSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _blockSubject: Subject<Boolean> = new BehaviorSubject(false);
    private _sessionUserSubject: Subject<Object> = new BehaviorSubject(null);

    private _dirSubject: Subject<any> = new BehaviorSubject(null);

    constructor(private _domSanitizer: DomSanitizer, private zone: NgZone) {}

    bypassURL(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
