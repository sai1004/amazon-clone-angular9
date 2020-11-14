import { Component, OnInit } from '@angular/core';
import { AppService } from './shared/service/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    menuList: any[] = [];
    sessionUser: any = null;

    constructor(private appService: AppService) {}

    ngOnInit() {
        let sessionUser = this.appService.getSessionUser();
        this.appService.sessionUserEmit(sessionUser);

        let menuList = this.appService.getSessionItem('menu');
        // this.appService.menuEmit(menuList);
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
