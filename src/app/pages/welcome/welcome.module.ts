import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [{ path: '', component: WelcomePageComponent }];

@NgModule({
    declarations: [WelcomePageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ComponentsModule, FlexLayoutModule],
})
export class WelcomeModule {}
