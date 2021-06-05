import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { ConfiguraStagioniComponent } from './configura-stagioni/configura-stagioni.component';
import { ConfiguraFormatCampionatoComponent } from './configura-format-campionato/configura-format-campionato.component';
import { ConfiguraTipologiaTorneoComponent } from './configura-tipologia-torneo/configura-tipologia-torneo.component';
import { ConfiguraListaTeamsComponent } from './configura-lista-teams/configura-lista-teams.component';
import { ConfiguratoreComponent } from './configuratore/configuratore.component';
import { ConfiguraNumeroTeamsComponent } from './configura-numero-teams/configura-numero-teams.component';
import { WidgetModule } from 'src/app/widget/widget.module';

@NgModule({
  declarations: [
    ConfiguraStagioniComponent,
    ConfiguraFormatCampionatoComponent,
    ConfiguraTipologiaTorneoComponent,
    ConfiguraListaTeamsComponent,
    ConfiguratoreComponent,
    ConfiguraNumeroTeamsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    WidgetModule
  ],
  exports: [
    ConfiguraStagioniComponent,
    ConfiguraFormatCampionatoComponent,
    ConfiguraTipologiaTorneoComponent,
    ConfiguraListaTeamsComponent,
    ConfiguratoreComponent,
    ConfiguraNumeroTeamsComponent,
  ],
})
export class ConfiguratoreModule {}
