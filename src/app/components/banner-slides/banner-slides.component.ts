import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-slides',
    templateUrl: './banner-slides.component.html',
    styleUrls: ['./banner-slides.component.scss'],
})
export class BannerSlidesComponent implements OnInit {
    imgUrl: string;
    num: number = 0;
    constructor() {}

    ngOnInit(): void {
        this.imgUrl = this.imgs[0];
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

    next() {
        this.num++;
        if (this.num >= this.imgs.length) {
            this.num = 0;
        }
        this.imgUrl = this.imgs[this.num];
    }

    previous() {
        this.num--;

        if (this.num < 0) {
            this.num = this.imgs.length - 1;
        }

        this.imgUrl = this.imgs[this.num];
    }
}
