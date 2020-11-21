import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{ path: 'view', component: CartPageComponent }];

@NgModule({
    declarations: [CartPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ComponentsModule],
})
export class CartModule {}
