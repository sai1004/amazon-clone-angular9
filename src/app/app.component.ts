import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppService } from './shared/service/app.service';
import { LoadService } from './shared/service/load.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

    sessionUser: any = null;
    activeRoute: any;
    isShowNav: boolean = false;
    menuLists: any;

    constructor(private appService: AppService, private router: Router, private _loadService: LoadService) {
        this.keepTrackOfActiveRoute();
        this.loadMenusList();
    }

    ngOnInit() {}

    keepTrackOfActiveRoute(): void {
        /* ------ Hide nav bar ------ */
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((event) => {
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

    outputEvent($event) {}

    loadMenusList() {
        this._loadService.getmenuLists().subscribe((menus) => {
            this.menuLists = menus;
        });
    }
}
