import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { BannerSlidesComponent } from './banner-slides/banner-slides.component';

@NgModule({
    declarations: [AuthComponent, BannerSlidesComponent],
    imports: [CommonModule, SharedModule.forRoot()],
    exports: [AuthComponent, BannerSlidesComponent],
})
export class ComponentsModule {}
