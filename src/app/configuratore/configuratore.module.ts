import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ConfiguraStagioniComponent } from './configura-stagioni/configura-stagioni.component';
import { ConfiguraFormatCampionatoComponent } from './configura-format-campionato/configura-format-campionato.component';
import { ConfiguraTipologiaTorneoComponent } from './configura-tipologia-torneo/configura-tipologia-torneo.component';
import { ConfiguraListaTeamsComponent } from './configura-lista-teams/configura-lista-teams.component';
import { ShareModule } from '../share/share.module';
import { ConfiguratoreComponent } from './configuratore/configuratore.component';

@NgModule({
  declarations: [
    ConfiguraStagioniComponent,
    ConfiguraFormatCampionatoComponent,
    ConfiguraTipologiaTorneoComponent,
    ConfiguraListaTeamsComponent,
    ConfiguratoreComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ShareModule,
    FieldsetModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    InputTextModule,
  ],
  exports: [
    ConfiguraStagioniComponent,
    ConfiguraFormatCampionatoComponent,
    ConfiguraTipologiaTorneoComponent,
    ConfiguraListaTeamsComponent,
    ConfiguratoreComponent,
  ],
})
export class ConfiguratoreModule {}
