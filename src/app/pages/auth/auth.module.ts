import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from 'src/app/components/components.module';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

import { AuthService } from './auth.service';

const routes: Routes = [
    { path: 'signin', component: SigninPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'forgot-password', component: ForgotPasswordPageComponent },
];

@NgModule({
    declarations: [SigninPageComponent, SignupPageComponent, ForgotPasswordPageComponent, ResetPasswordPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FlexLayoutModule, ComponentsModule],
    providers: [AuthService],
})
export class AuthModule {}
