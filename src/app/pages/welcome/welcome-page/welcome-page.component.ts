import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
    htmlEle: any = `
    
        <h1>,kjhkjhkjhk</h1>
        <input type="text" value="hjgjhgjhgj"> 

    `;

    constructor(public dom: DomSanitizer) {}

    ngOnInit(): void {
        // this.dom(this.htmlEle);
    }

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
