import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './component/logo.component';

import { environment } from '../../environments/environment';

@NgModule({
  declarations: [LogoComponent],
  imports: [CommonModule, FormsModule, MaterialModule, FlexLayoutModule],
  exports: [FormsModule, MaterialModule, FlexLayoutModule, LogoComponent],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}
