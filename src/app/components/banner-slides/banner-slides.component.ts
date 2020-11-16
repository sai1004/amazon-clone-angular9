import { Component, Input, OnInit } from '@angular/core';

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

    @Input()
    imgs: any;

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
