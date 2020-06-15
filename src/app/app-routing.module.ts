import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaricaCampionatoComponent } from './campionato/carica-campionato/carica-campionato.component';
import { NuovoCampionatoComponent } from './campionato/nuovo-campionato/nuovo-campionato.component';
import { MenuComponent } from './menu/menu/menu.component';
import { GiocaCampionatoComponent } from './campionato/gioca-campionato/gioca-campionato.component';
import { NuovoCampionatoCasualeComponent } from './campionato/nuovo-campionato-casuale/nuovo-campionato-casuale.component';
import { NuovaStagioneComponent } from './stagione/nuova-stagione/nuova-stagione.component';
import { GiocaStagioneComponent } from './stagione/gioca-stagione/gioca-stagione.component';
import { CaricaStagioneComponent } from './stagione/carica-stagione/carica-stagione.component';
import { NuovaStagioneCasualeComponent } from './stagione/nuova-stagione-casuale/nuova-stagione-casuale.component';
import { GiornataComponent } from './share/giornata/giornata.component';
import { NuovaCoppaComponent } from './coppa/nuova-coppa/nuova-coppa.component';
import { GiocaCoppaComponent } from './coppa/gioca-coppa/gioca-coppa.component';
import { CaricaCoppaComponent } from './coppa/carica-coppa/carica-coppa.component';
import { NuovaCoppaCasualeComponent } from './coppa/nuova-coppa-casuale/nuova-coppa-casuale.component';
import { NuovaCarrieraComponent } from './carriera/nuova-carriera/nuova-carriera.component';
import { GiocaCarrieraComponent } from './carriera/gioca-carriera/gioca-carriera.component';
import { CaricaCarrieraComponent } from './carriera/carica-carriera/carica-carriera.component';
import { NuovaCarrieraCasualeComponent } from './carriera/nuova-carriera-casuale/nuova-carriera-casuale.component';
import { NuovoSpareggioComponent } from './gestione-stagioni/nuovo-spareggio/nuovo-spareggio.component';
import { GiocaSpareggioComponent } from './gestione-stagioni/gioca-spareggio/gioca-spareggio.component';
import { PreparaCampionatoComponent } from './gestione-stagioni/prepara-campionato/prepara-campionato.component';
import { PreparaTeamsComponent } from './gestione-stagioni/prepara-teams/prepara-teams.component';
import { PreparaStagioneComponent } from './gestione-stagioni/prepara-stagione/prepara-stagione.component';
import { NuovoSpareggioStagioneComponent } from './gestione-stagioni/nuovo-spareggio-stagione/nuovo-spareggio-stagione.component';
import { GiocaSpareggioStagioneComponent } from './gestione-stagioni/gioca-spareggio-stagione/gioca-spareggio-stagione.component';
import { ConfiguratoreComponent } from './configuratore/configuratore/configuratore.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'carica-campionato', component: CaricaCampionatoComponent },
  { path: 'nuovo-campionato', component: NuovoCampionatoComponent },
  { path: 'gioca-giornata', component: GiornataComponent },
  { path: 'gioca-campionato/:id', component: GiocaCampionatoComponent },
  {
    path: 'nuovo-campionato-casuale',
    component: NuovoCampionatoCasualeComponent,
  },
  { path: 'nuova-stagione', component: NuovaStagioneComponent },
  { path: 'gioca-stagione/:id', component: GiocaStagioneComponent },
  { path: 'carica-stagione', component: CaricaStagioneComponent },
  { path: 'nuova-stagione-casuale', component: NuovaStagioneCasualeComponent },

  { path: 'nuova-coppa', component: NuovaCoppaComponent },
  { path: 'gioca-coppa/:id', component: GiocaCoppaComponent },
  { path: 'carica-coppa', component: CaricaCoppaComponent },
  { path: 'nuova-coppa-casuale', component: NuovaCoppaCasualeComponent },

  { path: 'nuova-carriera', component: NuovaCarrieraComponent },
  { path: 'gioca-carriera/:id', component: GiocaCarrieraComponent },
  { path: 'carica-carriera', component: CaricaCarrieraComponent },
  { path: 'nuova-carriera-casuale', component: NuovaCarrieraCasualeComponent },

  { path: 'nuovo-spareggio/:id', component: NuovoSpareggioComponent },
  { path: 'gioca-spareggio/:id', component: GiocaSpareggioComponent },
  { path: 'prepara-campionato/:id', component: PreparaCampionatoComponent },
  { path: 'prepara-teams', component: PreparaTeamsComponent },
  { path: 'prepara-stagione/:id', component: PreparaStagioneComponent },
  {
    path: 'nuovo-spareggio-stagione/:id',
    component: NuovoSpareggioStagioneComponent,
  },
  {
    path: 'gioca-spareggio-stagione/:id',
    component: GiocaSpareggioStagioneComponent,
  },

  {
    path: 'configuratore',
    component: ConfiguratoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
