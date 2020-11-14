import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
    dir: string = null;
    acitveLink: string;

    @Input()
    sessionUser: any;

    @Input()
    menuList: any;

    @Output()
    outputEvent = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
