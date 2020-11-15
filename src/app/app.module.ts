import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';
import { AppService } from './shared/service/app.service';
import { ApexService } from './shared/service/apex.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        FlexLayoutModule,
        ComponentsModule,
    ],
    providers: [AppService, ApexService],
    bootstrap: [AppComponent],
})
export class AppModule {}
