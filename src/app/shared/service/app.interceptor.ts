import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    CONTENT_TYPE: string = 'application/json; charset=utf-8';

    constructor(private appSerivce: AppService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url == 'localhost') {
            request = request.clone({
                setHeaders: {
                    'Content-Type': this.CONTENT_TYPE,
                },
            });
        }

        const started = Date.now();
        let ok: string;

        return next.handle(request).pipe(
            tap(
                /* ----------> Success Responeses <---------- */
                (event: HttpEvent<any>) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),

                /* ----------> Error Responeses <---------- */
                (error: HttpErrorResponse) => ((ok = 'failed'), this.errorMessage(error.error.errorDescription))
            ),
            delay(10),
            // Log when response observable either completes or errors
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms.`;
                console.log(msg);
            })
        );
    }

    errorMessage(err: any) {
        let message = err.message ? err.message : err;
        // this.appSerivce.showMessage(message, true);
    }
}
