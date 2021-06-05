import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from './menu/menu.module';
import { CampionatoModule } from './campionato/campionato.module';
import { CarrieraModule } from './carriera/carriera.module';
import { ConfiguratoreModule } from './configuratore/configuratore.module';
import { CoppaModule } from './coppa/coppa.module';
import { GestioneStagioniModule } from './gestione-stagioni/gestione-stagioni.module';
import { StagioneModule } from './stagione/stagione.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    CampionatoModule,
    CarrieraModule,
    ConfiguratoreModule,
    CoppaModule,
    GestioneStagioniModule,
    StagioneModule,
  ],
})
export class ViewsModule {}
