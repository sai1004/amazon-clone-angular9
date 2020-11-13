import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService {
    constructor(public router: Router) {}

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['auth/signin']);
            return false;
        }
        return true;
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('user');
        return token && token != null && token != undefined;
    }
}
