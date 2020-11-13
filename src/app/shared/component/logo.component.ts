import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'logo',
    template: `
        <div fxLayoutAlign="center center">
            <img src="../../../../assets/icon/pp.jpg" alt="logo" class="logo" />
        </div>
    `,
    styles: [
        `
            .logo {
                height: 100px;
                width: 100px;
                border-radius: 50%;
            }
        `,
    ],
})
export class LogoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
