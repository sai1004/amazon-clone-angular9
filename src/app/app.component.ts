import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from './shared/service/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    sessionUser: any = null;
    activeRoute: any;
    isShowNav: boolean = false;

    constructor(private appService: AppService, private router: Router) {
        this.keepTrackOfActiveRoute();
    }

    ngOnInit() {
        let sessionUser = this.appService.getSessionUser();
        this.appService.sessionUserEmit(sessionUser);
    }

    menuList: any[] = [
        { name: 'mobiles', path: '/mobiles' },
        { name: 'electronics', path: '/mobiles' },
        { name: 'clothes', path: '/mobiles' },
    ];

    keepTrackOfActiveRoute() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
            this.activeRoute = event;
            console.log('Active Route::', this.activeRoute.url);
            if (this.activeRoute.url == '/auth/signin') {
                this.isShowNav = false;
            } else if (this.activeRoute.url == '/auth/signup') {
                this.isShowNav = false;
            } else if (this.activeRoute.url == '/auth/forgot-password') {
                this.isShowNav = false;
            } else {
                this.isShowNav = true;
            }
        });
    }

    outputEvent($event) {
        if ($event) {
            this.appService.navigate($event, []);
        } else {
            this.appService.sessionUserEmit(null);
            this.appService.navigate('', []);
        }
    }
}
