import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { NuovoSpareggioComponent } from './nuovo-spareggio/nuovo-spareggio.component';
import { GiocaSpareggioComponent } from './gioca-spareggio/gioca-spareggio.component';
import { PreparaCampionatoComponent } from './prepara-campionato/prepara-campionato.component';
import { PreparaStagioneComponent } from './prepara-stagione/prepara-stagione.component';
import { NuovoSpareggioStagioneComponent } from './nuovo-spareggio-stagione/nuovo-spareggio-stagione.component';
import { GiocaSpareggioStagioneComponent } from './gioca-spareggio-stagione/gioca-spareggio-stagione.component';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [
    NuovoSpareggioComponent,
    GiocaSpareggioComponent,
    PreparaCampionatoComponent,
    PreparaStagioneComponent,
    NuovoSpareggioStagioneComponent,
    GiocaSpareggioStagioneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    WidgetModule,
    TableModule
  ],
  exports: [
    NuovoSpareggioComponent,
    GiocaSpareggioComponent,
    PreparaCampionatoComponent,
    PreparaStagioneComponent,
    NuovoSpareggioStagioneComponent,
    GiocaSpareggioStagioneComponent
  ],
})
export class GestioneStagioniModule {}
