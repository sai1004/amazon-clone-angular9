import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div fxLayoutAlign="center center">
            <img src="../../../../assets/icon/logo.jpg" alt="logo" class="logo" />
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
}
