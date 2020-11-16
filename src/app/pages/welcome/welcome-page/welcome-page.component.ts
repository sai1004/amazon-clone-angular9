import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    imgs: any[] = [
        '../../../assets/banner/amazon_festive_sale.jpg',
        '../../../assets/banner/primevideo_add.jpg',
        '../../../assets/banner/nokia_sale.jpg',
        '../../../assets/banner/furniture_sale.jpg',
        '../../../assets/banner/samsung_galaxy_sale.jpg',
        '../../../assets/banner/fashion_sale.jpg',
        '../../../assets/banner/dailyneeds_sale.jpg',
    ];
}
