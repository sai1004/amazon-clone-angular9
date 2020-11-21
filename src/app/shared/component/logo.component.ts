import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div fxLayoutAlign="center center">
            <img src="../../../../assets/icon/amazon_logo.svg" alt="logo" class="logo" *ngIf="!name" />
            <img src="../../../../assets/icon/amazon_logo_black.svg" alt="logo" class="logo" *ngIf="name" />
        </div>
    `,
    styles: [
        `
            .logo {
                height: 50px;
            }
        `,
    ],
})
export class LogoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    @Input()
    name: string;
}
