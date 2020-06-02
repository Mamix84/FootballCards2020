import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FieldsetModule } from 'primeng/fieldset';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { NuovaCoppaComponent } from './nuova-coppa/nuova-coppa.component';
import { GiocaCoppaComponent } from './gioca-coppa/gioca-coppa.component';
import { CaricaCoppaComponent } from './carica-coppa/carica-coppa.component';
import { NuovaCoppaCasualeComponent } from './nuova-coppa-casuale/nuova-coppa-casuale.component';
import { ShareModule } from '../share/share.module';

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
    ShareModule,
    FieldsetModule,
    SelectButtonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [
    NuovaCoppaComponent,
    GiocaCoppaComponent,
    CaricaCoppaComponent,
    NuovaCoppaCasualeComponent,
  ],
})
export class CoppaModule {}
