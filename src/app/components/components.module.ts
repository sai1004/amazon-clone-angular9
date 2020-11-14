import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { BannerSlidesComponent } from './banner-slides/banner-slides.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    declarations: [AuthComponent, BannerSlidesComponent, TopNavbarComponent, SideNavComponent],
    imports: [CommonModule, SharedModule.forRoot()],
    exports: [AuthComponent, BannerSlidesComponent, TopNavbarComponent, SideNavComponent],
})
export class ComponentsModule {}
