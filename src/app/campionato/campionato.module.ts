import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';

import { NuovoCampionatoComponent } from './nuovo-campionato/nuovo-campionato.component';
import { NuovoCampionatoCasualeComponent } from './nuovo-campionato-casuale/nuovo-campionato-casuale.component';
import { CaricaCampionatoComponent } from './carica-campionato/carica-campionato.component';
import { GiocaCampionatoComponent } from './gioca-campionato/gioca-campionato.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [NuovoCampionatoComponent, NuovoCampionatoCasualeComponent, CaricaCampionatoComponent, GiocaCampionatoComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ShareModule,
    FieldsetModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    SelectButtonModule
  ],
  exports: [NuovoCampionatoComponent, NuovoCampionatoCasualeComponent, CaricaCampionatoComponent, GiocaCampionatoComponent],
})
export class CampionatoModule {}
