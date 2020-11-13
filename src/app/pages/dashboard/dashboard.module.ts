import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AuthService } from '../auth/auth.service';
import { DashboardService } from './dashboard.service';

const routes: Routes = [{ path: 'dashboard', component: DashboardPageComponent }];

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ComponentsModule],
    providers: [AuthService, DashboardService],
})
export class DashboardModule {}
