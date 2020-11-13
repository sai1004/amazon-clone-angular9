import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, SharedModule.forRoot()],
    exports: [AuthComponent],
})
export class ComponentsModule {}
