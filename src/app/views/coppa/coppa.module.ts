import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { NuovaCoppaComponent } from './nuova-coppa/nuova-coppa.component';
import { GiocaCoppaComponent } from './gioca-coppa/gioca-coppa.component';
import { CaricaCoppaComponent } from './carica-coppa/carica-coppa.component';
import { NuovaCoppaCasualeComponent } from './nuova-coppa-casuale/nuova-coppa-casuale.component';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [
    NuovaCoppaComponent,
    GiocaCoppaComponent,
    CaricaCoppaComponent,
    NuovaCoppaCasualeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    WidgetModule
  ],
  exports: [
    NuovaCoppaComponent,
    GiocaCoppaComponent,
    CaricaCoppaComponent,
    NuovaCoppaCasualeComponent,
  ],
})
export class CoppaModule {}
