import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ErrorComponent } from './shared/error/error.component';
import { LoginComponent } from './shared/login/login.component';
import { CaricaCampionatoComponent } from './views/campionato/carica-campionato/carica-campionato.component';
import { GiocaCampionatoComponent } from './views/campionato/gioca-campionato/gioca-campionato.component';
import { NuovoCampionatoCasualeComponent } from './views/campionato/nuovo-campionato-casuale/nuovo-campionato-casuale.component';
import { NuovoCampionatoComponent } from './views/campionato/nuovo-campionato/nuovo-campionato.component';
import { CaricaCarrieraComponent } from './views/carriera/carica-carriera/carica-carriera.component';
import { GiocaCarrieraComponent } from './views/carriera/gioca-carriera/gioca-carriera.component';
import { NuovaCarrieraCasualeComponent } from './views/carriera/nuova-carriera-casuale/nuova-carriera-casuale.component';
import { NuovaCarrieraComponent } from './views/carriera/nuova-carriera/nuova-carriera.component';
import { ConfiguratoreComponent } from './views/configuratore/configuratore/configuratore.component';
import { CaricaCoppaComponent } from './views/coppa/carica-coppa/carica-coppa.component';
import { GiocaCoppaComponent } from './views/coppa/gioca-coppa/gioca-coppa.component';
import { NuovaCoppaCasualeComponent } from './views/coppa/nuova-coppa-casuale/nuova-coppa-casuale.component';
import { NuovaCoppaComponent } from './views/coppa/nuova-coppa/nuova-coppa.component';
import { GiocaSpareggioStagioneComponent } from './views/gestione-stagioni/gioca-spareggio-stagione/gioca-spareggio-stagione.component';
import { GiocaSpareggioComponent } from './views/gestione-stagioni/gioca-spareggio/gioca-spareggio.component';
import { NuovoSpareggioStagioneComponent } from './views/gestione-stagioni/nuovo-spareggio-stagione/nuovo-spareggio-stagione.component';
import { NuovoSpareggioComponent } from './views/gestione-stagioni/nuovo-spareggio/nuovo-spareggio.component';
import { PreparaCampionatoComponent } from './views/gestione-stagioni/prepara-campionato/prepara-campionato.component';
import { PreparaStagioneComponent } from './views/gestione-stagioni/prepara-stagione/prepara-stagione.component';
import { MenuComponent } from './views/menu/menu/menu.component';
import { CaricaStagioneComponent } from './views/stagione/carica-stagione/carica-stagione.component';
import { GiocaStagioneComponent } from './views/stagione/gioca-stagione/gioca-stagione.component';
import { NuovaStagioneCasualeComponent } from './views/stagione/nuova-stagione-casuale/nuova-stagione-casuale.component';
import { NuovaStagioneComponent } from './views/stagione/nuova-stagione/nuova-stagione.component';
import { GiornataComponent } from './widget/giornata/giornata.component';


const routes: Routes = [
  { path: '', component: MenuComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'carica-campionato', component: CaricaCampionatoComponent,  canActivate: [AuthGuard] },
  { path: 'nuovo-campionato', component: NuovoCampionatoComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-giornata', component: GiornataComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-campionato/:id', component: GiocaCampionatoComponent,  canActivate: [AuthGuard] },
  {
    path: 'nuovo-campionato-casuale',
    component: NuovoCampionatoCasualeComponent,
  },
  { path: 'nuova-stagione', component: NuovaStagioneComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-stagione/:id', component: GiocaStagioneComponent,  canActivate: [AuthGuard] },
  { path: 'carica-stagione', component: CaricaStagioneComponent,  canActivate: [AuthGuard] },
  { path: 'nuova-stagione-casuale', component: NuovaStagioneCasualeComponent,  canActivate: [AuthGuard] },

  { path: 'nuova-coppa', component: NuovaCoppaComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-coppa/:id', component: GiocaCoppaComponent,  canActivate: [AuthGuard] },
  { path: 'carica-coppa', component: CaricaCoppaComponent,  canActivate: [AuthGuard] },
  { path: 'nuova-coppa-casuale', component: NuovaCoppaCasualeComponent,  canActivate: [AuthGuard] },

  { path: 'nuova-carriera', component: NuovaCarrieraComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-carriera/:id', component: GiocaCarrieraComponent,  canActivate: [AuthGuard] },
  { path: 'carica-carriera', component: CaricaCarrieraComponent,  canActivate: [AuthGuard] },
  { path: 'nuova-carriera-casuale', component: NuovaCarrieraCasualeComponent,  canActivate: [AuthGuard] },

  { path: 'nuovo-spareggio/:id', component: NuovoSpareggioComponent,  canActivate: [AuthGuard] },
  { path: 'gioca-spareggio/:id', component: GiocaSpareggioComponent,  canActivate: [AuthGuard] },
  { path: 'prepara-campionato/:id', component: PreparaCampionatoComponent,  canActivate: [AuthGuard] },
  { path: 'prepara-stagione/:id', component: PreparaStagioneComponent,  canActivate: [AuthGuard] },
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
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
