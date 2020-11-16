import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './component/logo.component';

import { environment } from '../../environments/environment';
import { HttpService } from './service/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './service/app.interceptor';

@NgModule({
    declarations: [LogoComponent],
    imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule, HttpClientModule],
    exports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule, LogoComponent, HttpClientModule],
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                HttpService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
