import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { NuovaStagioneComponent } from './nuova-stagione/nuova-stagione.component';
import { CaricaStagioneComponent } from './carica-stagione/carica-stagione.component';
import { GiocaStagioneComponent } from './gioca-stagione/gioca-stagione.component';
import { NuovaStagioneCasualeComponent } from './nuova-stagione-casuale/nuova-stagione-casuale.component';
import { WidgetModule } from 'src/app/widget/widget.module';
import { CampionatoModule } from '../campionato/campionato.module';


@NgModule({
  declarations: [
    NuovaStagioneComponent,
    CaricaStagioneComponent,
    GiocaStagioneComponent,
    NuovaStagioneCasualeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    CampionatoModule,
    TableModule,
    WidgetModule
  ],
  exports: [
    NuovaStagioneComponent,
    CaricaStagioneComponent,
    GiocaStagioneComponent,
    NuovaStagioneCasualeComponent,
  ],
})
export class StagioneModule {}
