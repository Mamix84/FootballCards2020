import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuovaCarrieraComponent } from './nuova-carriera/nuova-carriera.component';
import { GiocaCarrieraComponent } from './gioca-carriera/gioca-carriera.component';
import { CaricaCarrieraComponent } from './carica-carriera/carica-carriera.component';
import { NuovaCarrieraCasualeComponent } from './nuova-carriera-casuale/nuova-carriera-casuale.component';

@NgModule({
  declarations: [
    NuovaCarrieraComponent,
    GiocaCarrieraComponent,
    CaricaCarrieraComponent,
    NuovaCarrieraCasualeComponent,
  ],
  imports: [CommonModule],
  exports: [
    NuovaCarrieraComponent,
    GiocaCarrieraComponent,
    CaricaCarrieraComponent,
    NuovaCarrieraCasualeComponent,
  ],
})
export class CarrieraModule {}
